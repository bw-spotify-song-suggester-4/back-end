const request = require('supertest');
const db = require('../../database/dbConfig');
const server = require('../../server');

describe('Accounts model and endpoints', () => {

    let token;

    beforeAll((done) => {
        request(server)
            .post('/login')
            .send({
                "username": "Shanda",
                "password": "test"
            })
            .end((err, response) => {
                token = response.body.token
                // if (err) console.log(err)
                done();
            })
    })

    describe('TESTING ENVIRONMENT', () => {
        it('should set env to testing', () => {
            expect(process.env.DB_ENV).toBe('testing');
        });  
    })

    describe('REGISTER', () => {
        let data = {
            "username": "Michael",
            "password": "bae"
        }
        it('POST: should send status 201 when register successful', (done) => {
            request(server)
                .post('/accounts/register')
                .send(data)
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(201)
                .end((err) => {
                    if (err) return done(err);
                    done();
                })
        })
        it('POST: should error out if there is incomplete data sent', (done) => {
            request(server)
                .post('/accounts/register')
                .send({"username": ""})
                .set('Accept', 'application/json')
                // .expect('Content-Type', /json/)
                .expect(500)
                .end((err) => {
                    if (err) return done(err);
                    done();
                })
        })
    })

    // LOGIN tests
    describe('LOGIN', () => {

        it('POST: error if the wrong data is sent', (done) => {
            request(server)
                .post('/accounts/login')
                .send({"Finn": "yo@email.com", "password": 25 })
                .set('Accept', 'application/json')
                // .expect('Content-Type', /json/)
                .expect(500)
                .end((err) => {
                    if (err) return done(err);
                    done();
                })
        })
        it('POST: error if there is incomplete data sent', (done) => {
            request(server)
                .post('/accounts/login')
                .send({"username": ""})
                .set('Accept', 'application/json')
                // .expect('Content-Type', /json/)
                .expect(401)
                .end((err) => {
                    if (err) return done(err);
                    done();
                })
        })
    })
})