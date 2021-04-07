const INITIAL_STATE = {
    users: [
        {
            name: "Maroof Chmadia",
            email: "maroofchamdia@gmail.com"
        },
        {
            name: "Bilal Anees",
            email: "bilalanees@gmail.com"
        }
    ]
}

export default (state = INITIAL_STATE, action) =>   {
    switch (action.type) {
        case "SET_DATA":
            return ({
                ...state,
                users : [...state.users , action.user]
            })
    }
    return state;
}