

export const counter = (state = 0, action) => {
    switch (action.type) {
        case 'ONE_MORE':
            return state += 1
        case 'LESS_ONE':
            return state -= 1

        default: return state

    }
}

export const isHappy = (state = '', action) => {
    switch (action.type) {
        case 'YES':
            return state = ' :) '
        case 'NO':
            return state = ' :( '

        default: return state
    }
}

export default {
    counter,
    isHappy
}