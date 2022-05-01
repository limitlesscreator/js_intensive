const createDebounceFunction = (callBack, ms, timeouts = []) => {
        return () => {
            for (let i = 0; i < timeouts.length; i++){
                clearTimeout(timeouts[i])
            }
            timeouts.push(setTimeout(() => {

                callBack()

            },ms))
        }
}