import React, { type JSX, type ReactNode } from "react"
import "../styles/Badge.css"
type BadgeProps = React.ComponentPropsWithoutRef<'span'> & {
    type?: "square" | "pill",
    color?: "gray" | "red" | "yellow" | "green" | "blue" | "indigo" | "purple" | "pink" ,
    children?:ReactNode,
    className?:string
    // Could implement the variant prop to allow for different sizes of badges, but for now, we will keep it simple for now and just have one size.
}

export default function Badge({type = "square" , color = "gray" , children, className , ...props}:BadgeProps):JSX.Element{
    const classes = `badge badge-${type} badge-${color} ${className || ''}`
    return(
        <span className={classes} {...props}>{children}</span> 
    )
}