function convertFtoC(fahrenheit) {

    let celsius = (fahrenheit-32)*5/9;

    return celsius.toFixed(2);

}

export { convertFtoC }