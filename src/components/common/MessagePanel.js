import {connect} from 'react-redux'

import classes from './MessagePanel.module.css'
import {notificationDisplayedAction} from '../../actions'

const MessagePanel =(props) =>{
    const {type,content,displayed} = props.notification;
    const appliedClasses = [classes.MessagePanel];
    if (displayed || content == null || content.length()== 0){
        appliedClasses.push(classes.Hide);
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

        props.notificationDisplayed();
    }
    return (
        <div className={appliedClasses}>
            <p>{content}</p>
        </div>
    );
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