import './ProductFilter.css'

import FreeTextSearch from './FreeTextSearch'
import { PostProductSearchResponse } from '../../api/utils'

type ProductFilterPropTypes = {
    onSetProducts: (value: Promise<PostProductSearchResponse | undefined>) => void
}

const ProductFilter = ({onSetProducts}: ProductFilterPropTypes) => {
    
    return (
        <div className="product-filter">
            <FreeTextSearch onSetProducts={onSetProducts} />
        </div>
    )
}

export default ProductFilter