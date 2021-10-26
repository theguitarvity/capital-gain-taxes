import retrieveTaxFromTransactions from "../../../main/application/useCases/retrieveTaxFromTransactions";
import taxes from "../../../main/application/ports/response/taxes";
import transactionController from "../../../main/adapters/controller/transactionController";
import logger from "../../../infra/utils/logger";

jest.mock('../../../infra/utils/logger', () => ({
    info: jest.fn()
}))
jest.mock('../../../main/application/useCases/retrieveTaxFromTransactions')
const retrieveTaxFromTransactionsMock = retrieveTaxFromTransactions as jest.MockedFunction<typeof retrieveTaxFromTransactions>;

const mockRequest = {
    body: {}
}
const mockResponse =  {
        send: jest.fn(),
        status: jest.fn().mockImplementation(() => ({json: jest.fn()})),
        json: jest.fn()
}
describe('transactionController', () => {
    it('should call retrieveTaxFromTransactionsMock and return taxes from transactions', () => {
        const taxesMock: taxes[] = [
            {
                tax: 0,
            },
            {
                tax: 10,
            }
        ]

        retrieveTaxFromTransactionsMock.mockReturnValueOnce(taxesMock)

        const transactions = [
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

        mockRequest.body = transactions
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        transactionController.getTaxesFromTransactions(mockRequest, mockResponse)

        expect(logger.info).toHaveBeenCalledWith(`[transactionController] retrieving taxes with ${JSON.stringify(mockRequest.body)}`)
        expect(retrieveTaxFromTransactionsMock).toHaveBeenCalledWith(transactions)
        expect(logger.info).toHaveBeenCalledWith(`[transactionController] taxes retrieved ${JSON.stringify(taxesMock)}`)
        expect(mockResponse.status).toHaveBeenCalledWith(200)
    })
})