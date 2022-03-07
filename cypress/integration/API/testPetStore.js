describe('CRUD PetStore API AUT', function () {
    it('POST: Add New Pet >> Success 200', function () {
        cy.request({
            method: 'POST',
            url: 'https://petstore.swagger.io/v2/pet',
            body: {
                "id": 9999,
                "category": {
                    "id": 3,
                    "name": "Dogs"
                },
                "name": "Hushkyy",
                "photoUrls": [
                    "string"
                ],
                "tags": [
                    {
                        "id": 4,
                        "name": "tag4"
                    }
                ],
                "status": "available"
            },
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function (response) {
            expect(response.status).to.equal(200)
            expect(response.body).to.deep.equal({
                "id": 9999,
                "category": {
                    "id": 3,
                    "name": "Dogs"
                },
                "name": "Hushkyy",
                "photoUrls": [
                    "string"
                ],
                "tags": [
                    {
                        "id": 4,
                        "name": "tag4"
                    }
                ],
                "status": "available"
            })
        })
    })
    it('PUT: Update Existing Pet >> Success 200', function () {
        cy.wait(1000)
        cy.request({
            method: 'PUT',
            url: 'https://petstore.swagger.io/v2/pet',
            body: {
                "id": 9999,
                "category": {
                    "id": 3,
                    "name": "Dogs"
                },
                "name": "Hushkyy Edit",
                "photoUrls": [
                    "string"
                ],
                "tags": [
                    {
                        "id": 4,
                        "name": "tag4"
                    }
                ],
                "status": "available"
            },
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function (response) {
            expect(response.status).to.equal(200)
            expect(response.body).to.deep.equal({
                "id": 9999,
                "category": {
                    "id": 3,
                    "name": "Dogs"
                },
                "name": "Hushkyy Edit",
                "photoUrls": [
                    "string"
                ],
                "tags": [
                    {
                        "id": 4,
                        "name": "tag4"
                    }
                ],
                "status": "available"
            })
        })
    })
    it('GET: Pet by ID >> Success 200', function () {
        cy.wait(5000)
        cy.request({
            method: 'GET',
            url: 'https://petstore.swagger.io/v2/pet/9999'

        }).then(function (response) {
            expect(response.status).to.equal(200)
            expect(response.body).to.deep.equal({
                "id": 9999,
                "category": {
                    "id": 3,
                    "name": "Dogs"
                },
                "name": "Hushkyy Edit",
                "photoUrls": [
                    "string"
                ],
                "tags": [
                    {
                        "id": 4,
                        "name": "tag4"
                    }
                ],
                "status": "available"
            })
        })
    })
    it('DELETE: Pet by ID >> Success 200', function () {
        cy.wait(3000)
        cy.request({
            method: 'DELETE',
            url: 'https://petstore.swagger.io/v2/pet/9999'

        }).then(function (response) {
            expect(response.status).to.equal(200)
            expect(response.body).to.deep.equal({
                "code": 200,
                "type": "unknown",
                "message": "9999"
            })
        })
    })
    it('GET: Pet by ID >> Not Found 404', function () {
        cy.wait(5000)
        cy.request({
            method: 'GET',
            url: 'https://petstore.swagger.io/v2/pet/9999',
            failOnStatusCode: false

        }).then(function (response) {
            expect(response.status).to.equal(404)
            expect(response.body).to.deep.equal({
                "code": 1,
                "type": "error",
                "message": "Pet not found"
            })
        })
    })
})