import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import classes from './Layout.module.css';
import Toolbar from '../Toolbar/Toolbar';
import Sidebar from '../Sidebar/Sidebar';
import PromotionList from '../Promotion/PromotionList/PromotionList';
import PromotionDetail from '../Promotion/PromotionDetail/PromotionDetail'; 
import MessagePanel from '../common/MessagePanel';


const Layout = ( props ) => {
    const {profileInfo} ={...props};

    return ( 
        <Router>            
            <Toolbar profileInfo={profileInfo}/>
          
            <Sidebar/>
                
            <main className={classes.Main}>
                    <MessagePanel/>
                    <Switch>
                        <Route path="/promotions" exact component={PromotionList}/>
                        <Route path="/promotions/:promoid" exact component={PromotionDetail}/>
                    </Switch>
            </main>

        </Router> 
    );
}
 
export default Layout; 