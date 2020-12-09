import React, {Component} from 'react'
import {connect} from 'react-redux'

import {Loading,NoPermission} from '../../common/Utils';
import * as Constants from '../../common/Constants';
import PromotionDetailView from './PromotionDetailView';
import {loadPromotionDetailsAction} from '../../../actions';

class PromotionDetail extends Component{


    componentDidMount() { 
        this.props.loadPromotionDetail(this.props.match.params.promoid);
    }

    render() {
        const query = new URLSearchParams(this.props.location.search)
        const action = (query && query.length && query.length == 2 && query[0] == "action")?query[1]:Constants.ACCESS_VIEW;

        //Check if the details is still being loaded..
        if (Object.keys(this.props.promotionDetail).length == 0 
            || this.props.promotionDetail.promotionId != this.props.match.params.promoid){
            return (<Loading/>);
        } 

        //Check if the user has permission for the action on the object
        if (!this.props.promotionDetail.allowedActions.includes(action)){
            return (<NoPermission/>);
        }

        switch (action) {
            case Constants.ACCESS_VIEW:
                return (<PromotionDetailView promotionDetail={this.props.promotionDetail}/>);
                break;
            case Constants.ACCESS_APPROVE:
                break;
            case Constants.ACCESS_DELETE:
                break;
            case Constants.ACCESS_EDIT:
                break;
            default:
                break;

        }

    }
}

const mapStateToProps =(state) =>(
    {
        promotionDetail: state.promotionDetail
    }
)



const mapDispatchToProps =(dispatch) =>{
    return {
        loadPromotionDetail: (promotId) => dispatch(loadPromotionDetailsAction(promotId))
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(PromotionDetail);