function gymmembership(cost, friend1, friend2, friend3) {

    let discount = 0;
    let discount = (cost*friend1)/100;
    let discount = (cost*friend2)/100;
    let discount = (cost*friend3)/100;
    
    return discount.toFixed(2);

}

export { gymmembership }

