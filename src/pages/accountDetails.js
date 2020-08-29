import React from 'react';
import accountData from '../file/accountInfo';
import linkedIn from '../../src/img/linkedIn.jpg';
import companyImage from '../../src/img/AbbLogo.png';

function  AccountDetails (){
        return(
            // <div className="container">
            //     <div className="accountTitle">IG Account Details</div>
            //     <div className="accountDetails">
            //      <div className="accDetailTitle"> AccountDetails </div>
            //      <div className="accBtns">
            //      <button className="accBtn"><i class="fa fa-retweet" aria-hidden="true"></i>Update</button>
            //      <button className="accBtn"><i class="far fa-edit"></i>Feedback</button>
            //      </div>
            //     </div>
            //     <div className="companyDetails">
            //         <div className="companyHeading">
            //             <div className="companyImg">
            //                 <img src={companyImage} alt="companyImage" width="50" height="50" />
            //             </div>
            //          <div className="companyTitle">
            //              <p className="companyName">ABB Pvt Ltd <span><img src={linkedIn} alt="linkedInImg" width="20" height="20"/></span></p>
            //              <p className="companyAdd">React makes it painless to create interactive UIs</p>
            //          </div>
            //         <div className="companyPhNo">
            //             <p className="phNoTitle">Social Abb</p>
            //             <p className="phNo">7858585225</p>
            //         </div>
            //         </div>
            //     </div>
            //     <div className="companyInfo">
            //         <form>
            //             <div className="row">
            //                 <div className="col-xs-6 form-group inputDiv">
            //                     <input  readOnly type="text" placeholder="Company Name"/>
            //                 </div>
            //                 <div className="col-xs-6 form-group inputDiv">
            //                     <input  readOnly type="text" placeholder="Primary Industry"/>
            //                 </div>
            //             </div>
            //             <div className="row">
            //                 <div className="col-xs-6 form-group inputDiv">
            //                     <input  readOnly type="text" placeholder="Address"/>
            //                 </div>
            //                 <div className="col-xs-6 form-group inputDiv">
            //                     <input  readOnly type="number" placeholder="Revenue"/>
            //                 </div>
            //             </div>
            //             <div className="row">
            //                 <div className="col-xs-6 form-group inputDiv">
            //                     <input  readOnly type="number" placeholder="Phone"/>
            //                 </div>
            //                 <div className="col-xs-6 form-group inputDiv">
            //                     <input  readOnly type="text" placeholder="Employee Size"/>
            //                 </div>
            //             </div>
            //             <div className="row">
            //                 <div className="col-xs-6 form-group inputDiv">
            //                     <input  readOnly type="text" placeholder="Website"/>
            //                 </div>
            //                 <div className="col-xs-6 form-group inputDiv">
            //                     <input  readOnly type="text" placeholder="SIC" />
            //                 </div>
            //             </div>
            //             <div className="row">
            //                 <div className="col-xs-6 form-group inputDiv">
            //                     <input  readOnly type="text" placeholder="Ownweship"/>
            //                 </div>
            //                 <div className="col-xs-6 form-group inputDiv">
            //                     <input  readOnly type="text" placeholder="NAICS"/>
            //                 </div>
            //             </div>
            //             <div className="row">
            //                 <div className="col-xs-6 form-group inputDiv">
            //                     <input  readOnly type="text" placeholder="LinkedIn Url"/>
            //                 </div>
            //                 <div className="col-xs-6 form-group inputDiv">
            //                     <input  readOnly type="text" placeholder="All Industry"/>
            //                 </div>
            //             </div>
            //             <div className="row">
            //                 <div className="col-xs-6 form-group inputDiv">
            //                     <input  readOnly type="text" placeholder="Parent Company"/>
            //                 </div>
            //                 <div className="col-xs-6 form-group inputDiv">
            //                     <input  readOnly type="text" placeholder="ALL SIC"/>
            //                 </div>
            //             </div>
            //         </form>
            //     </div>
            // </div>
            <div className="container">
                <div className="accountTitle">IG Account Details</div>
                <div className="accountDetails">
                 <div className="accDetailTitle"> AccountDetails </div>
                 <div className="accBtns">
                 <button className="accBtn"><i class="fa fa-retweet" aria-hidden="true"></i>Update</button>
                 <button className="accBtn"><i class="far fa-edit"></i>Feedback</button>
                 </div>
                </div>
                <div className="companyDetails">
                    <div className="companyHeading">
                        <div className="companyImg">
                            <img src={companyImage} alt="companyImage" width="50" height="50" />
                        </div>
                     <div className="companyTitle">
                         <p className="companyName">{accountData[0].companyName}<span className="spanLinkedIn"><img src={linkedIn} alt="linkedInImg" width="20" height="20"/></span></p>
                        <p className="companyAdd">{accountData[0].address}</p>
                     </div>
                    <div className="companyPhNo">
                        <p className="phNoTitle">Social Abb</p>
                        <p className="phNo">7858585225</p>
                    </div>
                    </div>
                </div>
                <div className="companyInfo">
                    <form>
                        <div className="row">
                            <div className="col-xs-6 form-group inputDiv">
                                <input value={accountData[0].companyName}  readOnly type="text" placeholder="Company Name"/>
                            </div>
                            <div className="col-xs-6 form-group inputDiv">
                                <input value={accountData[0].industryType} readOnly type="text" placeholder="Primary Industry"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-6 form-group inputDiv">
                                <input  value={accountData[0].address} readOnly type="text" placeholder="Address"/>
                            </div>
                            <div className="col-xs-6 form-group inputDiv">
                                <input value={accountData[0].revenue} readOnly type="text" placeholder="Revenue"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-6 form-group inputDiv">
                                <input value={accountData[0].phoneNo} readOnly type="number" placeholder="Phone"/>
                            </div>
                            <div className="col-xs-6 form-group inputDiv">
                                <input value={accountData[0].employeeSize} readOnly type="text" placeholder="Employee Size"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-6 form-group inputDiv">
                                <input value={accountData[0].website} readOnly type="text" placeholder="Website"/>
                            </div>
                            <div className="col-xs-6 form-group inputDiv">
                                <input value={accountData[0].SIC} readOnly type="text" placeholder="SIC" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-6 form-group inputDiv">
                                <input value={accountData[0].owenership} readOnly type="text" placeholder="Ownweship"/>
                            </div>
                            <div className="col-xs-6 form-group inputDiv">
                                <input value={accountData[0].NAICS} readOnly type="text" placeholder="NAICS"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-6 form-group inputDiv">
                                <input value={accountData[0].linkedInUrl}  readOnly type="text" placeholder="LinkedIn Url"/>
                            </div>
                            <div className="col-xs-6 form-group inputDiv">
                                <input value={accountData[0].AllIndustry}  readOnly type="text" placeholder="All Industry"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-6 form-group inputDiv">
                                <input value={accountData[0].parentCompany} readOnly type="text" placeholder="Parent Company"/>
                            </div>
                            <div className="col-xs-6 form-group inputDiv">
                                <input value={accountData[0].AllSIC}  readOnly type="text" placeholder="ALL SIC"/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );

}export default AccountDetails;