import React from 'react';

import classes from './MenuItemLevel1.module.css';
import MenuLevel2 from './MenuLevel2';


const MenuItemLevel1 = (props) => {

    //console.log ("Inside MenuItemlevel1")
    const {displayLine, action, expanded, subMenus} = {...props};
    var subMenuClasses = expanded? classes.SubMenu+" "+classes.Expanded: classes.SubMenu+" "+classes.Collapsed;

    var menuItemIcon = expanded? "fas fa-angle-down" : "fas fa-angle-right";

    return (
        <React.Fragment>
            <div className={classes.MenuItemLevel1} onClick={action}>
                <i className={menuItemIcon}></i>
                <span>&nbsp;{displayLine}</span>
            </div>
            <div className={subMenuClasses}>
                <MenuLevel2 menuItems={subMenus}/>
            </div>

        </React.Fragment>   
 
    );

}

export default MenuItemLevel1;