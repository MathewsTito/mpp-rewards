import React from 'react';
import {connect} from 'react-redux';

import PromotionSummary from './PromotionSummary';
import classes from './PromotionList.module.css'


const PromotionList = (props) => {
    const {promotionList} = {...props};

    const myclasses = [classes.PromotionList]

    if(props.selectedPromotionId > 0) 
        myclasses.push(classes.Hidden);
    else
        myclasses.push(classes.Visible);

    return (
        <div className={myclasses.join(' ')}>
            <table class="table table-hover">
                <thead>
                    <th>Promotion Id</th>
                    <th>Promotion Name</th>
                    <th>Created By</th>
                    <th>Creation Date</th>
                </thead>
                <tbody>
                    {promotionList?promotionList.map(promo => {
                        return <PromotionSummary promotion={promo}/>;
                        }
                    ):null}
                </tbody>
            </table>
        </div>

    );
}

const mapStateToProps = state => ({
    selectedPromotionId: state.promotionSelection

});

export default connect(mapStateToProps)(PromotionList);