export type PostProductSearchResponse = {
    'results': {id: number, name: string}[],
    'currentPage': number,
    'pageCount': number,
    'pageSize': number,
    'rowCount': number
    onSetProducts: () => PostProductSearchResponse | undefined
}