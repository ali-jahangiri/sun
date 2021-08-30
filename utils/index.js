function idGenerator () {
    return Math.random().toString(36).substr(2, 9);
  };

function styleModifier(baseOn , modifier) {
    if(baseOn) return modifier;
    else return undefined;
}

function deepClone (object) {
    return JSON.parse(JSON.stringify(object))
}

// function createAppStyleModel({ color : { base : {} , business : {} } , size: {fontSize , triggerFontSize , borderRadius} , variant : { fadeOpacity , fadeTriggerOnActivePressState } }) {
//     return {

//     }
// }

export {
    styleModifier,
    deepClone
    // createAppStyleModel
}