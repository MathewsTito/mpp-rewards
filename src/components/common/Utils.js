import React from 'react';

import classes from './Utils.module.css';
import loading from '../../assets/giphy.gif';

export const Loading = () => (
    <div className={classes.Loading}>
        <img  src={loading} alt="Loading..."/>
    </div>
);

export const NoPermission = () => (
    <div>
        Sorry, you donot have permission to perform the requested operation.
    </div>
);


export const ConfirmationPanel = ({prompt,onConfirmAction,onCancelAction}) => {
    return (
        <div className={classes.ConfirmationPanel}>
            <p>{prompt}<span><button>OK</button><button>Cancel</button></span></p>
        </div>
    );
}