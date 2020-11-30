import React from 'react'

import classes from './KeyValue.module.css';

const KeyValue = ({keyvalues}) =>{

    const entries = Object.entries(keyvalues);

    return (
        <table className={classes.KeyValue}>
            <tbody>
                {entries.map(a=>{
                    const key = a[0];
                    const value = a[1]
                    return (
                        <tr>
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