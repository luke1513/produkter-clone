import './ProductOverview.css'
import { getProductImageRequest } from '../../api'
import { PostProductSearchResponse } from '../../api/utils'
import ProductImage from '../ProductImage'
//import loadingImg from '../../../public/graphics/loading.gif' doesn't work for now

type ProductOverviewPropTypes = {
    products: PostProductSearchResponse | undefined,
}
 
const ProductOverview = ({products}: ProductOverviewPropTypes) => {

    const handleSetProductImage = (productId: number) => {
        return getProductImageRequest(productId)
    }

    return (
        products
        ? 
            <div className='product-container'>
                {products.results.map(product => 
                    <div className='product' key={product.id}>
                        <ProductImage imgSrc={handleSetProductImage(product.id)}/>
                        <p>{product.name}</p>
                    </div>
                    
                )}
            </div>
        : 
            <div>
                {/* <img src='' className='loading' alt='' /> */}
                Loading...
            </div>
    )
}

export default ProductOverview