export default function(avarageGain: number, quantity: number): number {
    if(avarageGain >= 0){
        return 0
    }

    return avarageGain * quantity
}