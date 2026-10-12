import React from "react"
import heroImg from "../assets/hero.png"

type TestimonialProps ={
    img?:string,
}

export default function Testimonial(TestimonialProps: TestimonialProps){
    return(
        <div>
            <div className="Testimonial-container">
                {/* if image is provided take the src if not use default image */}
                {<img src={TestimonialProps.img ? TestimonialProps.img : heroImg} alt="Testimonial" />}
            </div>
        </div>
    )
}