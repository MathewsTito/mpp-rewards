import React from 'react';
import classes from './Toolbar.module.css'
import ProfileInfo from './ProfileInfo';

const Toolbar = (props) => {
  const {profileInfo} = {...props};
  return (
    <div className={classes.Toolbar}>
      <div className={classes.Brand}></div>
      <div className={classes.LeftPanel}>
        <div className={classes.ProfileIcon}>
            <ProfileInfo profileInfo={profileInfo}/>
        </div>
      </div>
    </div>
  );
}


export default Toolbar;