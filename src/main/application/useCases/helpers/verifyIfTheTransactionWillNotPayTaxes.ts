import transactions from "../../../../config/constants/transactions";
export default function(operation: string, unitCost: number, amount: number, weightedAvaregePrice: number): boolean {
    return operation === 'buy' && (amount < transactions.MAX_AMOUNT_FREE) && unitCost < weightedAvaregePrice
}