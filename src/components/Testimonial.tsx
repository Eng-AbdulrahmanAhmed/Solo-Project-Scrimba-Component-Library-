import React from "react"
import heroImg from "../assets/hero.png"

type TestimonialProps = React.HTMLAttributes<HTMLDivElement> & { 
    img?:string,
}

export default function Testimonial({img , children , ...props}: TestimonialProps){
    return(
        <div className="Testimonial-container" {...props}>
            <div className="testimonial-image-container">
                {/* if image is provided take the src if not use default image */}
                {<img src={img ? img : heroImg} alt="Testimonial" />}
            </div>
            <div className="testimonial-content-container">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. </p>
                <span>May Andersons</span>
                <span>Workcation, CTO</span>
            </div>
        </div>
    
    )
}