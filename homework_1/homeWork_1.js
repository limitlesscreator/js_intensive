// ░█████╗░░██████╗████████╗░█████╗░███╗░░██╗██████╗░███████╗██╗░░░██╗░██████╗░░░░█████╗░░█████╗░███╗░░░███╗
// ██╔══██╗██╔════╝╚══██╔══╝██╔══██╗████╗░██║██╔══██╗██╔════╝██║░░░██║██╔════╝░░░██╔══██╗██╔══██╗████╗░████║
// ███████║╚█████╗░░░░██║░░░██║░░██║██╔██╗██║██║░░██║█████╗░░╚██╗░██╔╝╚█████╗░░░░██║░░╚═╝██║░░██║██╔████╔██║
// ██╔══██║░╚═══██╗░░░██║░░░██║░░██║██║╚████║██║░░██║██╔══╝░░░╚████╔╝░░╚═══██╗░░░██║░░██╗██║░░██║██║╚██╔╝██║
// ██║░░██║██████╔╝░░░██║░░░╚█████╔╝██║░╚███║██████╔╝███████╗░░╚██╔╝░░██████╔╝██╗╚█████╔╝╚█████╔╝██║░╚═╝░██║
// ╚═╝░░╚═╝╚═════╝░░░░╚═╝░░░░╚════╝░╚═╝░░╚══╝╚═════╝░╚══════╝░░░╚═╝░░░╚═════╝░╚═╝░╚════╝░░╚════╝░╚═╝░░░░░╚═╝ :D

//first task
function convert() {
    let firstNum = prompt()
    let secondNum = prompt()

    if (firstNum && secondNum && !isNaN(firstNum) && !isNaN(secondNum)) {
        let translate = Number(firstNum).toString(Number(secondNum))
        console.log(translate)
        return
    }

    console.log('Некорректный ввод!')
}


//second task
function calculation() {
    let firstNum = prompt()
    let secondNum = prompt()

    if (firstNum && secondNum && !isNaN(firstNum) && !isNaN(secondNum)) {
        let result = `${Number(firstNum) + Number(secondNum)}, ${firstNum / secondNum}`
        console.log(result)
        return
    }

    console.log('Некорректный ввод!')
}

// applying functions to buttons
document.querySelector('#fnc1').addEventListener('click', () => {
    convert()
})
document.querySelector('#fnc2').addEventListener('click', () => {
    calculation()
})

