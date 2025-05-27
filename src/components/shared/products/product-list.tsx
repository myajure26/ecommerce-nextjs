import ProductCard from './product-card';

const ProductList = ({ data, title, limit }: {data: any, title: string, limit?: number}) => {

  const limitedData = limit ? data.slice(0, limit) : data;	

  return ( 
    <div className="my-10">
      <h2 className="h2-bold mb-10">{title}</h2>

      {limitedData.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md-grid-cols-3 lg:grid-cols-4 gap-5">
          {limitedData.map( (product: any) => (
            <ProductCard key={product.slug} product={product}/>
          ))}
        </div>
      ):(
        <div className="text-center mt-10">
          <p className="text-gray-400">No products found</p>
        </div>
      )
      }

    </div>
   );
}
 
export default ProductList;