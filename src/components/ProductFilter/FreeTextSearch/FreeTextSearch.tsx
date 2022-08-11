import { ChangeEvent } from 'react'
import { useState } from 'react'
import { postProductSearchRequest } from '../../../api'
import { PostProductSearchResponse } from '../../../api/utils'
import './FreeTextSearch.css'

type ProductFilterPropTypes = {
    onSetProducts: (value: Promise<PostProductSearchResponse | undefined>) => void
}

const FreeTextSearch = ({onSetProducts}: ProductFilterPropTypes) => {
    const [productSearchInputValue, setProductSearchInputValue] = useState('')

    const handleSearchInputValueChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setProductSearchInputValue(e.target.value)
        onSetProducts(postProductSearchRequest({page: 1, pageSize: 99, searchText: e.target.value, productCategoryTypeIds: [], complianceTypeIds: [], sourceTypeIds: []}))
    }

    return (
        <input value={productSearchInputValue} onChange={(e) => handleSearchInputValueChange(e)} placeholder='Søg produkter' />
    )
}

export default FreeTextSearch