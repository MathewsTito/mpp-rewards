import React, {Component} from 'react'
import PromotionList from '../../components/Promotion/PromotionList'
import Layout from '../../components/Layout/Layout'

import classes from './ViewPromotions.module.css'
import promotionDetail from '../../components/Promotion/PromotionDetail'

class ViewPromotions extends Component{

    state = {
        promotionId: 0,
        promotionDetail: null,

    }

    handleSearch = () => {

    }

    componentDidMount(){
        const promotionList = [
            {id:123456,
            description: "My first promotion description",
            createdBy: "tmathe5",
            createDate: "04/03/2020"},
            {id:123457,
            description: "My other promotion",
            createdBy: "tmathe5",
            createDate: "03/20/2020"}
        ]

        this.setState({promotionList: [...promotionList]});

    }

    render() {

        return (
            <React.Fragment>
                <div className={classes.ViewPromotions}>
                    <div className={classes.Heading}>
                        <h2>
                            Available Promotions
                        </h2>
                        <div className={classes.SearchPanel}>
                            <input type="text" value="Enter Promotion Id"/>
                            <div className={classes.Icon}>
                                <i class="fas fa-search fa-lg"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <PromotionList promotionList={this.state.promotionList}/>
            </React.Fragment>
        );
    }
}

export default ViewPromotions;