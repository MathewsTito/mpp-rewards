import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import classes from './Layout.module.css';
import Toolbar from '../Toolbar/Toolbar';
import Sidebar from '../Sidebar/Sidebar';
import PromotionList from '../Promotion/PromotionList/PromotionList';
import PromotionDetail from '../Promotion/PromotionDetail/PromotionDetail'; 


const Layout = ( props ) => {
    const {profileInfo} ={...props};

    const menu = [
        {
            key: 1,
            displayLine: "Manage Promotions",
            expanded: false,
            subMenus: [
                {
                    key: 11,
                    displayLine: "Create New",
                    path: "/createPromotion",
                    css: "fas fa-plus"
                },
                {
                    key: 12,
                    displayLine: "Update Existing",
                    path: "/updatePromotion",
                    css: "fas fa-edit"
                },
                {
                    key: 13,
                    displayLine: "View Existing",
                    path: "/promotions",
                    css: "fas fa-eye"
                }
            ]

        },
        {
            key: 2,
            displayLine: "Manage Offers",
            expanded: false,
            subMenus: [
                {
                    key: 21,
                    displayLine: "Create",
                    path: "/crateOffer",
                    css: "fas fa-plus"
                },
                {
                    key: 22,
                    displayLine: "Update",
                    path: "/updateOffer",
                    css: "fas fa-edit"
                },
                {
                    key: 23,
                    displayLine: "View",
                    path: "/viewOffer",
                    css: "fas fa-eye"
                }
            ]

        },
        {
            key: 3,
            displayLine: "Manage Catchups",
            expanded: false,
            subMenus: [
                {
                    key: 31,
                    displayLine: "Create",
                    path: "/creatCatchup",
                    css: "fas fa-plus"
                },
                {
                    key: 32,
                    displayLine: "Update",
                    path: "/updateCatchup",
                    css: "fas fa-edit"
                },
                {
                    key: 33,
                    displayLine: "View",
                    path: "/viewCatchup",
                    css: "fas fa-eye"
                }
            ]

        }
    ]
    return ( 
        <Router>            
            <Toolbar profileInfo={profileInfo}/>

            <Sidebar menu={menu}/>
            
            <main className={classes.Main}>
                    <Switch>
                        <Route path="/promotions" exact component={PromotionList}/>
                        <Route path="/promotions/:promoid" exact component={PromotionDetail}/>
                    </Switch>
            </main>


        </Router> 
    );
}
 
export default Layout; 