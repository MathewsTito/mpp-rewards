import React from 'react';
import classes from './Toolbar.module.css'
import ProfileInfo from './ProfileInfo';

const Toolbar = (props) => {
  const {profileInfo} = {...props};
  return (
    <div data-testid="toolbar" className={classes.Toolbar}>
      <div data-testid="brand" className={classes.Brand}></div>
      <div data-testid="left-pane" className={classes.LeftPanel}>
        <div data-testid="profile-icon" className={classes.ProfileIcon}>
            <ProfileInfo profileInfo={profileInfo}/>
        </div>
      </div>
    </div>
  );
}


export default Toolbar;