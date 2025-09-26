import { Injectable } from '@nestjs/common';
import { ProductsService } from 'src/products/products.service';
import { initialData } from './data/seed-data';

@Injectable()
export class SeedService {
  //

  constructor(private readonly productsService: ProductsService) {}

  async runSeed() {
    await this.insertNewProducts();
    return 'SEED EXECUTED ERSSSS';
  }

  private async insertNewProducts() {
    //
    await this.productsService.deleteAllProducts();

    const products = initialData.products;

    //! Para que no de error se puede hacer de cualquiera de estas dos formas
    // const insertPromises= [{}]
    // const insertPromises: any = []
    const insertPromises = [{}];

    products.forEach((product) => {
      insertPromises.push(this.productsService.create(product));
    });

    await Promise.all(insertPromises);

    return true;
  }
}
