const assert = require('assert');
const chai = require('chai');
const api = require('./../app')

// Assertion
chai.use(require('chai-http'));
chai.should();


describe('APIs', () => {
    

    // test GET /api/users
    describe('Test GET route /api/users', () => {
        it("It should return a list of all users", (done) => {
            chai.request(api)
                .get('/api/users')
                .end((err, data) => {
                    data.should.have.status(200);
                    data.body.data.should.be.a('array');
                    data.body.should.be.a('object')
                    done();
                })
        });

        it("It should not GET all the task. Wrong endpoint", (done) => {
            chai.request(api)
                .get('/api/user')
                .end((err, data) => {
                    data.should.have.status(404);
                    done();
                })
        })
    });


    /**
     * Test POST /api/user */
    describe('Test POST route /api/user', () => {
        it("It should create(post) a new user", (done) => {
            const user = {
                firstname: "Steph",
                lastname: "Crown",
                email: "emmanuelstephen024@gmail.com",
                mobile: "+2349090194796"
            }
            chai.request(api)
                .post('/api/user')
                .send(user)
                .end((err, data) => {
                    data.should.have.status(201);
                    data.body.should.be.a('object');
                    data.body.data.should.have.property('firstname').eq(user.firstname);
                    data.body.data.should.have.property('lastname').eq(user.lastname);
                    data.body.data.should.have.property('email').eq(user.email);
                    data.body.data.should.have.property('mobile').eq(user.mobile);
                    data.body.data.should.have.property('id');
                    done();
                })
        });

        it('It shouldnt POST api/user because of invalid email', (done) => {
            const user = {
                firstname: "Steph",
                lastname: "Crown",
                email: "emmanuelstephen024gmail.com",
                mobile: "+2349090194796"
            }
            chai.request(api)
                .post('/api/user')
                .send(user)
                .end((err, data) => {
                    data.should.have.status(400);
                    data.body.should.have.property('error').eq('users validation failed: email: The e-mail is not a valid e-mail.');
                    done();
                })
        })

        it('It shouldnt POST api/user because of absence of a field', (done) => {
            const user = {
                firstname: "Steph",
                lastname: "Crown",
                mobile: "+2349090194796"
            };
            chai.request(api)
                .post('/api/user')
                .send(user)
                .end((err, data) => {
                    data.should.have.status(400);
                    data.body.should.have.property('error').eq("users validation failed: email: No `email` field in request");
                    done();
                })
        })
    })
        
     


    /**
      * Test GET /api/user/:id
      */
    describe('Test GET route /api/user/:id', () => {
        it('It should get user by id ', (done) => {
            let validId = "194cugazfqu";
            chai.request(api)
                .get('/api/user/' + validId)
                .end((err, data) => {
                    data.should.have.status(200);
                    data.body.data.should.be.a('object');
                    data.body.data.should.have.property('id').eq(validId);
                    data.body.data.should.have.property('firstname');
                    data.body.data.should.have.property('lastname');
                    data.body.data.should.have.property('email');
                    data.body.data.should.have.property('mobile');
                    done();
                })
        });

        it('It should not get user by id because of wrong ID', (done) => {
            let invalidId = "stdufkcwfio5f";
            chai.request(api)
                .get('/api/user/' + invalidId)
                .end((err, data) => {
                    data.should.have.status(406);
                    data.body.should.be.a('object');
                    data.body.should.have.property('error').eq(`User with id ${invalidId} not found`);
                    done();
                })
        });


        
    })
    


    /**
      * Test PATCH /api/user/:id
      */
     describe('Test PATCH route /api/user/:id', () => {
        it('It should patch user by id ', (done) => {
            let validId = "194cugazfqu";
            chai.request(api)
                .patch('/api/user/' + validId)
                .end((err, data) => {
                    data.should.have.status(200);
                    data.body.should.be.a('object');
                    data.body.data.should.have.property('id').eq(validId);
                    done();
                })
        });

        it('It should not patch user by id because of wrong ID', (done) => {
            let invalidId = "stdufkcwfio5f";
            chai.request(api)
                .patch('/api/user/' + invalidId)
                .end((err, data) => {
                    data.should.have.status(406);
                    data.body.should.be.a('object');
                    data.body.should.have.property('error').eq(`User with id ${invalidId} not found`);
                    done();
                })
        });

        
        
    })
    


    /**
      * Test DELETE /api/user/:id
      */
     describe('Test DELETE route /api/user/:id', () => {
        it('It should patch user by id ', (done) => {
            let validId = "194cugazfqu";
            chai.request(api)
                .delete('/api/user/' + validId)
                .end((err, data) => {
                    data.should.have.status(200);
                    data.body.should.be.a('object');
                    data.body.data.should.have.property('id').eq(validId);
                    done();
                })
        });

        it('It should not DELETE user by id because of wrong ID', (done) => {
            let invalidId = "stdufkcwfio5f";
            chai.request(api)
                .delete('/api/user/' + invalidId)
                .end((err, data) => {
                    data.should.have.status(406);
                    data.body.should.be.a('object');
                    data.body.should.have.property('error').eq(`Data with id ${invalidId} not found `);
                    done();
                })
        });

        
        
    })
    
});
