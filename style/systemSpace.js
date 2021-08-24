const containerSize = {
    fluid : 100 , 
    normal : 90 , 
    small : 80 , 
    box : 70
}

const padding = {
    1 : 5,
    2 : 10, 
    3 : 15, 
    4 : 20, 
    5 : 25,
    6 : 30,
    7 : 35,
    8 : 40, 
    9 : 45, 
    10 : 50
}

const margin = {
    ...padding
}


const systemSpace = {
    containerSize,
    padding,
    margin
}


export default systemSpace;