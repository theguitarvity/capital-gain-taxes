import routes from "../../../infra/express/routes";
import transactionController from "../../../main/adapters/controller/transactionController";
import validation from '../../../main/adapters/validation/transaction/transaction.validation'

jest.mock('../../../main/adapters/controller/transactionController', () => ({
    getTaxesFromTransactions: jest.fn()
}))
jest.mock('../../../main/adapters/validation/transaction/transaction.validation',() => jest.fn())
describe('routes', () => {
    const mockContext = {
        use: jest.fn(),
        post: jest.fn(),
        get: jest.fn(),
    }
    const req = {}
    const res = {}

    beforeEach(() => {
         // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        routes(mockContext)
    })
    it('should call transaction controller and body validation', () => {
        const call = mockContext.post.mock.calls[0]
        const callback = call[2]

        expect(call[0]).toBe('/retrieve-taxes')
        expect(call[1]).toBe(validation)
        callback(req, res)
        expect(transactionController.getTaxesFromTransactions).toHaveBeenCalledWith(req, res)
    })
})