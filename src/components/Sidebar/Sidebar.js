
import React from 'react';
import {connect} from 'react-redux';

import classes from './Sidebar.module.css';
import MenuItemLevel1 from './MenuItemLevel1';
import {loadMenuAction} from '../../actions';
import {Loading} from '../common/Utils';

class Sidebar extends React.Component {
    
    state = {
        lastClick: -1,
        expanded: [false,false,false,false,false]
    }

    componentDidMount() { 
        this.props.loadMenu();
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
        const  items  = this.props.menuItems;

        if (items == null){
            return (<Loading/>);
        }
        
        return(

                <div className={classes.StyledSideNav}>
                    <nav>
                        {
                            items.map((item,i) => {
                                //console.log(item.subMenus);
                                return (
                                    <MenuItemLevel1 
                                        displayLine={item.displayLine}
                                        action={()=>{this.toggleSubMenu(item.key)}}
                                        expanded={this.state.expanded[item.key]}
                                        subMenus={item.subMenus}
                                        key={item.key}
                                    />
                                );
                            })
                        }
                    </nav>
                </div>
        );
    }
}

const mapStateToProps = (state) => {
    return  (
        {
            menuItems: state.menuItems
        }
    );
}

const mapDispatchToProps = (dispatch) => {
    return (
        {
            loadMenu: () => {dispatch(loadMenuAction())}
        }
    );
}



export default connect(mapStateToProps,mapDispatchToProps)(Sidebar);