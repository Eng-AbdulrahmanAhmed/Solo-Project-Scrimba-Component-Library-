import { useState, type JSX } from 'react'
import Badge from "./components/Badge"
import Banner from "./components/Banner"
import Card from "./components/Card"
import Testimonial from "./components/Testimonial"
import reactLogo from './assets/react.svg'

import './App.css' 

function App():JSX.Element {
  return (
    <>
      <h1>Badge</h1>
      <div className="badge-container">
        <div className="squares">
        <span className="title">Square</span>
          <Badge type="square" color="gray">Badge</Badge> 
          <Badge type="square" color="red">Badge</Badge>
          <Badge type="square" color="yellow">Badge</Badge>
          <Badge type="square" color="green">Badge</Badge>
          <Badge type="square" color="blue">Badge</Badge>
          <Badge type="square" color="indigo">Badge</Badge>
          <Badge type="square" color="purple">Badge</Badge>
          <Badge type="square" color="pink">Badge</Badge>
        </div>  
        <div className="pills">
        <span className="title">Pill</span>
          <Badge type="pill" color="gray">Badge</Badge>
          <Badge type="pill" color="red">Badge</Badge>
          <Badge type="pill" color="yellow">Badge</Badge>
          <Badge type="pill" color="green">Badge</Badge>
          <Badge type="pill" color="blue">Badge</Badge>
          <Badge type="pill" color="indigo">Badge</Badge>
          <Badge type="pill" color="purple">Badge</Badge>
          <Badge type="pill" color="pink">Badge</Badge>
        </div>
      </div>
      <h1>Banner</h1>
      <div className="banner-container">
        <h2 className="banner-type-title">Multi Line</h2>
        <div className="banner-type-container">
          <span className="title">success</span>
          <Banner variant="multiLine" status="success" title="Success" body="Your changes have been saved successfully." ></Banner>
        </div>
        <div className="banner-type-container"> 
          <span className="title">warning</span>
          <Banner variant="multiLine" status="warning" title="Warning" body="You have a warning." ></Banner>
        </div>
        <div className="banner-type-container">
          <span className="title">error</span>
          <Banner variant="multiLine" status="error" title="Error" body="An error occurred while saving your changes." ></Banner>
        </div>
        <div className="banner-type-container">
          <span className="title">info</span>
          <Banner variant="multiLine" status="info" title="info" body="This is a info message." ></Banner>
        </div>
        <h2 className="banner-type-title">Single Line</h2>
        <div className="banner-type-container">
          <span className="title">success</span>
          <Banner variant="singleLine" status="success" ></Banner>
        </div>
        <div className="banner-type-container">
          <span className="title">warning</span>
          <Banner variant="singleLine" status="warning" ></Banner>
        </div>
        <div className="banner-type-container">
          <span className="title">error</span>
          <Banner variant="singleLine" status="error" ></Banner>
        </div>
        <div className="banner-type-container">
          <span className="title">info</span>
          <Banner variant="singleLine" status="info" ></Banner>
        </div>
      </div>
      <h1>Card</h1>
      <div className="card-container">
        <Card icon="src/assets/react.svg"/>
        <Card />
      </div>
      <h1>Testimonial</h1>
      <Testimonial img={reactLogo}/>
      <Testimonial />
    </>
  )
}

export default App
