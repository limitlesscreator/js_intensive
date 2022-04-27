myIterable[Symbol.iterator] = function () {
    let ifNumbers = [myIterable.from, myIterable.to].every(el => Object.prototype.toString.call(el) === '[object Number]' && !isNaN(el))

    if (!ifNumbers || myIterable.from > myIterable.to) {
        throw new Error('Ошибка!')
    }

    return {
        current: this.from,
        last: this.to,
        next() {
            if (this.current <= this.last) {
                return {done: false, value: this.current++}
            } else {
                return {done: true}
            }
        }
    };
};

