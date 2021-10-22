// Update Method

// 1.$set -> {$set:{<field1>:<value1>,....}}
// 2.$unset -> {$unset:{<field1>:" ",....}}
// 3.$rename -> {$rename:{<field1>:<newname1>,<field2>:<newname2>,.....}}
// 4.$inc -> {$inc:{<field1>:<amount1>,<field27>:<amount2>,....}}
// 5.$mul -> {$mul:{<field1>:<number1>,....}}
// 6.$min -> {$min:{<field1>:<value1>,....}}
    // the $min updates the value of the field to a specified value if the specified value is less than the current value of the field.
// 7.$max -> {$max:{<field1>:<value1>,.....}}
    // the $max operator updates the value of the field to a specified value if the specified value is greater than the current vale of the field.

// Queries

// 1.write a query to change the salary as sal
db.emp.find( {}, { $rename: { salary: sal } } )
//  if we update rename like above it will update only first document.
// if we want to update multiple we need to pass third argument {multi:true}
db.emp.find( {}, { $rename: { salary: sal } }, { multi: true } )

// 2.write a query to increment the salary of all employees by 1000
db.emp.update({sal:{$exists:true}},{$inc:{sal:1000}},{multi:true})

// 3.write a query to provide a increment of 50% to all the employees as a new year bonus
db.emp.update( {}, { $mul: { sal: 1.5 } }, { multi: true } )

// 4.write a query to remove the field pincode 
db.emp.update({},{$unset:{"address.pincode":""}},{multi:true})

// 5.write a query to ensure all the employees will have a minimum salary of 20000
db.emp.update({},{$max:{sal:20000}},{multi:true})

// 6.write a query to ensure all the employees will have a maximum salary of 70000
db.emp.update( {}, { $min: { sal: 70000 } }, { multi: true } )

// 7.write a query to increment a salary by 500 of the employee whose _id is 99999
// if we dont't have that id upsert method will insert that and update the value
db.emp.update( { _id: 9999 }, { $inc: { sal: 500 } }, { upsert: true } )

// To use Set method
db.emp.update({_id:123},{$set:{salary:"eight thousand"}})
db.emp.update({_id:123},{$set:{sal:8000}})
