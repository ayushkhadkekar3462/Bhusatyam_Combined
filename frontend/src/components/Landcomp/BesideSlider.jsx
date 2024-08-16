import React from 'react'
import "../../styles/Landsearchstyles/Besidecard.css"
import { Link } from 'react-router-dom'
import "../../index.css"

export default function BesideSlider() {
  return (
    <>
     <div className="besidecard">
        <div className="title">Buy land near you</div>
        <div className="content">Search land and lifestyle real estate including homes with land, vacant land, rural property, commercial lots, and more.</div>
        <Link to="/Component"><button className="besidesliderbtn">Land for sale near me</button></Link>
     </div>
    </>
  )
}
