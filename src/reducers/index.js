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
 
const reducers = combineReducers({
        menuSelection: menuSelection
    });


export default reducers;