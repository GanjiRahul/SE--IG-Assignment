import React, { useState} from 'react';
// import React, { useState, useEffect } from 'react';
// import React from 'react';
import userData from '../file/userInfo';
import arrayChunk from './arrayChunk';

function ContactDetails() {
    console.log('userData :', userData, userData.length);
    const contentData = arrayChunk(userData, 3);
    console.log('contentData :', contentData);

    const [name, setName] = useState("");
    const [istrue, setIsTrue] = useState(false);
    const [isReveal, setIsReveal] = useState(false);
    const [jobTitle,setJobTitle] = useState("");
    const [uidBtn,setUidBtn] = useState("");

    function handleInputChange(e){
       console.log('handleOnChange :', e.target.value);
       setIsTrue(true);
       setName(e.target.value);
       setJobTitle(e.target.value);
    }

    function onRevealClick(e){
        console.log('OnRevealClick : ',e.target.value);
        setUidBtn(e.target.value);
        setIsReveal(true);
    }

    const rows = arrayChunk(userData, 3);
    return (
        <div className="container">
            <div className="accountTitle">IG Contact List</div>
            <div className="contactDetails">
                <div className="conDetailTitle"> Contacts({userData.length}) </div>
                <div className="accBtns">
                    <input className="searchInput" type="text" placeholder="Search by name , job title"
                        onChange={handleInputChange} />
                    <button className="filterBtn"><i className="fa fa-filter" aria-hidden="true"></i></button>
                    <button className="accBtn"><i className="far fa-edit"></i>Feedback</button>
                </div>
            </div>

            <div className="contactInfo">{
                rows.map((row, i) => (
                    <div className="row" key={i}>
                        {
                            row.map((col, i) => (
                                    istrue && (name !== "" || jobTitle !== "") 
                                    ? col.name === name || col.employment === jobTitle 
                                    ? <div className="empDetails" key={i} id={col.uniqueId} >
                                    <img src={col.profile} alt="userImg" className="userImg" />
                                    <div className="userInfo">
                                        <p className="userName"> {col.name}</p>
                                        <p className="employment"><i className="fa fa-briefcase" aria-hidden="true"></i> {col.employment}</p>
                                        <p className={isReveal && col.uniqueId === uidBtn ?"emailId":"hideOn"}><i className="fa fa-envelope" aria-hidden="true"></i> {isReveal && col.uniqueId === uidBtn ? col.emailId :''}</p>
                                        <p className={isReveal && col.uniqueId === uidBtn ?"cellNo":"hideOn"}><i className="fa fa-phone" aria-hidden="true"></i> - {isReveal && col.uniqueId === uidBtn ? col.phoneNo:''}</p>
                                        <button className={isReveal && col.uniqueId === uidBtn ?"hideRevealBtn":"revealBtn"} id={col.uniqueId} value={col.uniqueId} onClick={ onRevealClick}><i className="fa fa-unlock-alt" aria-hidden="true"></i>{isReveal && col.uniqueId === uidBtn ? " " : "Reveal"}</button>
                                    </div>
                                    {
                                    isReveal && col.uniqueId === uidBtn ?
                                    <div className="popupIcons">
                                        <div className="icon icon-plus">
                                            <span className="name"></span>
                                        </div>
                                        <div className="linkedInImg">
                                            <img src={col.linkedInProfile} alt="linkedInImg" />
                                        </div>
                                    </div>
                                    :""
                                    }
                                </div>
                                :' '
                                //
                                :
                                <div className="empDetails" key={i} id={col.uniqueId}>
                                    <img src={col.profile} alt="userImg" className="userImg" />
                                    <div className="userInfo" >
                                        <p className="userName"> {col.name}</p>
                                        <p className="employment"><i className="fa fa-briefcase" aria-hidden="true"></i> {col.employment}</p>
                                        <p  className={isReveal && col.uniqueId === uidBtn ? "emailId": "hideOn"}><i className="fa fa-envelope" aria-hidden="true"></i> {isReveal && col.uniqueId === uidBtn ? col.emailId :''}</p>
                                        <p  className={isReveal && col.uniqueId === uidBtn ? "cellNo": "hideOn"}><i className="fa fa-phone" aria-hidden="true"></i> - {isReveal && col.uniqueId === uidBtn ? col.phoneNo:''}</p>
                                        <button className={isReveal && col.uniqueId === uidBtn ? "hideRevealBtn" : "revealBtn"} id={col.uniqueId} value={col.uniqueId} onClick={onRevealClick}><i className="fa fa-unlock-alt" aria-hidden="true"></i> {isReveal && col.uniqueId === uidBtn ?" ":"Reveal"}</button>
                                    </div>
                                    {
                                    isReveal && col.uniqueId === uidBtn ?
                                    <div className="popupIcons">
                                        <div className="icon icon-plus">
                                            <span className="name"></span>
                                        </div>
                                        <div className="linkedInImg">
                                            <img src={col.linkedInProfile} alt="linkedInImg" />
                                        </div>
                                    </div>
                                    :""
                                    }
                                </div>
                                //
                            ))
                        }
                    </div>
                ))
            }
            </div>
        </div>
    );

} export default ContactDetails;