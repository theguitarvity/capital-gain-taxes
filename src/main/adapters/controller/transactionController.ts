import { Request, Response } from "express"
import taxes from "../../application/ports/response/taxes"
import retrieveTaxFromTransactions from "../../application/useCases/retrieveTaxFromTransactions";
import logger from "../../../infra/utils/logger";
export default {
    getTaxesFromTransactions: (request: Request, response: Response): void => {
        logger.info(`[transactionController] retrieving taxes with ${JSON.stringify(request.body)}`)
        const result: taxes[] = retrieveTaxFromTransactions(request.body)
        logger.info(`[transactionController] taxes retrieved ${JSON.stringify(result)}`)
        response.status(200).json(result)
    }
}