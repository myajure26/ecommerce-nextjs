import { getProductBySlug } from '@/actions';
import { Badge, Button, Card, CardContent, ProductImages, ProductPrice } from '@/components';
import { notFound } from 'next/navigation';

const ProductDetailsPage = async ( props: { params: Promise<{ slug: string; }>; } ) => {

  const { slug } = await props.params;

  const product = await getProductBySlug( slug );

  if ( !product ) notFound();

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-5">
        <div className="col-span-2">
          <ProductImages images={product.images}/>
        </div>
        <div className="col-span-2 p-5">
          <div className="flex flex-col gap-6">
            <p>
              { product.brand } { product.category }
            </p>
            <h1 className="h3-bold">{ product.name }</h1>
            <p>{ product.rating.toString() } of { product.numReviews.toString() }</p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <ProductPrice
                value={ Number( product.price ) }
                className="w-24 rounded-full bg-green-100 text-green-700 px-5 py-2"
              />
            </div>
          </div>
          <div className="mt-10">
            <p className="font-semibold">Description</p>
            <p>{ product.description }</p>
          </div>
        </div>

        <div>
          <Card>
            <CardContent className="py-2 px-4">
              <div className="mb-2 flex justify-between">
                <div>Price</div>
                <ProductPrice value={ Number( product.price ) } />
              </div>

              <div className="mb-2 flex justify-between">
                { product.stock > 0 ? (
                  <Badge variant="outline">In Stock</Badge>
                ) : (
                  <Badge variant="destructive">Out of Stock</Badge>
                ) }
              </div>
              { product.stock > 0 && (
                <div className="flex-center">
                  <Button className="w-full">Add to cart</Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default ProductDetailsPage;