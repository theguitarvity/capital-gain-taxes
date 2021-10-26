import verifyIfTheTransactionWillNotPayTaxes from "../../../../main/application/useCases/helpers/verifyIfTheTransactionWillNotPayTaxes"

describe('verifyIfTheTransactionWillNotPayTaxes', () => {
    it('should return false when transaction is to sell, amount is bigger than 20000 and unit cost is bigger than the weightedAvarageePrice', () => {
        const operation = 'sell'
        const unitCost = 11
        const amount = 30000
        const weightedAvarageePrice = 10

        const result: boolean = verifyIfTheTransactionWillNotPayTaxes(operation, unitCost, amount, weightedAvarageePrice)
        expect(result).toBeFalsy()
    })
    it('should return false when the operation is to sell', () => {
        const operation = 'sell'
        const result = verifyIfTheTransactionWillNotPayTaxes(operation, 9, 10, 10)

        expect(result).toBeFalsy()
    })
    it('should return false when the operation is to buy and amount is bigger than 20000', () => {
        const operation = 'buy'
        const amount = 30000
        const result = verifyIfTheTransactionWillNotPayTaxes(operation, 10, amount, 11)

        expect(result).toBeFalsy()
    })
    it('should return false when the operation is to buy and amount is smaller than 20000 and unit cost is bigger than avaragePrice', () => {
        const operation = 'buy'
        const amount = 19000
        const unitCost = 11
        const result = verifyIfTheTransactionWillNotPayTaxes(operation, unitCost, amount, 10)

        expect(result).toBeFalsy()
    })
    it('should return true when transaction is to buy, amount is smaller than 20000 and unit cost is smaller than the weightedAvarageePrice', () => {
        const operation = 'buy'
        const unitCost = 10
        const amount = 19000
        const weightedAvarageePrice = 11

        const result: boolean = verifyIfTheTransactionWillNotPayTaxes(operation, unitCost, amount, weightedAvarageePrice)
        expect(result).toBeTruthy()
    })
})