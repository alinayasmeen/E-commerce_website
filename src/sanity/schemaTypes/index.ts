import { type SchemaTypeDefinition } from 'sanity'
import { productSchema } from './products'
import {categorySchema } from './categories'
import dotenv from 'dotenv';

dotenv.config();

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [ productSchema , categorySchema ],
}
