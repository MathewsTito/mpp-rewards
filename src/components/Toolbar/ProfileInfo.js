import React, {useState} from 'react';
import classes from './ProfileInfo.module.css'


const ProfileInfo = (props) =>{


    const [style,setStyle] = useState({});

    const onMouseOver = (event) => {
        console.log('executing on mouse ovr');
        var left = event.clientX - 300;
        var top = event.clientY;
        var newStyle = {
             left: left+"px",
             top: top+"px"
         };  
         
         setStyle(newStyle);
    }

    const profileInfo = {...{name:" ",org:"",env:"",appProfile:""},...props.profileInfo};

    return (
        <React.Fragment>
            <div className={classes.ProfileInfo} onMouseOver={onMouseOver}>
                <i className="far fa-user fa-4x"></i>
                <div className={classes.ToolTip} style={style}>

                    <table>
                        <tbody>
                            <tr>
                                <td style={{textAlign: "right"}}>Name:&nbsp;&nbsp;</td>
                                <td style={{textAlign: "left"}}>{profileInfo.name}</td>
                            </tr>
                            <tr>
                                <td style={{textAlign: "right"}}>Business Org:&nbsp;&nbsp;</td>
                                <td style={{textAlign: "left"}}>{profileInfo.org}</td>
                            </tr>
                            <tr>
                                <td style={{textAlign: "right"}}>Environment:&nbsp;&nbsp;</td>
                                <td style={{textAlign: "left"}}><b>{profileInfo.env}</b></td>
                            </tr>
                            <tr>
                                <td style={{textAlign: "right"}}>Profile:&nbsp;&nbsp;</td>
                                <td style={{textAlign: "left"}}>{profileInfo.appProfile}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </React.Fragment>
    );
}

export default ProfileInfo;