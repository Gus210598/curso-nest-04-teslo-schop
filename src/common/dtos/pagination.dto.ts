import { Type } from 'class-transformer';
import { IsNumber, IsOptional, IsPositive, Min } from 'class-validator';

export class PaginationDto {
  //

  // @IsNumber()
  // @Min(1)
  @IsOptional()
  @IsPositive()
  @Type(() => Number) // En lo pokemons es lo mismo que enableImplicitConversions: true
  limit?: number;

  @IsOptional()
  // @IsPositive()
  @Min(0)
  @Type(() => Number)
  offset?: number;
}
