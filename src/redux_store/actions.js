export function addGemToCartAction(gemToAdd) {
    return {
        type: "ADD_GEM",
        gem: gemToAdd
    }
}

export function removeGemFromCartAction(gemToRemove) {
    return {
        type: "REMOVE_GEM",
        gem: gemToRemove
    }
}