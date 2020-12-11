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
 

const reducers = combineReducers({
        menuSelection: menuSelection,
        promotionSelection: promotionSelection,
        promotionList: promotionListLoad,
        promotionDetail: promotionDetailLoad
    });


export default reducers;