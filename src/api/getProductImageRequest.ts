import axios from "axios"
import { getProductImageUrl } from "./utils"

const getProductImageRequest = async(imageId: number): Promise<string | undefined> => {
    try {
        const url = getProductImageUrl(imageId)
        const data = await axios.get(url)

        return data.data
    }
    catch(e) {
        console.log(e)

        return undefined
    }
}

export default getProductImageRequest