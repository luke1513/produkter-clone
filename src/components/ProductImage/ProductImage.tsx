import React, { useEffect, useState } from 'react'
import { getProductImageRequest } from '../../api'
import './ProductImage.css'
 
type ProductImagePropTypes = {
    productId: number
}

const ProductImage = ({productId}: ProductImagePropTypes) => {

    const [loadedSrc, setLoadedSrc] = useState<string | undefined>(undefined)

    const handleSetProductImage = (value: Promise<string | undefined>) => {
        value.then(res => setLoadedSrc(res))
    }

    useEffect(() => {
        handleSetProductImage(getProductImageRequest(productId))
    }, [productId])

    return (
        <img src={loadedSrc} loading='lazy' alt='' />
    )
}

export default ProductImage