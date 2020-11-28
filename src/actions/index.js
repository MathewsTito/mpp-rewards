

export const menuSelectedAction = (mKey) => (
    {
        type: "menu/selected",
        placeholder: mKey
    }
)

export const promotionSelectedAction = (promoId) => (
    {
        type: "promotion/selected",
        placeholder: promoId
    }
)