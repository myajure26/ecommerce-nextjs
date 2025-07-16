import { Metadata } from 'next';
import { getLatestProducts } from '@/actions';
import { LATEST_PRODUCTS_LIMIT } from '@/lib/constants';
import { Product } from '@/interfaces';
import { ProductDetails } from '@/components';

export const metadata: Metadata = {
  title: 'Home',
};

const Home = async () => {

  const latestProducts: Product[] = await getLatestProducts();

  return (
    <>
      <ProductDetails data={ latestProducts } title="Newest Arrivals" limit={ LATEST_PRODUCTS_LIMIT } />
    </>
  );
};

export default Home;