import React from "react"
// import heroImg from "../assets/hero.png"
import reactLogo from "../assets/react.svg"
import workCation from "../assets/image.png"
import "../styles/Testimonial.css"
type TestimonialProps = React.HTMLAttributes<HTMLDivElement> & { 
    img?:string,
    icon?:string,
}

export default function Testimonial({img  , icon , children , ...props}: TestimonialProps){
    if(img) {
        // const classes = `testimonial-container ${img ? "testimonial-with-image" : " "}`
        return(
            <div className={`testimonial-container testimonial-with-image` } {...props}>
                <img src={img} alt="Testimonial" className="testimonial-image" />
                <div className="testimonial-content-container with-image-content">
                    <p>“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”</p>
                    <div className="span-container">
                        <span>May Andersons</span>
                        <span>Workcation, CTO</span>
                    </div>
                </div>
            </div>
        )
    }
    else {
        const iconSrc = icon ? icon : reactLogo
        return(
            <div className={`testimonial-container testimonial-no-image`} {...props}>
                <div className="testimonial-content-container no-image-content">
                <img src={iconSrc} alt="Icon"  className="testimonial-icon"/> 
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. </p>
                    <div className="span-container">
                        <span>May Andersons</span>
                        <span>Workcation, CTO</span>
                    </div>
                </div>
            </div>
        )
    }
        
}