import React from 'react';
import {connect} from 'react-redux';

import PromotionSummary from './PromotionSummary';
import classes from './PromotionSummaryTable.module.css';
import {Loading} from '../../common/Utils';

  
const PromotionSummaryTable = (props) => {
    const {promotionList} = {...props};

    if (promotionList == null)
        return <Loading/>;

    const myclasses = [classes.PromotionSummaryTable]

    // if(props.selectedPromotionId > 0) 
    //     myclasses.push(classes.Hidden);
    // else
    //     myclasses.push(classes.Visible);

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
    selectedPromotionId: state.promotionSelection.promoId

});

export default connect(mapStateToProps)(PromotionSummaryTable);