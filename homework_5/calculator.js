class Calculator {
    constructor(firstNum, secondNum) {
        if (!([firstNum, secondNum].every(el => Object.prototype.toString.call(el) === '[object Number]' && !isNaN(el)))) {
            throw new Error('there is not all numbers')
        }
        this.firstNum = firstNum
        this.secondNum = secondNum
    }

    set setX(num) {
        this.isNum()
        this.firstNum = num
    }

    set setY(num) {
        this.isNum()
        this.secondNum = num
    }

    isNum() {
        let ifNumbers = [this.firstNum, this.secondNum].every(el => Object.prototype.toString.call(el) === '[object Number]' && !isNaN(el))

        if (!ifNumbers) {
            throw new Error('Ошибка!')
        }
    }

    logSum() {
        console.log(this.firstNum + this.secondNum)
    }

    logMul() {
        console.log(this.firstNum * this.secondNum)
    }

    logSub() {
        console.log(this.firstNum - this.secondNum)
    }

    logDiv() {
        if (this.secondNum === 0) throw new Error(`second number can't be 0, please try another`)
        console.log(this.firstNum / this.secondNum)
    }
}

