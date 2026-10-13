import type React from "react"
import "../styles/Card.css"
import { FaSmile } from "react-icons/fa";
import type { JSX } from "react";

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
    icon?:string,
    body?:string
}

export default function Card({ icon ,body , ...props}: CardProps):JSX.Element{
    return(
        <>
            <div className="card" {...props}>
                <div className="card-icon-container">      
                    {icon ? <img className="card-image" src={icon} alt="Card icon" /> : <FaSmile className="card-icon card-image"/>}
                </div>
                <h1 className="card-title">Card Title</h1>
                {body ? <p className="card-body">{body}</p> : <p className="card-body">Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</p>}
            </div>
        </>
    )
}