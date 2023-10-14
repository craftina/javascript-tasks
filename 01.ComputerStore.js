function printReceipt(array) {
    const customer = array.pop(array.length - 1);
    const pricesArray = array.map(p => Number(p));
    let priceWithoutTax = 0;

    for (let i = 0; i < pricesArray.length; i++) {
        const price = pricesArray[i];
        price < 0 ? console.log('Invalid price!') : priceWithoutTax += price;
    }

    const taxes = priceWithoutTax * 20 / 100;
    let finalPrice = priceWithoutTax + taxes;

    if (customer == 'special') {
        finalPrice -= finalPrice * 10 / 100;
    }

    const result = `Congratulations you've just bought a new computer!\nPrice without taxes: ${priceWithoutTax.toFixed(2)}$\nTaxes: ${taxes.toFixed(2)}$\n-----------\nTotal price: ${finalPrice.toFixed(2)}$`

    console.log(finalPrice ? result : 'Invalid order!');
}

printReceipt([
    '1050',
    '200',
    '450',
    '2',
    '18.50',
    '16.86',
    'special'
])

// printReceipt([
//     '1023',
//     '15',
//     '-20',
//     '-5.50',
//     '450',
//     '20',
//     '17.66',
//     '19.30',
//     'regular'
// ]
// )

// printReceipt([
//     'regular'
// ]
// )