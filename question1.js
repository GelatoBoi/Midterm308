function convertcoinsintodollars(nickels, dimes, quarters, loonies, toonies) {

    let dollars = 0;
    dollars += nickels*0.05;
    dollars += dimes*0.1;
    dollars += quarters*0.25;
    dollars += loonies*1.0;
    dollars += toonies*2.0;

    return dollars.toFixed(2);

}

export { convertcoinsintodollars }

