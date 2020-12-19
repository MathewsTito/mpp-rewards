import React from 'react';

import classes from './MenuItemLevel1.module.css';
import MenuLevel2 from './MenuLevel2';
import arrow from '../../assets/arrow.svg';

const MenuItemLevel1 = (props) => {

    //console.log ("Inside MenuItemlevel1")
    const {displayLine, action, expanded, subMenus} = {...props};
    var subMenuClasses = expanded? classes.SubMenu+" "+classes.Expanded: classes.SubMenu+" "+classes.Collapsed;

    // var menuItemIcon = expanded? "fas fa-angle-down" : "fas fa-angle-right";
    var menuItemIcon =  expanded? classes.RotateClockwise:classes.RotateAntiClockwise;

    return (
        <React.Fragment>
            <div className={classes.MenuItemLevel1} onClick={action}>
                {/* <i className={menuItemIcon}></i> */}
                <svg className={menuItemIcon}  viewBox="20 86 230 336" height="12px">
                    <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path>
                </svg>
                {/* <img className={classes.RotateClockwise} height="12px" src={arrow} alt="arrow" /> */}
                <span>&nbsp;{displayLine}</span>
            </div>
            <div className={subMenuClasses}>
                <MenuLevel2 menuItems={subMenus}/>
            </div>

        </React.Fragment>   
 
    );

}

export default MenuItemLevel1;