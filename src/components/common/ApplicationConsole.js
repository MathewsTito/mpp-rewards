import React from 'react';
import {connect} from 'react-redux';

import classes from './ApplicationConsole.module.css'
import {toggleApplicationConsoleAction} from '../../actions'


const getCSSforCategory = (category) => {
    switch (category) {
        case "NORMAL"    : return classes.Normal;
        case "WARNING"   : return classes.Warning;
        case "ERROR"     : return classes.Error;
        default     : return classes.Normal;
    }
}

const ApplicationConsole = (props) => {

    const toggleExpansion = () => {
        props.toggleExpansion();
    }
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

    if(props.appConsole.expanded){

        const jsxholder = [];
        for (var i=0;i<10;i++){
            var css = [classes.ApplicationConsole];

            var thisIndex = (index - i)
            if (thisIndex < 0)
                thisIndex = 100-thisIndex;
            
            const line = props.appConsole.lines[thisIndex]
            css.push(getCSSforCategory(props.appConsole.mcategory[thisIndex]))
            jsxholder[9-i] = typeof line === 'undefined' ? null: <div className={css.join(' ')}>{props.appConsole.lines[thisIndex]}</div>;
        }
        return (
            <div onClick={toggleExpansion}>
                {jsxholder}
            </div>
        )

    } else {
        return (
            <div className={cssClasses.join(' ')} onClick={toggleExpansion}>
                {content}
            </div>
        )
    }


}



const mapStateToProps = (state) => (
    {
        appConsole: {...state.appConsole}
    }
)

const mapDispatchToProps = (dispatch) => (
    {
        toggleExpansion: () => dispatch(toggleApplicationConsoleAction())
    }
)

export default connect(mapStateToProps,mapDispatchToProps)(ApplicationConsole);