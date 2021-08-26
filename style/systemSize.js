const fontSize = {
    1 : 35,
    2 : 30,
    3 : 25,
    4 : 20,
    5 : 15,
    6 : 10
}


const triggerFontSize = {
    small : fontSize[6],
    default : fontSize[5],
    large : fontSize[3]
}


const borderRadius = {
    0 : 0,
    1 : 3,
    2 : 6,
    3 : 9,
    4 : 12,
    5 : 15,
    6 : 18,
    7 : 21
}

const systemSize = {
    fontSize ,
    triggerFontSize,
    borderRadius ,
}


export default systemSize;