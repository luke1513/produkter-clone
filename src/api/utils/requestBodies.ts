export type PostProductSearchBody = {
    'page': number,
    'pageSize': number,
    'searchText': string,
    'productCategoryTypeIds': number[],
    'complianceTypeIds': number[],
    'sourceTypeIds': number[]
}