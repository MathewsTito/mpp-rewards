import React from 'react'
import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import ProfileInfo from '../ProfileInfo'


test("test that profile loads without crashing even when profile attributes are missing", () => {
    const profileInfo = {};
    const {container,getByText} = render(<ProfileInfo profileInfo={profileInfo}/>);
    //console.log(container.innerHTML);
});

test("test that profile displays supplied attributes", () => {
    const profileInfo = {name:"Name",org:"My Org",env:"My Env",appProfile:"App Profile"};
    const {container,getByText} = render(<ProfileInfo profileInfo={profileInfo}/>);
    expect(getByText('Name')).toBeInTheDocument();
    expect(getByText('My Org')).toBeInTheDocument();
    expect(getByText('My Env')).toBeInTheDocument();
    expect(getByText('App Profile')).toBeInTheDocument();
    //console.log(container.innerHTML);
});
