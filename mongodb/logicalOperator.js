// Logical Operators

// 1. $and ->{$and:[{<expression1>},{<expression2>},....{<expressionN>}]}
// 2. $not ->{field:{$not:{<operator-expression>}}}
// 3. $nor ->{$nor:[{<expression1>},{<expression2>},....{<expressionN>}]}
// 4. $or ->{$or:[{<expression1>},{<expression2>},....{<expressionN>}]}

// Queries 

// 1.write a query o display all the employees whose salary is less than 15k and from bengaluru
db.emp.find( { $and: [{ salary: { $lt: 15000 } }, { "address.city": "bengaluru" }] }, {} ).pretty()

// 2.write a query to display all the employees whose salary is not less than 10000
db.emp.find( { salary: { $not: { $lt: 10000 } } }, {} ).pretty()

// 3.write a query to  display all the employees who are not from bengaluru and whose salary is not >34000
db.emp.find( { $nor: [{ "address.city": "bengaluru" }, { salary: { $gt: 34000 } }] }, {} ).pretty()

// 4.write a query to display all the employees who are either from chennai or whose salary is >15000
db.emp.find( { $or: [{ "address.city": "chennai" }, { salary: { $gt: 15000 } }] }, {} ).pretty()

// Assignment

// 1.write a query to display all the employees whose city is bengaluru and deptno is 20
db.emp.find( { $and: [{ deptno: 20 }, { "address.city": "bengaluru" }] }, {} ).pretty()

// 2.write a query to display all the employees whose salary is not equal to 30000
db.emp.find( { salary: { $not: { $eq: 30000 } } }, {} ).pretty()

// 3. write a query to dislay all the employees whose city is not chennai and will not have salary less than 15000
db.emp.find( { $nor: [{ "address.city": "chennai" }, { salary: { $lte: 15000 } }] }, {} ).pretty()

// 4.write a query to display all the employees who are either from bengaluru or chennai
db.emp.find( { $or: [{ "address.city": "chennai" }, { "address.city": "bengaluru"}] }, {} ).pretty()

