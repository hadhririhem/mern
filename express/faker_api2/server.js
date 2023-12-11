const express = require("express");
const app = express();
const port = 8000;

const { faker } = require('@faker-js/faker');

const CreateUser = () => {
    const User = {
        firstName : faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        phoneNumber : faker.phone.number(),
        password : faker.internet.password(),
        _id : faker.number.int(),
    };
    return User;
}

const CreateCompany = () => {

    const address = {
        country : faker.location.country(),
        city : faker.location.city(),
        state: faker.location.state(),
        street : faker.location.street(),
        zipCode : faker.location.zipCode(),
    };

    const Company = {
        name: faker.company.name(),
        _id : faker.number.int(),
        address : address,
        }
    return Company

}

const fakeUser = CreateUser();
const fakeCompany = CreateCompany();
const userOfCompany = { user : fakeUser, company : fakeCompany}

app.get("/api/users/new", (req, res) =>{
    res.json( fakeUser )
});

app.get("/api/companies/new", (req, res) =>{
    res.json( fakeCompany )
});

app.get("/api/user/company", (req, res) =>{
    res.json( userOfCompany )
});




app.listen( port, () => console.log(`Listening on port: ${port}`) );