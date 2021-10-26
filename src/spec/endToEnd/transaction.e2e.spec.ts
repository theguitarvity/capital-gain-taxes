import request from 'supertest'
import app from "../../infra/express/app";

describe('Transaction', () => {
    it('should call /retrieve-taxes and get status 200', () => {
        const transaction = [
            {
                "operation": "buy",
                "unit-cost": 10,
                "quantity": 10000
            },
            {
                "operation": "sell",
                "unit-cost": 20,
                "quantity": 5000
            }
        ]
        request(app)
            .post('retrieve-taxes')
            .send(transaction)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
    })
})