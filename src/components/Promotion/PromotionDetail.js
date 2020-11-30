import React from 'react';
import {connect} from 'react-redux';

import classes from './PromotionDetail.module.css';
import KeyValue from './KeyValue';

const promotionDetail = (props) => {

    const myclasses = [classes.PromotionDetail];

    if (props.selectedPromotionId < 0) {
        myclasses.push(classes.Hidden);
    } else {
        myclasses.push(classes.Visible);
    }

    return (
        <div className={myclasses.join(' ')}>
            <div className={classes.Section}>           
                <h4 className={classes.Heading}>GENERAL INFORMATION</h4>
                <div className={classes.Content}>
                    <table>
                        <tbody>
                            <tr>
                                <td className={classes.Label}>Promotion Id:</td>
                                <td className={classes.Value}>{props.selectedPromotionId}</td>
                            </tr>
                            <tr>
                                <td className={classes.Label}>Promotion Name:</td>
                                <td className={classes.Value}>5% Quarterly Gas and Grocery</td>
                            </tr>
                            <tr>
                                <td className={classes.Label}>General Description:</td>
                                <td className={classes.Value}>This is a 5% quarterly promotion for CBB</td>
                            </tr>
                            <tr>
                                <td className={classes.Label}>Affiliate Network:</td>
                                <td className={classes.Value}>affiliate network</td>
                            </tr>
                            <tr>
                                <td className={classes.Label}>Merchant Partner Id:</td>
                                <td className={classes.Value}>60110001002000202</td>
                            </tr>
                            <tr>
                                <td className={classes.Label}>Add Merchant/MCC/Country Code:</td>
                                <td className={classes.Value}>Y</td>
                            </tr>
                            <tr>
                                <td className={classes.Label}>Promotion Payout Type:</td>
                                <td className={classes.Value}>CBB</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className={classes.Section}>           
                <h4 className={classes.Heading}>QUALIFICATION INFORMATION</h4>
                <div className={classes.Content}>
                    <table>
                        <tbody>
                            <tr>
                                <td className={classes.Label}>Qualification Criteria:</td>
                                <td className={classes.Value}>Crit 42: Earn X Reward on All Purchases</td>
                            </tr>
                            <tr>
                                <td className={classes.Label}>Time to qualify from enrollment date (Optional):</td>
                                <td className={classes.Value}>Not Specified</td>
                            </tr>
                            <tr>
                                <td className={classes.Label}>Unit of the Duration:</td>
                                <td className={classes.Value}>Not Specified</td>    
                            </tr>
                            <tr>
                                <td className={classes.Label}>Qualification Events:</td>
                                <td className={classes.Value}>PURCHASES (INCL DISCOVER PRODUCT FEES)</td>
                            </tr>
                            <tr>
                                <td className={classes.Label} colSpan="2" style={{"background-color":"white","text-align": "center","padding-top": "10px"}}>Events specific fields</td>

                            </tr>
                            <tr>
                                <td className={classes.Label}>PURCHASES (INCL DISCOVER PRODUCT FEES):</td>
                                <td className={classes.Value}>
                                    <KeyValue keyvalues={{'CBB Reward Amount:':'10','CBB Payout Basis Code:':'PERCENT'}}/>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className={classes.Section}>
                <h4 className={classes.Heading}>PROMOTIONAL CAPS</h4>
                <div className={classes.Content}>
                    <table>
                        <tr>
                            <th>Cap Type</th>
                            <th>Cap Time Unit</th>
                            <th>Incentive Type Code</th>
                            <th>Cap value</th>
                        </tr>
                    </table>
                </div>
            </div>

        </div>
    );
}

const mapStateToProps = state => ({
    selectedPromotionId: state.promotionSelection

});

export default connect(mapStateToProps)(promotionDetail);