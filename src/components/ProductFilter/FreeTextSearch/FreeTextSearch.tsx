import { PostProductSearchResponse } from '../../../api/utils'
import './FreeTextSearch.css'

type ProductFilterPropTypes = {
    onSetProducts: (value: Promise<PostProductSearchResponse | undefined>) => void
}

const FreeTextSearch = ({onSetProducts}: ProductFilterPropTypes) => {

    return (
        <input />
    )
}

export default FreeTextSearch