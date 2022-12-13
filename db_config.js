const level = require('level');
let db_path = "./chaindata"

// create db
const db = new level.Level(db_path)


// add data to DB with k-v pair
const addDBDataKV = (key, value) => {
    db.put(key, value, err => {
        if (err) return console.error("Block " + key + " submission failed\n", err)
    })
}

// add data to DB using value
const addDBDataValue = value => {
    let i = 0
    db.createReadStream().on("data", data => {
        i++
    }).on("error", err => {
        return console.error("Unable to read data stream: " + err)
    }).on("close", () => {
        console.log("Block #" + i);
        addDBDataKV(i, value)
    })
}

// get data from DB
const getDBData = (key) => {
    db.get(key, (err, value) => {
        if(err) return console.error(key + " not found\n", err)
        console.log("Value:", value)
    })
}

// {(function theLoop(i) {
//     setTimeout(() => {
//         addDBDataKV(10-i, `Testing Data ${10-i}`)
//         if (--i) theLoop(i)
//     }, 100)
// })(10)}

{(function theLoop(i) {
    setTimeout(() => {
        getDBData(10-i)
        if (--i) theLoop(i)
    }, 100)
})(10)}