import React from 'react'
import { connect } from 'react-redux'

import {viewPromotionAction} from '../../../actions';
import CRUDControls from '../../common/CRUDControls';
import * as PromotionConstants from '../PromotionConstants';
 
const PromotionSummary = (props) => { 
    const {id,description,createdBy,createDate} = {...props.promotion};
    return (
       <tr onDoubleClick={()=>props.viewPromotionAction(id)}>
           <td>{id}</td>
           <td>{description}</td>
           <td>{createdBy}</td>
           <td>{createDate}</td>
           <td style={{padding: "0px 15px 0px 0px","vertical-align": "middle"}}>
               <CRUDControls 
                    isDelete="true"
                    isEdit="true"
                    deleteLink={PromotionConstants.LINK_PROMOTION_DELETE.replaceAll("{0}",id)}
                    editLink={PromotionConstants.LINK_PROMOTION_EDIT.replaceAll("{0}",id)}
                    approveLink={PromotionConstants.LINK_PROMOTION_APPROVE.replaceAll("{0}",id)}
                    viewLink={PromotionConstants.LINK_PROMOTION_VIEW.replaceAll("{0}",id)}
                />
           </td>
       </tr>
    );
}

const mapDispatchToProps = dispatch => ({
    viewPromotionAction : (id) => dispatch(viewPromotionAction(id))
});

export default connect(null,mapDispatchToProps)(PromotionSummary);