import taxes from "../../ports/response/taxes";
import calculateProfitFromAvarageGain from "./calculateProfitFromAvarageGain";
import verifyIfTheTransactionWillNotPayTaxes from "./verifyIfTheTransactionWillNotPayTaxes";
import calculateLossFromAvarageGain from "./calculateLossFromAvarageGain";
import transactions from "../../../../config/constants/transactions";

export default function(transaction: any, weightedAvaragePricePaid: number, profit: number, loss:number):taxes {
    const amount: number = transaction['unit-cost'] * transaction['quantity']
    const avarageGain: number = transaction['unit-cost'] - weightedAvaragePricePaid;
    
    loss += calculateLossFromAvarageGain(avarageGain, transaction['quantity'])

    profit += calculateProfitFromAvarageGain(avarageGain, transaction['quantity'], loss)

    const tax = profit * transactions.TAX_PORCENTAGE;
    
    return {
        tax: verifyIfTheTransactionWillNotPayTaxes(transaction['operation'], transaction['unit-cost'], amount, weightedAvaragePricePaid)  ? 0.0 : tax,
    }

}