const makeObjectDeepCopy = obj => {
    if(typeof(obj) !== "object") {
        return obj
    }

    let data = (obj instanceof Array) ? [] : {}

    for(let i in obj) {
        if(obj.hasOwnProperty(i)) {
            data[i] = makeObjectDeepCopy(obj[i])
        }
    }
    return data
}