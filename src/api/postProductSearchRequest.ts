import axios from "axios"
import { PostProductSearchBody, PostProductSearchResponse, postProductSearchUrl } from "./utils"

const postProductSearchRequest = async({page, pageSize, searchText, productCategoryTypeIds, complianceTypeIds, sourceTypeIds}: PostProductSearchBody): Promise<PostProductSearchResponse | undefined> => {
    try {
        const body: PostProductSearchBody = {
            page,
            pageSize,
            searchText,
            productCategoryTypeIds,
            complianceTypeIds,
            sourceTypeIds
        }
        const url = postProductSearchUrl
        const data = await axios.post(url, body)

        return data.data
    }
    catch(e) {
        console.log(e)

        return undefined
    }
}

export default postProductSearchRequest