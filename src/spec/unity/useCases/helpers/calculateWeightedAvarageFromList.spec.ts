import calculateWeightedAvarageFromList from "../../../../main/application/useCases/helpers/calculateWeightedAvarageFromList"

describe('calculateWeightedAvarageFromList', () => {
    it('shoul return an weighted avarage value from a list of transactions', () => {
        const transactions = [
            {
                "operation": "buy",
                "unit-cost": 10,
                "quantity": 10000
            },
            {
                "operation": "sell",
                "unit-cost": 20,
                "quantity": 5000
            }
        ]


        const result = calculateWeightedAvarageFromList(transactions, 'unit-cost', 'quantity')
        expect(result).toBe(13.33)
    })
    it('should return 0 when weightIndex is empty', () => {
        const result = calculateWeightedAvarageFromList([], '', 'quantity')
        expect(result).toEqual(0)
    })
    it('should return 0 when valueIndex is empty', () => {
        const result = calculateWeightedAvarageFromList([], 'quantity', '')
        expect(result).toEqual(0)
    })
})