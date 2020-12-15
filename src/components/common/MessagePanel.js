import React from 'react'
import {connect} from 'react-redux'

import classes from './MessagePanel.module.css'
import {notificationDisplayedAction} from '../../actions'


class MessagePanel extends React.Component {

    shouldComponentUpdate(nextProps, nextState){
        if (nextProps.notification.displayed == true 
            && this.props.notification.displayed == false
            && this.props.notification.content == nextProps.notification.content)
            return false;
        else   
            return true;
    }

    componentWillUnmount(){
        this.props.notificationDisplayed();
    }

    render() {

        var {type,content,displayed} = this.props.notification;
        const appliedClasses = [classes.MessagePanel];
        
        if (displayed || content == null || content.length == 0){
            appliedClasses.push(classes.Hide);
            const contentv2 = content;
        } else {
            appliedClasses.push(classes.Show);
            switch (type){
                case "ERROR":
                    appliedClasses.push(classes.Error);
                    break;
                case "WARNING":
                    appliedClasses.push(classes.Warning);
                    break;
                default:
                    appliedClasses.push(classes.Normal);
            }

            content = ">> "+content;


        }
        return (
            <div className={appliedClasses.join(' ')}>
                {content}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        notification :{...state.notification}
    }
}

const mapDispatchToProps = (dispatch) => {
    return (
        {
            notificationDisplayed: () => dispatch(notificationDisplayedAction())
        }
    );
}

export default connect(mapStateToProps,mapDispatchToProps)(MessagePanel);