import {combineReducers} from 'redux';

import OfferAPI from '../apis/OfferAPI';


const menuSelection = (currSelection=-1,action) => {
    switch (action.type){
        case 'menu/selected': {
            const newSelection = action.placeholder;
            return newSelection;
        }

        default:
            return currSelection;
    }
}

const promotionSelection = (currSelection={promoId:-1,action:null},action) => {
    switch (action.type) {
        case 'promotion/view': {
            const newSelection = action.placeholder;
            return newSelection;
        }

        case 'menu/selected': {
            return {promoId:-1,action:null};
        }

        default:
            return currSelection;
    }
}

const promotionListLoad =(currentList=null,action) => {
    
    switch (action.type){
        case 'promotion/load-list': {
            console.log("setting state with new promotions list")
            return action.placeholder.data;        
        }

        case 'promotion/delete':
        case 'promotion/approve':
        case 'promotion/load-detail':
            return null;

        default:
            return currentList;
    }
}

const promotionDetailLoad =(currentDetail={},action) => {
    
    switch (action.type){
        case 'promotion/load-detail': {
            return action.placeholder.data;        
        }

        default:
            return currentDetail;
    }
}

const menuItemsLoad = (currentItems=null,action) => {
    switch (action.type){
        case 'menu/load': {
            console.log("loading menu items")
            return action.placeholder;        
        }

        case 'menu/toggled': {
            const selectedMenuKey = action.placeholder.menuKey;
            const newItems = currentItems.map(item => {
                if (item.key == selectedMenuKey){
                    const newItem = {...item};
                    newItem.expanded = !newItem.expanded;
                    return newItem;
                } else {
                    const newItem = {...item};
                    newItem.expanded = false; //we will close any item that is expanded
                    return newItem;
                }
            }

            );

            return newItems;
        }

        default:
            return currentItems;
    }
}

const notification = (currentState={content:null,displayed:true},action) => {
    switch (action.type){
        case "notification/displayed":
            return {...currentState,displayed:true,content:null};

        case "promotion/delete":
            if (action.placeholder.status == 200)
                return ({type:"NORMAL",content:"Successfully deleted promotion",displayed:false});
            else
                return ({type:"ERROR",content:"Error while deleting promotion. Please check logs",displayed:false});

        case "promotion/approve":
            if (action.placeholder.status == 200)
                return ({type:"NORMAL",content:"Successfully approved promotion",displayed:false});
            else
                return ({type:"ERROR",content:"Error while approving promotion. Please check logs",displayed:false});

        case "promotion/load-list":
            if (action.placeholder.status == 200)
                return currentState;
            else
                return ({type:"ERROR",content:"Error while retrieving promotion. Please check logs",displayed:false});

        case "promotion/load-detail":
            if (action.placeholder.status == 200)
                return ({type:"NORMAL",content:"Successfully retrieved promotion details",displayed:false});
            else
                return ({type:"ERROR",content:"Error while retrieving promotion details. Please check logs",displayed:false});

        case "notification/cleared":
            return {content:null,displayed:false};
            
        default:
            return currentState;
    }
}

const reducers = combineReducers({
        menuSelection: menuSelection,
        promotionSelection: promotionSelection,
        promotionList: promotionListLoad,
        promotionDetail: promotionDetailLoad,
        menuItems: menuItemsLoad,
        notification:notification
    });


export default reducers;