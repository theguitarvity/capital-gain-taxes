import calculateLossFromAvarageGain from "../../../../main/application/useCases/helpers/calculateLossFromAvarageGain"

describe('calculateLossFromAvarageGain', () => {
    it('should return 0 when tha avarage gain is bigger than zero', () => {
        const avarageGain = 10
        const quantity = 10

        const result = calculateLossFromAvarageGain(avarageGain, quantity)
        expect(result).toBe(0)
    })
    it('should return 0 when tha avarage gain is equal to zero', () => {
        const avarageGain = 0
        const quantity = 10

        const result = calculateLossFromAvarageGain(avarageGain, quantity)
        expect(result).toBe(0)
    })
    it('should return a value calculated when tha avarage gain is smaller than zero', () => {
        const avarageGain = -10
        const quantity = 10

        const result = calculateLossFromAvarageGain(avarageGain, quantity)
        expect(result).toBe(-100)
    })

})