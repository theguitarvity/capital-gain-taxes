import calculateProfitFromAvarageGain from "../../../../main/application/useCases/helpers/calculateProfitFromAvarageGain"

describe('calculateProfitFromAvarageGain', () => {
    it('should return 0 when avarageGain is smaller than zero', () => {
        const avarageGain = -10
        const quantity = 10

        const result = calculateProfitFromAvarageGain(avarageGain, quantity, 0)
        expect(result).toBe(0)
    })
    it('should return a calculated value when avarageGain is bigger than zero', () => {
        const avarageGain = 10
        const quantity = 10

        const result = calculateProfitFromAvarageGain(avarageGain, quantity, 0)
        expect(result).toBe(100)
    })

})