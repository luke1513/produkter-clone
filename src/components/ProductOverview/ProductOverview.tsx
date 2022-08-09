import React, { useEffect, useState } from 'react'
import './ProductOverview.css'
import { postProductSearchRequest, getProductImageRequest } from '../../api'
import { PostProductSearchResponse } from '../../api/utils'
 
const ProductOverview = () => {

    const [products, setProducts] = useState<PostProductSearchResponse | undefined>(undefined)

    const postProductSearchRequestHandler = () => {
        let data: PostProductSearchResponse | undefined
        postProductSearchRequest({page: 1, pageSize: 99, searchText: "", productCategoryTypeIds: [], complianceTypeIds: [], sourceTypeIds: []})
        .then(res => {
            data = res
            setProducts(data)
        })
    }

    const getProductImageRequestHandler = (productId: number) => {
        let data: string | undefined
        getProductImageRequest(productId)
        .then(res => {
            data = res
        })
        
        return data
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
                        <img src={getProductImageRequestHandler(product.id)} loading="lazy" />
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