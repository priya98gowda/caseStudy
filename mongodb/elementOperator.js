// Element Operator

// 1. $exists -> {field:{$exists:<boolean>}}
// 2. $type -> {field:{$type:<dataType>}}

// Queries

// 1.write a query to display all the employee who have the field temporary
db.emp.find( { temp: { $exists: true } }, {} ).pretty()

// set one salary datatype as string
db.emp.update({_id:123},{$set:{salary:"eight thousand"}})
// 2.write a query to display salary of all the employees who have salary as number datatype
db.emp.find( { salary: { $type: "number" } }, { salary: 1 } ).pretty()

// limit method
// The limit() function in MongoDB is used to specify the maximum number of results to be returned. Only one parameter is required for this function.

// 3.write a query to display the name of first 3 employees
db.emp.find( {}, { name: 1 } ).limit( 3 )

// count method
// count() method is used to return the count of documents that would match a find() query. 

// 4.write a query to display the number of employees present in the company 
db.emp.find( {}, {} ).count()

db.emp.find( {}, {} ).limit( 1 ).count()
// the limit method will not have any impact on count method

// sort method
// The method accepts a document containing a list of fields along with their sorting order. To specify sorting order 1 and -1 are used. 1 is used for ascending order while -1 is used for descending order.

// 5.write a query to display the highest paid employee
db.emp.find( { salary: { $type: "number" } }, {} ).sort( { salary: -1 } ).limit( 1 ).pretty()
// if we don't want to  add salary for which is not present then we will  
db.emp.find({$and:[{salary:{$exists:true}},{salary:{$type:"number"}}]},{name:1,salary:1}).sort({salary:1}).pretty()
