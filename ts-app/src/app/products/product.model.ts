// tipado de datos
import { BaseModel } from '../base.model';
import { Description } from '../descriptions/description.model'

export type Sizes = 'S' | 'M' | 'L' | 'XL';

// conjunto de propiedades que deben tener los objetos
// interface se puede extender.

export interface Product extends BaseModel{
  price: number;
  stock: number;
  image: string;
  color: string;
  size: Sizes;
  description: Description;
  isNew: boolean;
  tags: string[];
}
