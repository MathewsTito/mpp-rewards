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
            return action.placeholder;        
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
            console.log("setting state with new promotion detail")
            return action.placeholder;        
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


const reducers = combineReducers({
        menuSelection: menuSelection,
        promotionSelection: promotionSelection,
        promotionList: promotionListLoad,
        promotionDetail: promotionDetailLoad,
        menuItems: menuItemsLoad
    });


export default reducers;