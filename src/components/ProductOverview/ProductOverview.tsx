import React, { useEffect, useState } from 'react'
import './ProductOverview.css'
import { postProductSearchRequest, getProductImageRequest } from '../../api'
import { PostProductSearchResponse } from '../../api/utils'
import ProductImage from '../ProductImage'
 
const ProductOverview = () => {

    const [products, setProducts] = useState<PostProductSearchResponse | undefined>(undefined)

    const postProductSearchRequestHandler = () => {
        postProductSearchRequest({page: 1, pageSize: 99, searchText: "", productCategoryTypeIds: [], complianceTypeIds: [], sourceTypeIds: []})
        .then(res => {
            setProducts(res)
        })
    }

    const getProductImageRequestHandler = (productId: number) => {
        return getProductImageRequest(productId)
    }

    useEffect(() => {
        postProductSearchRequestHandler()
    }, [])

    return (
        products
        ? 
            <div className="product-container">
                {products.results.map(product => 
                    <div className="product" key={product.id}>
                        <ProductImage imgSrc={getProductImageRequestHandler(product.id)}/>
                        <p>{product.name}</p>
                    </div>
                    
                )}
            </div>
        : 
            <div>
                Loading...
            </div>
    )
}

export default ProductOverview