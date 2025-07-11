import { insertProductSchema } from '@/lib/validators';
import z from 'zod';

export interface Product extends z.infer<typeof insertProductSchema> {
  id: string;
  rating: string;
  numReviews: number;
  createdAt: Date;
}
