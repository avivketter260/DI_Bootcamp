let initState = {
    movie: [],
    detailes: ''
}
export const reducer = (state = initState, action = {}) => {
    switch (action.type) {
        case 'INIT_MOVIE':
            return { ...state, movie: action.payload }
        case 'MOVIE_SELECTED':
            return { ...state, detailes: action.payload }
        default: return { ...state }
    }
}