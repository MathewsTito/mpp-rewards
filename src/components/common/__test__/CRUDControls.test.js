import React from 'react';
import ReactDom from 'react-dom';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {Router,Switch} from  'react-router-dom';
import {createMemoryHistory} from 'history';

import CRUDControls from '../CRUDControls'

let history = null;
beforeAll(()=>{
    history = createMemoryHistory();
})

test("Renders without error with default values",()=>{
    const {container} = render(<Router history={history}><CRUDControls/></Router>);
    expect(container.firstChild).toHaveClass("CRUDControls")
    expect(container.firstChild).toBeEmptyDOMElement();
})

test("View Button shows",()=>{
    const {container} = render(<Router history={history}><CRUDControls isView="true" viewLink="/view"/></Router>);
    console.log(container.innerHTML);
    expect(container.firstChild).toHaveClass("CRUDControls")
    expect(container.firstChild).not.toBeEmptyDOMElement();
})