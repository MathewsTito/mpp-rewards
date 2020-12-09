import React from 'react';
import ReactDom from 'react-dom';
import {getByDisplayValue, render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import KeyValue from '../KeyValue'

test("tests one keyvalue pair", ()=>{
    const {container,getByText} = render(<KeyValue keyvalues={{name:"value"}}/>)
    //console.log(container.innerHTML);
    expect(getByText('name')).toBeInTheDocument();
    expect(getByText('value')).toBeInTheDocument();

})
 
test("test no keyvalues supplied", ()=>{
    const {container,getByText} = render(<KeyValue/>)
})

test("test multiple key value pairs", ()=>{
    const {container,getByText} = render(<KeyValue keyvalues={{name1:"value1",name2:"value2"}}/>)
    //console.log(container.innerHTML);
    expect(getByText('name1')).toBeInTheDocument();
    expect(getByText('value1')).toBeInTheDocument();
    expect(getByText('name2')).toBeInTheDocument();
    expect(getByText('value2')).toBeInTheDocument();
})