import './index.css'

import ProductOverview from './components/ProductOverview'
import { PostProductSearchResponse } from './api/utils';
import { useEffect, useState } from 'react';
import { postProductSearchRequest } from './api';
import ProductFilter from './components/ProductFilter';

const App = () => {
    const [products, setProducts] = useState<PostProductSearchResponse | undefined>(undefined)

    const handleSetProducts = (value: Promise<PostProductSearchResponse | undefined>) => {
        value.then(res => setProducts(res))
    }

    useEffect(() => {
        handleSetProducts(postProductSearchRequest({page: 1, pageSize: 99, searchText: '', productCategoryTypeIds: [], complianceTypeIds: [], sourceTypeIds: []}))
    }, [])

    return (
        <div>
            <ProductFilter onSetProducts={handleSetProducts} />
            <ProductOverview products={products} />
        </div>
        
    )
}

export default App