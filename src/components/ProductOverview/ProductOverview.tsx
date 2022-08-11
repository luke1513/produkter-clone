import './ProductOverview.css'
import { PostProductSearchResponse } from '../../api/utils'
import ProductImage from '../ProductImage'
//import loadingImg from '../../../public/graphics/loading.gif' doesn't work for now

type ProductOverviewPropTypes = {
    products: PostProductSearchResponse | undefined,
}
 
const ProductOverview = ({products}: ProductOverviewPropTypes) => {

    return (
        products
        ?
            products.results.length
            ?
                <div className='product-container'>
                    {products.results.map(product => 
                        <div className='product' key={product.id}>
                            <ProductImage productId={product.id} />
                            <p>{product.name}</p>
                        </div>
                        
                    )}
                </div>
            :
                <div>
                    No products found
                </div>

        : 
            <div>
                {/* <img src='' className='loading' alt='' /> */}
                Loading...
            </div>
    )
}

export default ProductOverview