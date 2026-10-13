import React from "react"
// import heroImg from "../assets/hero.png"
import "../styles/Testimonial.css"
type TestimonialProps = React.HTMLAttributes<HTMLDivElement> & { 
    img?:string,
}

export default function Testimonial({img , children , ...props}: TestimonialProps){
    const classes = `testimonial-container ${img ? "testimonial-with-image" : " "}`
    return(
        <div className={classes} {...props}>
            {img &&
                    <img src={img} alt="Testimonial" />
            }
            <div className="testimonial-content-container">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. </p>
                <div className="span-container">
                    <span>May Andersons</span>
                    <span>Workcation, CTO</span>
                </div>
            </div>
        </div>
    
    )
}