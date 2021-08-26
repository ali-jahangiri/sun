function styleModifier(baseOn , modifier) {
    if(baseOn) return modifier;
    else return undefined;
}


// function createAppStyleModel({ color : { base : {} , business : {} } , size: {fontSize , triggerFontSize , borderRadius} , variant : { fadeOpacity , fadeTriggerOnActivePressState } }) {
//     return {

//     }
// }

export {
    styleModifier,
    // createAppStyleModel
}