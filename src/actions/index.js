import OfferAPI from '../apis/OfferAPI';

export const menuSelectedAction = (mKey) => (
    {
        type: "menu/selected",
        placeholder: mKey
    }
)

export const viewPromotionAction = (promoId) => (
    {
        type: "promotion/view",
        placeholder: {promoId:promoId,action:"view"}
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

export const loadPromotionDetailsAction = (promotId) => {
    return async (dispatch) => {
        //Call api to retrieve promotion list
        
        const {data} = await OfferAPI.get('promotions/'+promotId);
        console.log("called api to retrieve promotion details...")
        console.log(data);
        dispatch(
            {
                type: "promotion/load-detail",
                placeholder: data       
            }
        );
    }  
}
