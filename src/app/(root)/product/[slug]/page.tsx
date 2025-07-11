import { getProductBySlug } from '@/actions';
import ProductPrice from '@/components/shared/products/product-price';
import { notFound } from 'next/navigation';

const ProductDetailsPage = async (props: { params: Promise<{ slug: string }> }) => {

  const { slug } = await props.params;

  const product = await getProductBySlug(slug);

  if (!product) notFound();

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-5">
        <div className="col-span-2">

        </div>
        <div className="col-span-2 p-5">
          <p>
            {product.brand} {product.category}
          </p>
          <h1 className="h3-bold">{product.name}</h1>
          <p>{product.rating.toString()} of {product.numReviews.toString()}</p>
          <div className="flex flex-col sm:flex-row sm-items-center gap-3">
            <ProductPrice 
              value={Number(product.price)} 
              className="w-24 rounded-full bg-green-100 text-green-700 px-5 py-2"
              />
          </div>
        </div>
      </div>
    </>
  );
}
 
export default ProductDetailsPage;