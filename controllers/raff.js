const v = Order.aggregate([
    { "$unwind": "$menus" },
    {
        "$lookup": {
            "from": "menus", // <-- collection to join
            "localField": "menus",
            "foreignField": "_id",
            "as": "media_joined"
        }
    },
    { "$unwind": "$media_joined" },
    {
        "$group": {
            "_id": "$media_joined.price",
            // "price": "$media_joined.price",

            // "total": { "$sum": "$media_joined.price" }
        },


        // "name": "$media_joined.price",
    }
], function(err, result) {
    let total = 0
    console.log(result[1]._id)
    for (let i = 0; i < result.length; i++) {
        total = total + result[i]._id
    }
    res.status(201).json({
        result,
        total
    })
})