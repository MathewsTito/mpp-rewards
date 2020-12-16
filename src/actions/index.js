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


export const loadPromotionsAction = (orgId="ERWD") => {
    return async (dispatch) => {
        //Call api to retrieve promotion list
        
        const {data,status} = await OfferAPI.get('promotions?orgId='+orgId)
                        .catch((error) =>{
                            console.log("error calling api to retrieve promotion list ...");
                            console.log(error.response.status);
                            console.log(error.response.data);
                            console.log(error.response.headers);
                            return {data:[],status:error.response.status}
                        });
        console.log(data);
        
        dispatch(
            {
                type: "promotion/load-list",
                placeholder: {status:status,data:data}      
            }
        );
    }
} 



export const loadPromotionDetailsAction = (promotId) => {
    return async (dispatch) => {
        //Call api to retrieve promotion list
        
        const {data,status} = await OfferAPI.get('promotions/'+promotId)
                        .catch((error) =>{
                            console.log("error calling api to retrieve promotion details ...");
                            console.log(error.response.status);
                            console.log(error.response.data);
                            console.log(error.response.headers);
                            return {data:null,status:error.response.status}
                        });
        console.log("called api to retrieve promotion details...")
        console.log(data);
        dispatch(
            {
                type: "promotion/load-detail",
                placeholder: {status:status,data:data}       
            }
        );
    }  
}


export const deletePromotionAction = (promoId) => {
    return async (dispatch) => {
        //Call api to delete promotion
        console.log("deletePromotionAction::calling api to delete promotion ...")
        const {data,status} = await OfferAPI.delete('promotions/'+promoId)
                                .catch((error) =>{
                                    console.log("error calling api to delete promotion ...");
                                    console.log(error.response.status);
                                    console.log(error.response.data);
                                    console.log(error.response.headers);
                                    return {data:null,status:error.response.status}
                                });
        console.log("deletePromotionAction::returned.")
        console.log(data)
        dispatch(
            {
                type: "promotion/delete",
                placeholder: {status:status,data:data}       
            }
        );

        const timestamp = new Date().toLocaleString();
        if (status === 200){
            dispatch ({
                type: "notification/added",
                placeholder: {category:"NORMAL",timestamp:timestamp,content:"Successfully deleted promotion with id="+promoId}
            })
        } else {
            dispatch ({
                type: "notification/added",
                placeholder: {category:"ERROR",timestamp:timestamp,content:"Error deleting promotion with id="+promoId+". Please check console"}
            })            
        }
    } 
}

export const approvePromotionAction = (promoId) => {
    return async (dispatch) => {
        //Call api to approve promotion
        console.log("approvePromotionAction::calling api to approve promotion ...")
        const {data,status} = await OfferAPI.put('promotions/'+promoId)
                                .catch((error) =>{
                                    console.log("error calling api to approve promotion ...");
                                    console.log(error.response.status);
                                    console.log(error.response.data);
                                    console.log(error.response.headers);
                                    return {data:null,status:error.response.status}
                                });

        console.log("approvePromotionAction::returned.")
        console.log(data);
        dispatch(
            {
                type: "promotion/approve",
                placeholder: {status:status,data:data}       
            }
        );

        const timestamp = new Date().toLocaleString();
        if (status === 200){
            dispatch ({
                type: "notification/added",
                placeholder: {category:"NORMAL",timestamp:timestamp,content:"Successfully approved promotion with id="+promoId}
            })
        } else {
            dispatch ({
                type: "notification/added",
                placeholder: {category:"ERROR",timestamp:timestamp,content:"Error approving promotion with id="+promoId+". Please check console"}
            })            
        }
    } 
}

export const loadMenuAction = () => {
    return async (dispatch) => {
        //Call api to approve promotion
        console.log("loadMenuAction::calling api to retrieve menu ...")
        const {data} = await OfferAPI.get('/menu');
        console.log("loadMenuAction::returned.")
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

export const notificationAddAction = (category,timestamp,content) => (
    {
        type: "notification/added",
        placeholder: {category:category,timestamp:timestamp,content:content}
    }
);

export const notificationDisplayedAction = () => (
    {
        type: "notification/displayed",
        placeholder: {}
    }
);



