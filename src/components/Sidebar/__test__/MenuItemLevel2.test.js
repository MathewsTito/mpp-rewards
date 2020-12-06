import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {render,fireEvent,cleanup, getNodeText} from '@testing-library/react';
import {Router,Switch} from  'react-router-dom';
import '@testing-library/jest-dom'
import {createMemoryHistory} from 'history';

import MenuItemLevel2 from '../MenuItemLevel2';
import reducers from '../../../reducers';
import {menuSelectedAction} from '../../../actions';

//Since MenuItemLevel2 uses redux, we will need to render it within the
//<Provider/> tags to give it access to the redux store!
const renderWithRedux = (componentToRender, {initialState, store=createStore(reducers,initialState)} ={}) => {
    const history = createMemoryHistory();
    return {
        ...render(<Provider store={store}><Router history={history}><Switch>{componentToRender}</Switch></Router></Provider>)
    };
}

test("it renders with redux", () => {
    const {container,getByText} = renderWithRedux(<MenuItemLevel2/>);
    //console.log(container.innerHTML);
})

test("that it renders the attributes passed", () => {
    const store = createStore(reducers,{});
    const {container,getByText} = renderWithRedux(<MenuItemLevel2 displayLine="My Menu" mpath="/mymenu" mkey="10"/>, {initialState:{},store:store});
    expect(getByText(/My Menu/)).toBeTruthy;
    expect(getByText(/My Menu/).closest('a')).toHaveAttribute('href','/mymenu');
})


test("that it Hilites when clicked", () => {
    const store = createStore(reducers,{});
    const {container,getByText} = renderWithRedux(<MenuItemLevel2 displayLine="My Menu" mpath="/mymenu" mkey="10"/>, {initialState:{},store:store});
    expect (container.firstChild.classList.contains('Hilite')).toBeFalsy;

    store.dispatch(menuSelectedAction("10"))
    expect (container.firstChild.classList.contains('Hilite')).toBeTruthy;

})