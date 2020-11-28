import React from "react";
import {connect} from 'react-redux';
import {Link} from "react-router-dom";


import classes from './MenuItemLevel2.module.css';
import {menuSelectedAction} from '../../actions';


const MenuItemLevel2 = (props) => {

    const {displayLine,action,css,path,mkey,currMenuSelectionKey} = {...props};

    const menuItemClasses = [classes.MenuItemLevel2];

    if (mkey === currMenuSelectionKey){
        menuItemClasses.push(classes.Hilite);
    }

    return (
        <div className={menuItemClasses.join(' ')} onClick={action}>
            <span className={css}> </span>
            <span> 
                <Link to={path}>&nbsp;{displayLine}</Link>
            </span>
        </div>       
        

    );

}

const mapStateToProps =(state) =>{
    return {
        currMenuSelectionKey: state.menuSelection
    };
}

const mapDispatchToProps = (dispatch,props) => {
    return {
        action: () => dispatch(menuSelectedAction(props.mkey))
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(MenuItemLevel2);