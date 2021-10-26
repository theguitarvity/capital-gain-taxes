import taxes from "../ports/response/taxes"
import calculateTaxFromTransaction from "./helpers/calculateTaxFromTransaction"
import calculateWeightedAvarageFromList from "./helpers/calculateWeightedAvarageFromList"
import transaction from "../ports/request/transaction";


export default function (transactions: transaction[]) : taxes[] {
    const buyingTransactions:transaction[] = transactions.filter((transaction: transaction) => transaction['operation'] === 'buy')
    const weightedAvaragePricePaid: number = calculateWeightedAvarageFromList(buyingTransactions, 'unit-cost', 'quantity')
    return transactions.map((transaction: transaction) => calculateTaxFromTransaction(transaction, weightedAvaragePricePaid, 0, 0))
    
}