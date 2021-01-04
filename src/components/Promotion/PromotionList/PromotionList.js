import React, {Component} from 'react'
import {connect} from 'react-redux'

import PromotionSummaryTable from './PromotionSummaryTable'
import classes from './PromotionList.module.css'
import {loadPromotionsAction} from '../../../actions'

class PromotionList extends Component{
 
 
    componentDidMount() {
        this.props.loadPromotionList("ERWD");
    }
 
    render() {  

        return (
            <React.Fragment>
                <div className={classes.PromotionList}>
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
                <PromotionSummaryTable promotionList={this.props.promotionList}/>
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

export default connect(mapStateToProps,mapDispatchToProps)(PromotionList);