import React, {Component} from 'react'
import {connect} from 'react-redux'

import {Loading,NoPermission,ConfirmationPanel} from '../../common/Utils';
import * as Constants from '../../common/Constants';
import PromotionDetailView from './PromotionDetailView';
import {loadPromotionDetailsAction,approvePromotionAction,deletePromotionAction} from '../../../actions';
import MessagePanel from '../../common/MessagePanel';

class PromotionDetail extends Component{


    componentDidMount() { 
        this.props.loadPromotionDetail(this.props.match.params.promoid);
    }

    handleCancelAction = () => {
        this.props.history.push("/promotions")
    }

    
    render() {
        let promptText = "";
        const query = new URLSearchParams(this.props.location.search)
        const action = query.get("action");
        const promoId = this.props.match.params.promoid;

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
                return (
                    <React.Fragment>
                        <MessagePanel/>
                        <PromotionDetailView promotionDetail={this.props.promotionDetail}/>
                    </React.Fragment>
                );
                break;
            case Constants.ACCESS_APPROVE:
                promptText = "Approve selected Promotion (id="+promoId+") ?";
                return (
                    <React.Fragment>
                        <MessagePanel/>
                        <ConfirmationPanel 
                            prompt={promptText} 
                            onCancelAction={()=>this.handleCancelAction()}
                            onConfirmAction={() => this.props.handleApproveAction(promoId,this.props.history)}/>
                        <PromotionDetailView promotionDetail={this.props.promotionDetail}/>
                    </React.Fragment>
                )
                break;
            case Constants.ACCESS_DELETE:
                promptText = "Delete selected Promotion (id="+promoId+") ?";
                return (
                    <React.Fragment>
                        <MessagePanel/>
                        <ConfirmationPanel 
                            prompt={promptText} 
                            onCancelAction={()=>this.handleCancelAction()}
                            onConfirmAction={()=>this.props.handleDeleteAction(promoId,this.props.history)}/>
                        <PromotionDetailView promotionDetail={this.props.promotionDetail}/>
                    </React.Fragment>
                )
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
        loadPromotionDetail: async (promoId) => {
            await dispatch(loadPromotionDetailsAction(promoId))
        },
        handleApproveAction: async (promoId,history) => {
            await dispatch(approvePromotionAction(promoId));
            history.push("/promotions")
        },
        handleDeleteAction: async (promoId,history) => {
            await dispatch(deletePromotionAction(promoId));
            console.log("about to redirect to /promotions");
            history.push("/promotions")
        }

    };
}

export default connect(mapStateToProps,mapDispatchToProps)(PromotionDetail);