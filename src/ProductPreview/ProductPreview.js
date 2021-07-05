import React from 'react';
import classes from './ProductPreview.module.css';

const ProductPreview = (props) =>{

const getHour = new Date().getHours()>9?new Date().getHours():'0'+new Date().getHours(); 
const getMinute=new Date().getMinutes()>9?new Date().getMinutes():'0'+new Date().getMinutes();
    // console.log(props)
    return(
        <div className={classes.ProductPreview}>
             <img src={props.currentPreviewImage} alt="Product Preview"/>

            {
                props.currentSelectedFeature===1 ?
                    <div className={classes.HeartBeatsection}>
                        <i className="fa fa-heartbeat"></i>
                        <p>78</p>  
                    </div> 
                    : 
                    <div className={classes.TimeSection}>
                       <p>{`${getHour}:${getMinute}`}</p>   
                    </div> 

            }
        </div>
    );
}
export default ProductPreview;