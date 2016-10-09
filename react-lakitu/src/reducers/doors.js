const door = (state, action) => {
    switch (action.type) {
        case 'ADD_DOOR':
            return {
                id: action.id,
                text: action.text,
                completed: false
            }

        default:
            return state
    }
}

const doors = (state = [], action) => {
    switch (action.type) {
        case 'ADD_DOOR':
            return [
                ...state,
                door(undefined, action)
            ]

        default:
            return state
    }
}

export default doors