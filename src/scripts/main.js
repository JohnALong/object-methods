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
    //     amountBilled: 129.99,
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

const salesByWeek = [
    {
        "vehicle": {
            "year": 2013,
            "model": "Tanex",
            "make": "Tamp-dax",
            "color": "quartz"
        },
        "sales_id": "782a23fd-8b83-4497-b9a1-41fd9b15648e",
        "sales_agent": {
            "mobile": "1-584-162-7444",
            "last_name": "Larkin",
            "first_name": "Tiara",
            "email": "ready@gmail.com"
        },
        "purchase_date": "2017-06-07",
        "gross_profit": 210,
        "credit": {
            "credit_provider": "United Services Automobile Assoc.",
            "account": "491697193540559"
        }
    },
    {
        "vehicle": {
            "year": 2012,
            "model": "Volttanphase",
            "make": "Tinlotis",
            "color": "french fuchsia"
        },
        "sales_id": "c6775819-5d17-40db-94f4-00425db590ee",
        "sales_agent": {
            "mobile": "1-573-820-3780",
            "last_name": "Schulist",
            "first_name": "Vada",
            "email": "davin@outlook.com"
        },
        "purchase_date": "2017-08-06",
        "gross_profit": 1886.61,
        "credit": {
            "credit_provider": "TD Group US Holding",
            "account": "494781657570"
        }
    },
    {
        "vehicle": {
            "year": 2013,
            "model": "Lexi-ton",
            "make": "Ware-com",
            "color": "metallic brown"
        },
        "sales_id": "d10631e7-24ca-414b-ac0f-34b286a30f14",
        "sales_agent": {
            "mobile": "1-356-831-5782",
            "last_name": "Leannon",
            "first_name": "Geovanni",
            "email": "need@hotmail.com"
        },
        "purchase_date": "2017-12-27",
        "gross_profit": 154.91,
        "credit": {
            "credit_provider": "State Street Corporation",
            "account": "546417363501851"
        }
    },
    {
        "vehicle": {
            "year": 2011,
            "model": "Onto-zun",
            "make": "Strongzoom",
            "color": "medium slate blue"
        },
        "sales_id": "586bf9d9-67c2-46c7-a6d1-de8484f6c474",
        "sales_agent": {
            "mobile": "774.020.0247",
            "last_name": "Lang",
            "first_name": "Jovani",
            "email": "spell55@yahoo.com"
        },
        "purchase_date": "2017-03-05",
        "gross_profit": 814.49,
        "credit": {
            "credit_provider": "M&T Bank Corporation",
            "account": "34730046974022"
        }
    },
    {
        "vehicle": {
            "year": 2014,
            "model": "Blue-run",
            "make": "Kon-flex",
            "color": "lumber"
        },
        "sales_id": "a5358cb3-6d47-4adb-a232-d5c5d91e25ec",
        "sales_agent": {
            "mobile": "886.374.3898",
            "last_name": "Feil",
            "first_name": "Kory",
            "email": "ducimus@outlook.com"
        },
        "purchase_date": "2017-02-08",
        "gross_profit": 587.52,
        "credit": {
            "credit_provider": "Atlantic Bank",
            "account": "601149379893233"
        }
    }
]

salesByWeek.forEach(sale => {
    outputElement.innerHTML += `<h1>${sale.sales_agent.first_name} ${sale.sales_agent.last_name}`
    for (const make of Object.entries(sale.vehicle)) {
        // console.log("test", make)
        outputElement.innerHTML += `
        <div>${make[0]}: ${make[1]}</div>
        `
    }
    const grossProfit = sale.gross_profit
    console.log("profit", grossProfit)
    outputElement.innerHTML += `<div>${grossProfit}</div>`
    // for (const value of Object.values(sale)) {
        // console.log("sale2", sale)
    })

// ***do not delete unless practice is completed
// console.log("sale in forEach", sale.sales_agent.last_name, sale.sales_agent.first_name)


// allCars.forEach(car => {
//     for (const value of Object.values(car)) {
//         outputElement.innerHTML += `<div>${value}</div>`
//     }
//     console.log("car", car)
// })






