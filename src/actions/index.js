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


export const deletePromotionAction = (promoId) => {
    return async (dispatch) => {
        //Call api to delete promotion
        
        const {data} = await OfferAPI.delete('promotions/'+promoId);
        //const data ={};
        console.log("called api to delete promotion ...")
        console.log(data);
        dispatch(
            {
                type: "promotion/delete",
                placeholder: data       
            }
        );
    } 
}

export const approvePromotionAction = (promoId) => {
    return async (dispatch) => {
        //Call api to approve promotion
        
        const {data} = await OfferAPI.put('promotions/'+promoId);
        //const data = {};

        console.log("called api to approve promotion ...")
        console.log(data);
        dispatch(
            {
                type: "promotion/approve",
                placeholder: data       
            }
        );
    } 
}

export const loadMenuAction = () => {
    return async (dispatch) => {
        //Call api to approve promotion
        
        const {data} = await OfferAPI.get('/menu');
        //const data = {};

        console.log("called api to retrieve menu ...")
        console.log(data);
        dispatch(
            {
                type: "menu/load",
                placeholder: data       
            }
        );
    } 
}


export const menuToggledAction = (menuKey) => (
    {
        type: "menu/toggled",
        placeholder: {menuKey: menuKey}
    }
);

export const notificationAddAction = (category,content) => (
    {
        type: "notification/added",
        placeholder: {type:category,content:content}
    }
);

export const notificationDisplayedAction = () => (
    {
        type: "notification/displayed",
        placeholder: {}
    }
);



