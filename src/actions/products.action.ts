import { LATEST_PRODUCTS_LIMIT } from '@/lib/constants';
import prisma from '@/lib/prisma';

//* Get Latest Products
export const getLatestProducts = async() => {
  
  const products = await prisma.product.findMany({
    orderBy: {
      createdAt: 'desc',
    },
    take: LATEST_PRODUCTS_LIMIT,
  });

  return products.map(product => ({
    ...product,
      price: product.price.toString(),
      rating: product.rating.toString(),
  }));
  
}

//* Get Product by slug
export const getProductBySlug = async(slug: string) => {
  const product = await prisma.product.findFirst({
    where: { slug: slug },
  });

  if (!product) throw new Error('Product not found');

  return product

}
