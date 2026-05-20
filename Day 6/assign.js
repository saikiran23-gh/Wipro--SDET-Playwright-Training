/*const rawFlights = [

  "London-Paris:150",

  "New York-Tokyo:invalid",

  "Dubai-Mumbai:450",

  "Berlin-Rome:95"

];
const clearFlight=rawFlights.map(f=>{
    const[route,price]=f.split(":");
    const[from,to]=route.split("-");

    let prices=Number(price);
    if(isNaN(prices)){
        prices=0;
    }
    return {
        from,
        to,
        prices
    };


});
clearFlight.filter(f=>f.prices>=100 && f.prices<=500);
clearFlight.sort((a,b)=>a.prices-b.prices);
console.log(clearFlight);

*/


//2
/*
const cart = [

  { name: "Smartphone", price: 800, category: "Electronics" },

  { name: "Toaster", price: 50, category: "Home" },

  { name: "Headphones", price: 250, category: "Electronics" },

  { name: "Monitor", price: 150, category: "Electronics" }

];
function isEligible(product){
    if(product.category==="Electronics" && product.price>200){
        return true;
    }
}

function applyPromo(cart,callback) {
    let discountcount=0;
    let totalsavings=0;
    let updatedcart=cart.map(d=>{
        if(callback(d)){
           const discount=d.price*0.10;
           totalsavings+=discount;
           discountcount=discountcount++

            return{
                name:d.name,
                price:d.price-discount,
                isDiscount:true,
                discountcount,
                totalsavings:totalsavings
            };
        }
        return {
            name:cart.name,
            isDiscounted:false
        };

})
console.log( `Promotion applied! ${discountcount} items were discounted for a total saving of ${totalsavings}`);
setTimeout(()=>{console.log(updatedcart)},1000);
}
applyPromo(cart,isEligible);
*/
/*
//3
const rawMovies = [

  "Inception|Sci-Fi|12000",

  "The Lion King|Animation|8000",

  "Mad Max|Action|invalid",

  "The Matrix|Sci-Fi|15000",

  "Gladiator|Action|4500"

];

const cleanedMovies = rawMovies

  .map(movie => {
    let [name, genre, views] = movie.split("|");
    views = Number(views);
    if (isNaN(views)) {
      views = 0;
    }
    return {
      name,
      genre,
      views
    };

  })
  .filter(movie =>
    (movie.genre === "Action" ||
     movie.genre === "Sci-Fi") &&
     movie.views > 5000

  )

  // Sort descending
  .sort((a, b) => b.views - a.views);

// Convert to JSON string
const result = JSON.stringify(cleanedMovies);

console.log(result);
*/
//4

const employees = [

  { id: 101, name: "Alice", salary: 6000 },

  { id: 102, name: "Bob", salary: 3500 },
  
  { id: 103, name: "Charlie", salary: 5200 }
];

function taxLogic(employee) {
    if (employee.salary > 5000) {
        return 0.20;
    }
    return 0.10;
}
function calculatePayroll(employees, taxCallback) {
    let totalNetPayout = 0;
    const processedEmployees = employees.map(employee => {
        const taxRate = taxCallback(employee);
        const tax = employee.salary * taxRate;
        const netSalary = employee.salary - tax;
        totalNetPayout += netSalary;
        const status =
            netSalary > 4000 ? "Premium" : "Standard";
        return {
            ...employee,
            tax,
            netSalary,
            status
        };
    });
    console.log(
        `Payroll Processed: Total Net Payout is $${totalNetPayout} for ${employees.length} employees.`
    );
    setTimeout(() => {
        console.log(processedEmployees);
    }, 2000);
}
calculatePayroll(employees, taxLogic);