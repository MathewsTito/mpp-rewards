import React from 'react'
import { connect } from 'react-redux'

import {promotionSelectedAction} from '../../actions';

const PromotionSummary = (props) => {
    const {id,description,createdBy,createDate} = {...props.promotion}

    return (
       <tr onDoubleClick={()=>props.promotionSelectedAction(id)}>
           <td>{id}</td>
           <td>{description}</td>
           <td>{createdBy}</td>
           <td>{createDate}</td>
       </tr>
    );
}

const mapDispatchToProps = dispatch => ({
    promotionSelectedAction : (id) => dispatch(promotionSelectedAction(id))
});

export default connect(null,mapDispatchToProps)(PromotionSummary);