export default function(list: object[], weightIndex: string, valueIndex: string): number {
    if(weightIndex.length === 0 || valueIndex.length === 0){
        return 0
    }
    let sumOfProduct = 0
    let qtd = 0
    list.forEach((item:any) => {
        sumOfProduct += item[weightIndex] * item[valueIndex]
        qtd+=item[valueIndex]
    })
    const result: number = sumOfProduct/qtd

    return Math.round((result + Number.EPSILON) * 100) / 100

}