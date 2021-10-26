import calculateLossFromAvarageGain from "../../../../main/application/useCases/helpers/calculateLossFromAvarageGain"
import verifyIfTheTransactionWillNotPayTaxes from "../../../../main/application/useCases/helpers/verifyIfTheTransactionWillNotPayTaxes"
import calculateTaxFromTransaction from "../../../../main/application/useCases/helpers/calculateTaxFromTransaction";
import calculateProfitFromAvarageGain from "../../../../main/application/useCases/helpers/calculateProfitFromAvarageGain";

jest.mock('../../../../main/application/useCases/helpers/calculateLossFromAvarageGain')
jest.mock('../../../../main/application/useCases/helpers/calculateProfitFromAvarageGain')
jest.mock('../../../../main/application/useCases/helpers/verifyIfTheTransactionWillNotPayTaxes')

const verifyIfTheTransactionWillNotPayTaxesMock = verifyIfTheTransactionWillNotPayTaxes as jest.MockedFunction<typeof verifyIfTheTransactionWillNotPayTaxes>
const calculateLossFromAvarageGainMock = calculateLossFromAvarageGain as jest.MockedFunction<typeof calculateLossFromAvarageGain>
const calculateProfitFromAvarageGainMock = calculateProfitFromAvarageGain as jest.MockedFunction<typeof calculateProfitFromAvarageGain>
describe('calculateTaxFromTransaction', () => {
    it('should set tax as 0.0 when is not to pay taxes', () => {
        verifyIfTheTransactionWillNotPayTaxesMock.mockReturnValueOnce(true)
        calculateProfitFromAvarageGainMock.mockImplementationOnce(() => 0)
        calculateLossFromAvarageGainMock.mockImplementationOnce(() => 0)

        const result = calculateTaxFromTransaction({
            'operation': 'buy',
            'unit-cost': 0,
            'quantity':0,
        }, 0,0,0)

        expect(result).toEqual({
            tax: 0.0
        })
        expect(calculateProfitFromAvarageGainMock).toHaveBeenCalledWith(0, 0, 0)
        expect(calculateLossFromAvarageGainMock).toHaveBeenCalledWith(0, 0)
        expect(verifyIfTheTransactionWillNotPayTaxesMock).toHaveBeenCalledWith('buy', 0, 0, 0)
    })
    it('should set tax as calculated value when is to pay taxes', () => {
        verifyIfTheTransactionWillNotPayTaxesMock.mockReturnValueOnce(false)
        calculateProfitFromAvarageGainMock.mockImplementationOnce(() => 10)
        calculateLossFromAvarageGainMock.mockImplementationOnce(() => 0)

        const result = calculateTaxFromTransaction({
            'operation': 'sell',
            'unit-cost': 20,
            'quantity':5000,
        }, 13.33,0,0)

        expect(result).toEqual({
            tax: 2
        })
        expect(calculateProfitFromAvarageGainMock).toHaveBeenCalledWith(6.67, 5000, 0)
        expect(calculateLossFromAvarageGainMock).toHaveBeenCalledWith(6.67, 5000)
        expect(verifyIfTheTransactionWillNotPayTaxesMock).toHaveBeenCalledWith('sell', 20, 100000, 13.33)
    })
})