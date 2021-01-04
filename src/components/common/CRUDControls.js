import React from 'react'
import { Link } from 'react-router-dom';

import classes from './CRUDControls.module.css';

const CRUDControls = (props) => {
    const {isView=false,isEdit=false,isDelete=false,isApprove=false,viewLink,editLink,deleteLink,approveLink} = props;

    return (
        
        <div className={classes.CRUDControls}>
            { isDelete && 
                <Link to={deleteLink}>
                    <div className={classes.Icon}>
                        <span className="fas fa-trash-alt" style={{"fontSize":"1.25em"}}/>
                    </div>
                </Link>
            }

            { isEdit &&
                <Link to={editLink}>
                    <div className={classes.Icon}>
                        <span className="fas fa-edit" style={{"fontSize":"1.25em"}}/>
                    </div>
                </Link>
            }

            { isApprove &&
                 <Link to={approveLink}>
                    <div className={classes.Icon}>
                        <span className="fas fa-thumbs-up" style={{"fontSize":"1.25em"}}/>
                    </div>
                </Link>
            }

            { isView &&
                <Link to={viewLink}>
                    <div className={classes.Icon}>
                        <span className="fas fa-eye" style={{"fontSize":"1.25em"}}/>
                    </div>
                </Link>
            }

        </div>        
    );
}

export default CRUDControls;