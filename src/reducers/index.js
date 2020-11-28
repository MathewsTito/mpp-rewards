import {combineReducers} from 'redux';


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
 

const reducers = combineReducers({
        menuSelection: menuSelection,
        promotionSelection: promotionSelection
    });


export default reducers;