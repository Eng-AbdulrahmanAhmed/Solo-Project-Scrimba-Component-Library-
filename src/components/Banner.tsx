import React, { type JSX } from "react"
import { FaCircleCheck } from "react-icons/fa6";
import { BsFillExclamationTriangleFill } from "react-icons/bs";
import { FaCircleXmark } from "react-icons/fa6";
import { FaCircleInfo } from "react-icons/fa6";
import "../styles/Banner.css"

type BannerProps = React.HTMLAttributes<HTMLDivElement> & {
    variant?: "multiLine" | "singleLine",
    status?: "success" | "warning" | "error" | "info",
    title?: string,
    body?: string,
}

export default function Banner({variant = "multiLine" , status = "success", className  , title , body , ...props}:BannerProps):JSX.Element{
    
    if(variant === "multiLine"){
        const classes = `banner-content banner-${status} multi-line ${className || ''}`
        return(
            <>
                {
                    status === "success" &&  
                    <div className={classes} {...props}>
                        <div className="icon-container">
                            <FaCircleCheck style={{color:  "#34D399"}} /> 
                        </div>
                        <div className="body-title">
                            <span className="banner-title">{title ? title : "Congratulations"}</span>
                            <p className="banner-parag">{body ? body : "lore ipsum dolor sit amet ."}</p>
                            {props.children ? <div className="children-container">{props.children}</div> : null}
                        </div>
                    </div> 
                }

                {
                    status === "warning" &&  
                    <div className={classes} {...props}>
                        <div className="icon-container">
                            <BsFillExclamationTriangleFill style={{color:  "#FBBF24"}} />
                        </div>
                        <div className="body-title">
                            <span className="banner-title">{title ? title : "Warning"}</span>
                            <p className="banner-parag">{body ? body : "lore ipsum dolor sit amet ."}</p>
                            {props.children ? <div className="children-container">{props.children}</div> : null}
                        </div>
                    </div>
                }

                {
                    status === "error" &&  
                    <div className={classes} {...props}>
                        <div className="icon-container">
                            <FaCircleXmark style={{color:  "#F87171"}} />
                        </div>
                        <div className="body-title">
                            <span className="banner-title">{title ? title : "Error"}</span>
                            <p className="banner-parag">{body ? body : "lore ipsum dolor sit amet ."}</p>
                            {props.children ? <div className="children-container">{props.children}</div> : null}
                        </div>
                    </div>
                }

                {
                    status === "info" &&  
                    <div className={classes} {...props}>
                        <div className="icon-container">
                            <FaCircleInfo style={{color:  "#60A5FA"}} />
                        </div>
                        <div className="body-title">
                            <span className="banner-title">{title ? title : "Info"}</span>
                            <p className="banner-parag">{body ? body : "lore ipsum dolor sit amet ."}</p>
                            {props.children ? <div className="children-container">{props.children}</div> : null}
                        </div>
                    </div>
                }
            </>
        )
    }

    /* SINGLELINE RENDER */

    else {
        const classes = `banner-content banner-${status} single-line ${className || ''}`
        return( 
            <>
                {
                    status === "success" &&  
                    <div className={classes} {...props}>
                        <div className="icon-container">
                            <FaCircleCheck style={{color:  "#34D399"}} /> 
                        </div>
                        <div className="body-title">
                            <span className="banner-title">{title ? title : "Congratulations"}</span>
                            {props.children ? <div className="children-container">{props.children}</div> : null}
                        </div>
                    </div> 
                }

                {
                    status === "warning" &&  
                    <div className={classes} {...props}>
                        <div className="icon-container">
                            <BsFillExclamationTriangleFill style={{color:  "#FBBF24"}} />
                        </div>
                        <div className="body-title">
                            <span className="banner-title">{title ? title : "Warning"}</span>
                            {props.children ? <div className="children-container">{props.children}</div> : null}
                        </div>
                    </div>
                }

                {
                    status === "error" &&  
                    <div className={classes} {...props}>
                        <div className="icon-container">
                            <FaCircleXmark style={{color:  "#F87171"}} />
                        </div>
                        <div className="body-title">
                            <span className="banner-title">{title ? title : "Error"}</span>
                            {props.children ? <div className="children-container">{props.children}</div> : null}
                        </div>
                    </div>
                }

                {
                    status === "info" &&  
                    <div className={classes} {...props}>
                        {/* <div className="b"> */}
                            <div className="icon-container">
                                <FaCircleInfo style={{color:  "#60A5FA"}} />
                            </div>
                                
                            <div className="body-title">
                                <span className="banner-title">{title ? title : "Info"}</span>
                                {props.children ? <div className="children-container">{props.children}</div> : null}
                            </div>
                        {/* </div> */}
                        
                    </div>
                }
            </>
        )
    }
}