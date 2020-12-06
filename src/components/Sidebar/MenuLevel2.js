
import MenuItemLevel2 from './MenuItemLevel2'
import React from 'react';

const MenuLevel2 = (props) => {

    //console.log(props);
    var {menuItems} = {...props};

    return (
        <React.Fragment>
            {menuItems.map(mi=>{
                return (
                    <MenuItemLevel2 displayLine={mi.displayLine} css={mi.css} mpath={mi.path} mkey={mi.key} key={mi.key}/>
                );
            })}
        </React.Fragment>  
    );

}

export default MenuLevel2;