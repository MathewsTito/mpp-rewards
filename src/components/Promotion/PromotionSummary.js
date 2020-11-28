import React from 'react'

const PromotionSummary = (props) => {
    const {id,description,createdBy,createDate} = {...props.promotion}

    return (
       <tr>
           <td>{id}</td>
           <td>{description}</td>
           <td>{createdBy}</td>
           <td>{createDate}</td>
       </tr>
    );
}

export default PromotionSummary;