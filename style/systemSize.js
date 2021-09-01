const fontSize = {
    1 : 35,
    2 : 30,
    3 : 25,
    4 : 20,
    5 : 15,
    6 : 10
}

const borderWidth = {
    none : 0,
    light : 1,
    default : 2,
    bold : 3
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
    7 : 21,
    8 : 24,
    9 : 27,
    10 : 30,
}


const absolute = {
    0 : 0,
    25 : 25,
    50 : 50, 
    75 : 75,
    100 : 100
}


const componentSize = {
    checkbox : {
        small : 30,
        default : 40,
        large : 50
    },
}

const systemSize = {
    fontSize ,
    triggerFontSize,
    borderRadius ,
    absolute,
    componentSize,
    borderWidth
}


export default systemSize;