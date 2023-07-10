import { Product } from './product.model';

// Dto: Data Transfer Object

// Omit: omitir propiedades de un objeto

export interface CreatedProductDto extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'description'>{
  descriptionId: string;
};

// Partial: permite que las propiedades sean opcionales

export interface UpdatedProductDto extends Partial<CreatedProductDto>{}

// Required: permite que las propiedades sean requeridas

export type example = Required<CreatedProductDto>;

// ReadOnly: permite que las propiedades sean de solo lectura

export interface FindProductDto extends Readonly<Partial<Omit<Product, 'tags'>>> {
  readonly tags: ReadonlyArray<string>;
}

