import React from 'react';
import {connect} from 'react-redux';

import arrow from '../../assets/arrow.svg';
import blank from '../../assets/blank.svg';
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
            var css = [classes.Message];

            var thisIndex = (index - i)
            if (thisIndex < 0)
                thisIndex = 100-thisIndex;
            
            const line = props.appConsole.lines[thisIndex]

            //Determine if this line is the first line that will be displayed in the console
            var isThisTheFirstLine = false;
            const prevLine = props.appConsole.lines[thisIndex-1===-1?99:thisIndex-1];
            if (typeof prevLine === 'undefined')
                isThisTheFirstLine = true;

            css.push(getCSSforCategory(props.appConsole.mcategory[thisIndex]))
            jsxholder[9-i] = typeof line === 'undefined' ? 
                            null:
                             <div className={css.join(' ')}>
                                 {isThisTheFirstLine?<img className={classes.Rotate}  src={arrow} alt="arrow" height="10px"/>:<img className={classes.Image} src={blank} alt="arrow" height="12px"/>}
                                 {props.appConsole.lines[thisIndex]}
                             </div>;
        }
        return (
            <div className={classes.ApplicationConsole} onClick={toggleExpansion}>
                {jsxholder}
            </div>
        )

    } else {
        return (
            <div className={cssClasses.join(' ')} onClick={toggleExpansion}>
                <div className={classes.Message}>
                    <img className={classes.RotateAnti} src={arrow} alt="arrow" height="10px"/>
                    {content}
                </div>
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