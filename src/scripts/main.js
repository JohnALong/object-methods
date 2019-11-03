// // ***lightning exercise 1***
// const dateVisited = "visitDate"
// const owed = "amountBilled"
// const patient = "patientName"
// // Use square bracket notation to output the value of those three properties to the console in Chrome.
// const drBill = {
    //     officeName: "St Francis",
    //     streetAddress: "351 Mount Auburn Rd",
    //     doctorName: "Mark Conden",
    //     patientName: "John Long",
    //     visitDate: "10-01-2019",
    //     amountBilled: "129.99",
    //     dueDate: "11-01-2019"
    // }
    // console.log(`visitDate: ${drBill[dateVisited]}, amount billed: ${drBill[owed]}, and patient was ${drBill[patient]}`)
    // const billValues = Object.values(drBill);
    // console.log("bill values", billValues);
    // const outputElement = document.getElementById("app")
    // outputElement.innerHTML += `<span>${drBill[dateVisited]}</span>
    //                             <span>${drBill[owed]}</span>
    //                             <span>${drBill[patient]}`
    // // ***lightning exercise 2****
    // const myDinner = {
    //     name: "corned beef",
    //     ethnicity: "irish",
    //     vegetarian: false,
    //     "sandwich eligible": true,
    //     sides: ["potatoes", "cabbage", "carrots"]
    // }
    
    // for (const entry of Object.entries(myDinner)) {
    //     outputElement.innerHTML += `<article>${entry[0]}: ${entry[1]}`
    // }
    
    console.log("linked")
const allCars = [
    {
        model: "Mustang",
        color: "Midnight Blue",
        year: 1976,
        length: 120,
        width: 62,
        height: 47
    },
    {
        model: "Xterra",
        color: "Forest Green",
        year: 2011,
        length: 144,
        width: 71,
        height: 55
    },
    {
        model: "Thunderbird",
        color: "Red",
        year: 2005,
        length: 115,
        width: 58,
        height: 42
    },
    {
        model: "Suburban",
        color: "Grey",
        year: 2015,
        length: 149,
        width: 73,
        height: 58
    }
]
// ***first example code from chapter***
const outputElement = document.getElementById("app")
// allCars.forEach(car => {
//     for (const value of Object.values(car)) {
//         outputElement.innerHTML += `<div>${value}</div>`
//     }
//     console.log("car", car)
// })
// ******second example code from chapter*****
// outputElement.innerHTML += "<h1>Car List</h1>"

// allCars.forEach(car => {
//     outputElement.innerHTML += "<hr/>"

//     for (const entry of Object.entries(car)) {
//         outputElement.innerHTML += `<div>${entry[0]}: ${entry[1]}</div>`
//     }
// })








