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

const promotionSelection = (currSelection=-1,action) => {
    switch (action.type) {
        case 'promotion/selected': {
            const newSelection = action.placeholder;
            return newSelection;
        }

        case 'menu/selected': {
            return -1;
        }

        default:
            return currSelection;
    }
}

const promotionListLoad =(currentList=[],action) => {
    
    switch (action.type){
        case 'promotion/load-list': {
            console.log("setting state with new promotions list")
            return action.placeholder;        
        }

        default:
            return currentList;
    }
}
 

const reducers = combineReducers({
        menuSelection: menuSelection,
        promotionSelection: promotionSelection,
        promotionList: promotionListLoad
    });


export default reducers;