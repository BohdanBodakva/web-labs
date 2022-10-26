const defaultCartState = {
    gemsInCart: []
}

export const gemCartReducer = (state = defaultCartState, action) => {
    switch (action.type) {
        case "ADD_GEM":
            const array = [...state.gemsInCart];

            let flag = false;

            for (let i = 0; i < array.length; i++) {
                if (array[i].uniqueName === action.gem.uniqueName) {
                    alert(action.gem.uniqueName + " is already in your cart");
                    flag = true;
                    break;
                }
            }

            if (flag === false) {
                array.push(action.gem);
                alert("Gem was added to cart");
            }

            return { ...state, gemsInCart: array }

        case "REMOVE_GEM":
            const arr = [...state.gemsInCart].filter(gem => gem.id !== action.gem.id);
            return { ...state, gemsInCart: arr };

        case "REMOVE_ALL":
            return { ...state, gemsInCart: [] }

        default:
            return state
    }
}

