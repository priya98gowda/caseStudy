// Comparison Opertor

// 1. $eq -> {<field>:{$eq:<value>}}
// 2. $ne -> {<field>:{$ne:<value>}}
// 3. $gte -> {field:{$gte:value}}
// 4. $gt -> {field:{$gt:value}}
// 5. $lte -> {field:{$lte:value}}
// 6. $lt -> {field:{$lt:value}}
// 7. $in -> {field:{$in:[<value1>,<value2>,....<valueN>]}}
// 8. $nin -> {field:{$nin:[<value1>,<value2>,....<valueN>]}}

// Queries

// 1.write a query to display the employee details who are not residing in benagaluru
db.emp.find( { "address.city": { $ne: "bengaluru" } }, {} ).pretty()

// 2.write a query to display the name and email of the employee whose salary is greater than or equal to 8000
db.emp.find( { salary: { $gte: 8000 } }, { name: 1, email: true, _id: 0 } )

// 3.write a query to display the name and salary of the employee who had paid more than 15000
db.emp.find( { salary: { $gt: 15000 } }, { name: 1, salary: 1, _id: 0 } )

// 4.write a query to display the name and city of the employee whose salary is not greater than 15000
db.emp.find( { salary: { $lte: 15000 } }, { name: 1, "address.city": 1 } )

// 5.write a query to display the email of all the employees who are eiither from bengaluru or from hyderbad
db.emp.find( { "address.city": { $in: ["bengaluru", "hyderbad"] } }, { mail: 1 } ).pretty()

//6.write a query to display all the employee whose salary is not equal to 10k,8k,15k
db.emp.find({salary:{$nin:[10000,15000,8000]}},{}).pretty()


// Assignment

// 1.write a query to dispaly all the employee who are not from art street and food street
db.emp.find( { "address.street": { $nin:["art street","food street"] } },{}).pretty()


// 2.write a query to display all the employees whose salary is in between 15000 and 50000
db.emp.find( { $and: [{ salary: { $gt: 15000 } }, { salary: { $lt: 50000 } }] }, { salary: 1 } ).pretty()
