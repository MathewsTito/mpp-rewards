import React from 'react';
import {connect} from 'react-redux';

import classes from './ApplicationConsole.module.css'

const ApplicationConsole = (props) => {
    const index = props.appConsole.topIndex;

    if (index === -1)
        return null

    const category = props.appConsole.mcategory[index];
    const content = props.appConsole.lines[index];

    const cssClasses = [classes.ApplicationConsole];
    if (category === "NORMAL")
        cssClasses.push(classes.Normal)
    else  if (category === "WARNING")
        cssClasses.push(classes.Warning)
    else  if (category === "ERROR")
        cssClasses.push(classes.Error)

    return (
        <div className={cssClasses.join(' ')}>
            {content}
        </div>

    )
}

const mapStateToProps = (state) => (
    {
        appConsole: {...state.appConsole}
    }
)

export default connect(mapStateToProps)(ApplicationConsole);