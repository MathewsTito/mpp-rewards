import React from 'react'

import classes from './KeyValue.module.css';

const KeyValue = ({keyvalues}) =>{

    if (keyvalues == null || typeof keyvalues == 'undefined')
        return null;


    const entries = Object.entries(keyvalues);

    return (
        
        <table className={classes.KeyValue}>
            <tbody>
                {entries.map(a=>{
                    const key = a[0];
                    const value = a[1]
                    return (
                        <tr key={key}>
                            <td>{key}</td>
                            <td>{value}</td>
                        </tr>                       
                    );
                })}

            </tbody>
        </table>
    );
}

export default KeyValue;