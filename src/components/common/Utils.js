import React from 'react';

import classes from './Utils.module.css';
import loading from '../../assets/giphy.gif';

export const Loading = () => (
    <div>
        <img className={classes.Loading} src={loading} alt="Loading..."/>
    </div>
);

export const NoPermission = () => (
    <div>
        Sorry, you donot have permission to perform the requested operation.
    </div>
);