import { Metadata } from 'next';
import ProductList from '../../components/shared/products/product-list';
import { getLatestProducts } from '@/actions';
import { LATEST_PRODUCTS_LIMIT } from '@/lib/constants';
import { Product } from '@/interfaces';

export const metadata: Metadata = {
  title: 'Home',
};

const Home = async () => {

  const latestProducts: Product[] = await getLatestProducts();

  return (
    <>
      <ProductList data={ latestProducts } title="Newest Arrivals" limit={ LATEST_PRODUCTS_LIMIT } />
    </>
  );
};

export default Home;