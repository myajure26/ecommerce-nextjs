import sampleData from '@/db/sample-data';
import { Metadata } from 'next';
import ProductList from '../../components/shared/products/product-list';

export const metadata: Metadata = {
  title: 'Home',
}

export default function Home() {
  return (
    <>
      <ProductList data={sampleData.products} title="Newest Arrivals" limit={4}/>

    </>
  );
}
