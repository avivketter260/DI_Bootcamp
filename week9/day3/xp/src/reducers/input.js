export const input = (state = '', action) => {
    switch (action.type) {
        case 'INPUT':
            return state= action.newInput
        default: return state
            
    }
}