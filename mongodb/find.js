//To Find how many document is there we use find() method

// 1.write a query to  display the names of all the employees
db.emp.find( {}, { name: 1, _id: 0 } )

// 2.write a query to  display the employee details whose salar is 15000
db.emp.find( { salary: 15000 }, {} ).pretty()

// 3.write a query to display the email and deptno of the employee who are residing in bengaluru
db.emp.find( { "address.city": "bengaluru" }, { email: 1, deptno: 1 ,_id:0} ).pretty()

// 4.write a query to display the city and street of all the employees who are working in deptno 30
db.emp.find( { deptno: 30 }, { "address.city": true, "address.street": true, _id: 0 } ).pretty()

//5. write a query to display the salary and doorno of the employee whose name is Jyothsna
db.emp.find( { name: "jyothsna" }, { salary: 1, dno: 1, _id: 0 } ).pretty()

//6.write a query to display the employee details whose phone number is 3333333333
db.emp.find( { phone: 3333333333 }, {} ).pretty()

// 7.write a query to display the address of the employee who is working in deptno 10 and salary is 80000
db.emp.find( { deptno: 10, salary: 8000 }, { address: 1 } ).pretty()

// 8.write a query to display the name and email of the employee whose pincode is 5562652
db.emp.find( { "address.pincode": 5562652 }, { name: 1, email: 1, _id: 0 } ).pretty()

// 9 write a query to display the salary of all the employee 
db.emp.find( {}, { salary: 1, _id: 0 } )

// 10.write a query to display the city and name of all the employee
db.emp.find( {}, { "address.city": 1, name: 1, _id: 0 } )

// 11.write a query to display the employee details of all the employee whose salary is less than 15000
db.emp.find( { salary: { $lt: 15000 } },{}).pretty()