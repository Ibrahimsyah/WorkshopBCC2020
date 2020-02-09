const chai = require('chai')
const expect = require('chai').expect
const chaihttp = require('chai-http')

chai.use(chaihttp)
describe('API TESTING', () => {
    it('should return user', (done) => {
        chai.request('localhost:69')
            .get('/user')
            .end((err, res) => {
                expect(res).to.have.status(200)
                expect(res.body).to.have.property("success", true)
            })
        done()
    })
})