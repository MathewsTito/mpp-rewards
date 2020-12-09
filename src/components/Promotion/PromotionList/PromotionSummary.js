import React from 'react'
import { connect } from 'react-redux'

import {viewPromotionAction} from '../../../actions';
import CRUDControls from '../../common/CRUDControls';
 
const PromotionSummary = (props) => { 
    const {id,description,createdBy,createDate} = {...props.promotion}

    return (
       <tr onDoubleClick={()=>props.viewPromotionAction(id)}>
           <td>{id}</td>
           <td>{description}</td>
           <td>{createdBy}</td>
           <td>{createDate}</td>
           <td style={{padding: "0px 0px 0px 0px","vertical-align": "middle"}}>
               <CRUDControls 
                    isDelete="true"
                    promoId={id}
                    viewAction={()=>props.viewPromotionAction(id)}
                />
           </td>
       </tr>
    );
}

const mapDispatchToProps = dispatch => ({
    viewPromotionAction : (id) => dispatch(viewPromotionAction(id))
});

export default connect(null,mapDispatchToProps)(PromotionSummary);