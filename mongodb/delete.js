// To remove the data
db.emp.remove({_id:9999})

// To remove collections
db.collectionName.drop()
db.test.drop()

// To remove database
// 1.use sample
db.dropDatabase()
