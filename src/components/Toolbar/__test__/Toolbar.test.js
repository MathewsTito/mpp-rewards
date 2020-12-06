import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom';

import Toolbar from '../Toolbar'

test('test that toolbar renders sucessfully', ()=>{
    const {container,getByTestId} = render(<Toolbar/>);
    expect(getByTestId('toolbar')).toBeTruthy();
    expect(getByTestId('brand')).toBeTruthy;
    expect(getByTestId('left-pane')).toBeTruthy;
    expect(getByTestId('profile-icon')).toBeTruthy;
})

