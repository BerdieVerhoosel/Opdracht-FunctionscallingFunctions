//Assignment Hey Kiddo

const adultChild = function (age) {
    console.log("Determine if adult or not");
    if (age >= 18) {
        return true;
    }
    return false;
};

const greeting = function (age) {
    console.log("Giving the greeting")
    const determineGreeting = adultChild(age);
    if (determineGreeting == false) {
        return console.log("Hey Kiddo");
    }
    return console.log("Hello There");
};

greeting(12);

/////////////////////////////////////////////

//Assigment VAT exercise 1

const calculateVAT = function (baseprice, VAT) {
    console.log("Calculating the amount of VAT");
    const amountVAT = (baseprice * VAT);
    return amountVAT;
};

const priceIncludedVAT = function (baseprice, VAT) {
    const calculateTotalprice = baseprice + calculateVAT(baseprice, VAT);
    console.log(calculateTotalprice);
};

priceIncludedVAT(50, 0.20);

/////////////////////////////////////////////////

//Assignment VAT exercise 2

const calculateBaseprice = function (totalPrice, VATpercentage) {
    const makeBigger = (VATpercentage + 1);
    const calBasePrice = (totalPrice / makeBigger);
    return calBasePrice;
};

const calculateBasepriceandVAT = function (totalPrice, VATpercentage) {
    const basePrice = calculateBaseprice(totalPrice, VATpercentage);
    const VAT = totalPrice - basePrice;
    console.log(VAT, basePrice);
};

calculateBasepriceandVAT(60, 0.20);

//////////////////////////////////////////////////

