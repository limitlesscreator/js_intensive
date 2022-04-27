const selectFromInterval = (arr = [],start = 0 ,end = 0) => {
    let result = []
    let ifNumbers = [...arr,start,end].every(el => Object.prototype.toString.call(el) === '[object Number]' && !isNaN(el))

    if (!ifNumbers){
        throw new Error('Ошибка!')
    }

    let newNums = start > end ? [end, start] : [start, end]
    arr.forEach(num => num >= newNums[0] && num <= newNums[1] &&   result.push(num))
    return result
}

