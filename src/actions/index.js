import OfferAPI from '../apis/OfferAPI';

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


export const loadPromotionsAction = (orgId) => {
    return async (dispatch) => {
        //Call api to retrieve promotion list
        
        const {data} = await OfferAPI.get('promotions?orgId='+orgId);
        console.log("called api to retrieve promotions...")
        dispatch(
            {
                type: "promotion/load-list",
                placeholder: data       
            }
        );
    }
} 
