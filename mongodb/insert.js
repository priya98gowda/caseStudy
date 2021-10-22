//INSERING DATA

db.test.insert({selection},{projection})

// Insert have 2 methods
// 1.insertOne({}) -> to insert one object
// 2.insertMany([{},{}]) ->to add more than one object we use array of objects

db.emp.insertMany([
    {
        _id:123,
        name:"nishchala",
        email:"nishchala@gmail.com",
        deptno:10,
        salary:8000,
        address:{
            dno:777,
            street:"kathriguppe",
            city:"bengaluru",
            pincode:560078
        },
        phone:[1111111111,2222222222]
    },
    {
        _id:124,
        name:"abhishek",
        email:"abhishek@gmail.com",
        deptno:20,
        salary:10000,
        address:{
            dno:888,
            street:"btm",
            city:"bengaluru",
            pincode:560076
        },
        phone:[3333333333]
    },
    {
        _id:125,
        name:"jyothsna",
        email:"jyothsna@gmail.com",
        deptno:10,
        salary:30000,
        address:{
            dno:555,
            street:"MG road",
            city:"chennai",
            pincode:5562652
        },
        phone:[9999999999,4444444444]
    },
    {
        _id:126,
        name:"priya",
        email:"priya@gmail.com",
        deptno:30,
        salary:15000,
        address:{
            dno:345,
            street:"Ameerpeth",
            city:"hyderabad",
            pincode:565676
        },
        phone:[4545454545]
    },
    {
        _id:127,
        name:"subodh",
        email:"subodh@gmail.com",
        deptno:30,
        salary:50000,
        address:{
            dno:234,
            street:"art street",
            city:"chennai",
            pincode:575476
        },
        phone:[3434343434]
    },
    {
        _id:128,
        name:"manjunath",
        email:"manjunath@gmail.com",
        deptno:20,
        salary:34000,
        address:{
            dno:987,
            street:"food street",
            city:"bengaluru",
            pincode:560176
        },
        phone:[7878787878,9898989898]
    },
] )

//Insert method take two parameter 
// 1.selection -> we select the document based on condition
// 2. Projection -> what we want to display from the document

