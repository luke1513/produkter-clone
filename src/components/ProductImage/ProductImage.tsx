import React, { useEffect, useState } from 'react'
import './ProductImage.css'

type ProductImageProps = {
    imgSrc: Promise<string | undefined>
}
 
const ProductImage = ({imgSrc}: ProductImageProps) => {

    const [loadedSrc, setLoadedSrc] = useState<string | undefined>(undefined)

    useEffect(() => {
        imgSrc.then(res => setLoadedSrc(res))
    }, [imgSrc])

    return (
        <img src={loadedSrc} loading="lazy" alt="" />
    )
}

export default ProductImage