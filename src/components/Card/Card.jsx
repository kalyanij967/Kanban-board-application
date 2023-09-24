import React from 'react'
import { BsExclamationSquareFill } from "react-icons/bs";

import './Card.css';

const Card = ({id, title, tag, status}) => {
  return (
    <div className="cardContainer flex-gap-20" style={{gap : '5px'}}>
        <div className="cardHeading flex-sb">
            <span style={{textTransform : "uppercase"}} className='color-grey'>{id}</span>
            <br />
            <div className="imageContainer relative" style={{ width : "30px", height : "30px"}}>
                <img style={{width : "100%", height : "100%",  borderRadius : "50%" }}  src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg" alt="UserImage" />
                <div className="showStatus"></div>
            </div>
        </div>
        <div className="cardTitle" style={{fontWeight : 200}} >
            <p>{title}</p>
            <br />
        </div>
        <div className="cardTags">
        <div className="tags color-grey"><BsExclamationSquareFill/></div>
            {
                tag?.map((elem, index) => {
                    return <div key={index} className="tags color-grey"> <span>•</span> {elem}</div>
                })
            }
        </div>
    </div>
  )
}

export default Card;