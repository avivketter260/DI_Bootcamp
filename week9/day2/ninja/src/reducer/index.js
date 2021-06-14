



export const task = (state = [], action) => {
    switch (action.type) {
        case 'TASK':
            console.log(action.theTask)
        //    return state = state.push(action.theTask)
            let result = action.theTask.map(res => {
                console.log(res)
                return state = res
            })
            return result

        default: return state
    }
}

export const active = (state = false, action) => {
    switch (action.type) {
        case 'ACTIVE':
            return state = true

        case 'ALL':
            return state = false


        default: return state
    }
}