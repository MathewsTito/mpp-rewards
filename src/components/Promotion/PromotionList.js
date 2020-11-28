import React from 'react';

import PromotionSummary from './PromotionSummary';
import classes from './PromotionList.module.css'

const PromotionList = (props) => {
    const {promotionList} = {...props};

    return (
        <div className={classes.PromotionList}>
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

export default PromotionList;