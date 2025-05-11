
use("player")

// db.help()
// db.football.find({})


// Insert One Data
// const player={
//   name:"sazzad hossen",
//   age:23,
//   country:"bangladesh"
// }
// db.football.insertOne(player)


// Insert Many data
// const player=[
// {
//   name:"marina",
//   age:23,
//   country:"USA"
// },
// {
//   name:"marin",
//   age:20,
//   country:"UK"
// }
// ]
//  db.football.insertMany(player)


//Find all Data
// db.football.find()


//  Find Specific data With Condition
// db.football.find({country:"USA"})


// Projection 
// Give me all movies with title ,year and poster
// db.football.find({},{name:1,age:1,_id:0})



// $eq
// Matches values that are equal to a specified value.
// db.football.find({age:{$eq:22}},{name:1,_id:0})


// $gt
// Matches values that are greater than a specified value.
// db.football.find({age:{$gt:22}},{name:1,_id:0})


// $gte
// Matches values that are greater than or equal to a specified value.
// db.football.find({age:{$gte:22}},{name:1,_id:0})



// $in
// Matches any of the values specified in an array.
// db.football.find({age:{$in:[22,30]}},{name:1,_id:0})


// $lt
// Matches values that are less than a specified value.



// $lte
// Matches values that are less than or equal to a specified value.



// $ne
// Matches all values that are not equal to a specified value.



// $nin
// Matches none of the values specified in an array.
// db.football.find({age:{$nin:[22,30]}},{name:1,_id:0})




// $and
// Joins query clauses with a logical AND returns all documents that match the conditions of both clauses.
// db.football.find({$and:[
//   {age:{$eq:23}},
//   {name:{$eq:"sazzad hossen"}}
// ]})


// $not
// Inverts the effect of a query predicate and returns documents that do not match the query predicate.



// $nor
// Joins query clauses with a logical NOR returns all documents that fail to match both clauses.



// $or
// Joins query clauses with a logical OR returns all documents that match the conditions of either clause.

// db.football.find({$or:[
//     {age:{$eq:22}},
//     {name:{$eq:"sazzad hossen"}}
//   ]})




// Element Query Operator
// $exists
// Matches documents that have the specified field.
// db.football.find({age:{$exists:true}})


// $type
// Selects documents if a field is of the specified type.


// Evaluation operator
// $regex
// db.football.find({name:{$regex:/s/}},{name:1,_id:0})


// sort
// db.football.find({name:{$regex:/s/i}},{name:1,age:1,_id:0}).sort({age:-1})

// Limit
// db.football.find({name:{$regex:/s/i}},{name:1,age:1,_id:0}).sort({age:-1}).limit(2)


// DISTINCT
// db.football.distinct("age")

// count
// db.football.countDocuments({age:22})

//Delete
// db.football.deleteOne({age:23})


//Delete Many
// db.football.deleteMany({age:22})





