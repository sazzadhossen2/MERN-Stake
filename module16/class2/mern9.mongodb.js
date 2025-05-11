

// Match
// {
//   $match: {
//     status:"delivered"
//   }
// }


//sort
// {
//   $sort: {
//     price:1
//   }
//  }


// limit
// $limit: 2

//more than 1000
// {
//   $match: {
//   price:{
//     $gt :1000
//   }
//   }
//  }


//ektu search korle full name ase
// {
//   $match: {
//     name:{
//       $regex: "^Char"
//     }
//   }
// }


//order date
// {
//   $sort: {
//     orderDate:1
//   }
//  }


//group
// {
//   $sort: {
//     orderDate:1
//   }
//  },
//  {
//    $group: {
//      _id: "$customerId",
     
//    }
//  }


//first and last order date
// {
//   $sort: {
//     orderDate:1
//   }
//  },
//  {
//    $group: {
//      _id: "$customerId",
//      firstOrder:{$first:"$orderDate"},
//      lastOrder:{$last:"$orderDate"}
     
//    }
//  }


//projection
//   {
//  $project: {
//    _id:0,
//    price:1,
//    productId:1 
//  }
//   }


// count sum
// [
//   {
//  $group: {
//    _id: "$customerId",
//   orderCount:{
//     $sum:1
//   }
//  }
//   }
// ]


//max and min qty
// [
//   {
//  $group: {
//    _id: "null",
//   maxQty:{
//    $max:"$quantity"
//   },
//   minQty:{
//      $min:"$quantity"
//    }
//  }
//   }
// ]


//Join
// [
//   {
//  $lookup: {
//    from: "products",
//    localField: "productId",
//    foreignField: "_id",
//    as: "productInfo"
//  }
//   }
// ]


//project join
// [
//   {
//     $lookup: {
//       from: "products",
//       localField: "productId",
//       foreignField: "_id",
//       as: "productInfo"
//     }
//   },
//   {
//     $project: {
//       orderId: 1,
//       customerId: 1,
//       customerName: {
//         $arrayElemAt: ["$productInfo.name", 0]
//       }
//     }
//   }
// ]


//multiple query
// [
//   {
// $facet: {
//   deliverd: [{ $match:{ status: "delivered" }}],
//   expansive:[{
//     $match: {price:{$gt:1000}}
//   }]
// }
//   }
// ]
