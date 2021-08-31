const systemVariant = {
    fadeOpacity : 0.5,
    fadeTriggerOnActivePressState : 0.7,
    fadeTriggerOnActivePressStateStrong : .5,
    fadeTriggerOnActivePressStateLight : .9,
    get fadeTriggerClone() {
        return {
            light : this.fadeTriggerOnActivePressStateLight,
            normal : this.fadeTriggerOnActivePressState,
            strong : this.fadeTriggerOnActivePressStateStrong
        }
    },
    iconPack : "Feather",
    appDirection : "rtl"
}


export default systemVariant;