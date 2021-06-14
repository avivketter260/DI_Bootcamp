export const counter = (state = 0, action) => {
    switch (action.type) {
        case 'PLUSE_ONE':
            return state += 1
        case 'MINUSE_ONE':
            return state -= 1


        default: return state

    }


}

export const happy = (state = '', actoin) => {
    switch (actoin.type) {
        case 'YES':
            return state = ' :) '
        case 'NO':
            return state = ' :( '

        default: return state

    }
}

export const myName = (state = '', actoin) => {
    switch (actoin.type) {
        case 'SET_NAME':
            return state = actoin.payload
        default: return state

    }
}