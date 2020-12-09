import React from 'react'
import { Link } from 'react-router-dom';

import classes from './CRUDControls.module.css';

const CRUDControls = (props) => {
    const {isView=true,isEdit=false,isDelete=false,isApprove=true,viewAction,editAction,approveAction,deleteAction,promoId} = props;

    return (
        
        <div className={classes.CRUDControls}>
            { isDelete && 
                <Link to={"/promotions/"+promoId+"?action=delete"}>
                    <div className={classes.Icon} onClick={deleteAction}>
                        <span className="fas fa-trash-alt" style={{"font-size":"1.25em"}}/>
                    </div>
                </Link>
            }

            { isEdit &&
                <Link to={"/promotions/"+promoId+"?action=edit"}>
                    <div className={classes.Icon} onClick={editAction}>
                        <span className="fas fa-edit" style={{"font-size":"1.25em"}}/>
                    </div>
                </Link>
            }

            { isApprove &&
                 <Link to={"/promotions/"+promoId+"?action=approve"}>
                    <div className={classes.Icon} onClick={approveAction}>
                        <span className="fas fa-thumbs-up" style={{"font-size":"1.25em"}}/>
                    </div>
                </Link>
            }

            { isView &&
                <Link to={"/promotions/"+promoId+"?action=view"}>
                    <div className={classes.Icon} onClick={viewAction}>
                        <span className="fas fa-eye" style={{"font-size":"1.25em"}}/>
                    </div>
                </Link>
            }

        </div>        
    );
}

export default CRUDControls;