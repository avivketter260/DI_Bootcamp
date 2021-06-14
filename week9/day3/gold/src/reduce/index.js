// let initState = {
//     obj: [],

// }
export const handelFormObj = (state = null, action) => {
    switch (action.type) {
        case 'SEND_INPUT':
            return state = action.obj


        default: return state
    }
}

export const sendToEdit = (state = null, action) => {
    switch (action.type) {
        case 'EDIT':
            return state = action.editObj
case 'RESET':
    return state = null
        default: return state

    }
}