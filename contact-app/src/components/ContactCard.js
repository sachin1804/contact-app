import React from "react";
import contact from "../images/contact.png"
import "./style.css"

const ContactCard = (props) => {
    const {id, Name, Email} = props.contact;
    return (
        <div className="item">
            <img className="ui avatar image" src = {contact} alt="user" />
            <div className="content">
                <div className="header">{Name}</div>
                <div>{Email}</div>
            </div>
            <i className="trash alternate outline icon right"
            style={{color: "red", marginTop:"7px"}}
            ></i>
        </div>
    )
}

export default ContactCard;