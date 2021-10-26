import { Router } from 'express'
import transactionController from '../../../main/adapters/controller/transactionController'
import valitation from '../../../main/adapters/validation/transaction/transaction.validation'

export default function(router: Router){
    router.post('/retrieve-taxes',  valitation, transactionController.getTaxesFromTransactions)

    return router
}