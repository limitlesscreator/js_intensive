Array.prototype.myFilter = function (filterFunction, obj= {}) {

    const filterArr = []

    for (let i = 0; i < this.length; i++) {
        const result = filterFunction(this[i], i, this)
        if (result) filterArr.push(this[i])
    }

    return filterArr
}