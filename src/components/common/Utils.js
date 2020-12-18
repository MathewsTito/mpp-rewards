import React, {useState} from 'react';

import classes from './Utils.module.css';
import loading from '../../assets/spinner.svg';

export const Loading = () => (
    <div className={classes.Loading}>
        <img height="150px" src={loading} alt="Loading..."/>
    </div>
);

export const NoPermission = () => (
    <div>
        Sorry, you donot have permission to perform the requested operation.
    </div>
);


export const ConfirmationPanel = ({prompt,onConfirmAction,onCancelAction}) => {

    const [modalClasses,setModalClasses] = useState([classes.Modal]);

    const onClick = () => {      
        const newModalClasses = [...modalClasses];
        newModalClasses.push(classes.Show);
        setModalClasses(newModalClasses);
    }

    const confirmAction = () => {
        onClick();
        onConfirmAction();
    }

    const cancelAction = () => {
        onClick();
        onCancelAction();
    }  

    return (
        
        
        <div className={classes.ConfirmationPanel}>
            <div className={modalClasses.join(' ')}>
                <img height="150px" src={loading} alt="Loading..."/>
            </div>
            <span className="far fa-question-circle fa-4x"/>{prompt}<span><button onClick={confirmAction}>OK</button><button onClick={cancelAction}>Cancel</button></span>

            
        </div>
    );
}

