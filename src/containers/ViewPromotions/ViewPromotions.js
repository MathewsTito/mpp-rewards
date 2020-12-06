import React, {Component} from 'react'
import {connect} from 'react-redux'

import PromotionList from '../../components/Promotion/PromotionList'
import Layout from '../../components/Layout/Layout'
import classes from './ViewPromotions.module.css'
import PromotionDetail from '../../components/Promotion/PromotionDetail'
import {loadPromotionsAction} from '../../actions'

class ViewPromotions extends Component{


    componentDidMount() {
        this.props.loadPromotionList("ERWD");
    }

    render() {

        return (
            <React.Fragment>
                <div className={classes.ViewPromotions}>
                    <div className={classes.Heading}>
                        <h2>
                            Promotions
                        </h2>
                        <div className={classes.SearchPanel}>
                            <input type="text" value="Enter Promotion Id"/>
                            <div className={classes.Icon}>
                                <i class="fas fa-search fa-lg"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <PromotionList promotionList={this.props.promotionList}/>
                <PromotionDetail/>
            </React.Fragment>
        );
    }
}

const mapStateToProps =(state) =>(
    {
        promotionList: state.promotionList
    }
)



const mapDispatchToProps =(dispatch) =>{
    return {
        loadPromotionList: (orgId) => dispatch(loadPromotionsAction(orgId))
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(ViewPromotions);