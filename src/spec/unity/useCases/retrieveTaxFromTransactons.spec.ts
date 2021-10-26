import calculateTaxFromTransaction from "../../../main/application/useCases/helpers/calculateTaxFromTransaction";
import retrieveTaxFromTransactions from "../../../main/application/useCases/retrieveTaxFromTransactions";
import calculateWeightedAvarageFromList
    from "../../../main/application/useCases/helpers/calculateWeightedAvarageFromList";
import transactions from "../../../config/constants/transactions";
import transaction from "../../../main/application/ports/request/transaction";
jest.mock('../../../main/application/useCases/helpers/calculateTaxFromTransaction')
jest.mock('../../../main/application/useCases/helpers/calculateWeightedAvarageFromList')
const calculateTaxFromTransactionMock = calculateTaxFromTransaction as jest.MockedFunction<typeof calculateTaxFromTransaction>;
const calculateWeightedAvarageFromListMock = calculateWeightedAvarageFromList as jest.MockedFunction<typeof calculateWeightedAvarageFromList>
describe('retrieveTaxFromTransactions', () => {
    it('should return a list of calculated tax from transactions', () => {
        const taxMock1 = {
            tax: 20,
        }
        const taxMock2 = {
            tax: 0,
        }
        calculateTaxFromTransactionMock
            .mockReturnValueOnce(taxMock1)
            .mockReturnValueOnce(taxMock2)

        const transactions: transaction[] = [
            {
                'operation': 'buy',
                'unit-cost': 10,
                'quantity': 10,
            },
            {
                'operation': 'sell',
                'unit-cost': 10,
                'quantity': 10,
            }
        ]
        const result = retrieveTaxFromTransactions(transactions)

        expect(result).toEqual([taxMock1, taxMock2])
        expect(calculateWeightedAvarageFromListMock).toHaveBeenCalledWith([transactions[0]], 'unit-cost', 'quantity')

    })
})