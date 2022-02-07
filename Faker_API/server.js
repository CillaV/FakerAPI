const { request, response } = require("express");
const express = require("express");
const faker = require("faker");
const app = express()



// creates a user

const createUser = () =>{       // function/method
    const fakeUser = {          // creates and object with variable fakeUser
        _id: faker.datatype.uuid(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phoneNumber: faker.phone.phoneNumber(),
        email: faker.internet.email(),
        password: faker.internet.password()
    };
    return fakeUser;
};



// creates a company  ----  id  name  address -- street city state  zipcode country

const createCompany = () => {
    const fakeCompany = {
        _id: faker.datatype.uuid(),
        name: faker.company.companyName(),
        street: faker.address.streetAddress(),
        city: faker.address.city(),
        state: faker.address.state(),
        zipCode: faker.address.zipCode(),
        country: faker.address.country


    };
    return fakeCompany
};



app.get("/api/users/new", (request, response) =>{
    const newFakeUser = createUser();
    console.log("new user arriving");
    response.json(newFakeUser);
})




app.get("/api/companies/new", (request, response) =>{
    const newFakeCompany = createCompany();
    console.log("new company being created")
    response.json(newFakeCompany);
})



app.get("/api/user/company" , (request, response) =>{
    const fakeUser = createUser();
    const fakeCompany = createCompany();
    const newFakeUserAndCompany = {user: fakeUser, company: fakeCompany} // if nothing else mentioned fakeUser is key 
    console.log("new user and company being generated");
    response.json(newFakeUserAndCompany);
})










app.get("/api", (request, response) =>{
    console.log("This is the API route!!!");
    response.json({message:"Hola Mundo"});
})







app.listen(8000, () => console.log("listening on port 8000"));

