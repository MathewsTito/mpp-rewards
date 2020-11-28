
import React from 'react';

import classes from './Sidebar.module.css';
import MenuItemLevel1 from './MenuItemLevel1';

class Sidebar extends React.Component {
    
    state = {
        lastClick: -1,
        expanded: [false,false,false,false,false]
    }

    toggleSubMenu = (menuKey) => {

        this.setState(
            (prevState,props) => {
                var newExpanded = [...prevState.expanded];
                var index = prevState.lastClick;


                if (menuKey === index){
                    newExpanded[index] =!prevState.expanded[index];
                } else {
                    if (index >= 0){
                        newExpanded[index] = false;
                    }
                    newExpanded[menuKey] = true;

                }

                return {
                    lastClick: menuKey,
                    expanded: newExpanded
                }
            }
        )       

    }


    render() {
        const  items  = this.props.menu;
        
        return(

                <div className={classes.StyledSideNav}>
                    <nav>
                        {
                            items.map((item,i) => {
                                console.log(item.subMenus);
                                return (
                                    <MenuItemLevel1 
                                        displayLine={item.displayLine}
                                        action={()=>{this.toggleSubMenu(item.key)}}
                                        expanded={this.state.expanded[item.key]}
                                        subMenus={item.subMenus}
                                    />
                                );
                            })
                        }
                    </nav>
                </div>
        );
    }
}

export default Sidebar;