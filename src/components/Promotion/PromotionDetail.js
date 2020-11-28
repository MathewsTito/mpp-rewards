import React from 'react';
import {connect} from 'react-redux';

const promotionDetail = (props) => {
    return (
        <React.Fragment>
            <p>Will show promotion details here!</p>
            <p>{props.selectedPromotionId}</p>
        </React.Fragment>
    );
}

const mapStateToProps = state => ({
    selectedPromotionId: state.promotionSelection

});

export default connect(mapStateToProps)(promotionDetail);