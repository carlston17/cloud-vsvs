import React, { Component } from 'react';
import {Link, withRouter} from 'react-router';
import Schedule from './schedule.js'

class Individual extends Component {

    onSubmit(ev){
        ev.preventDefault();

    }

    render () {

        return <div className="container" >
            <div className="row">
                <div className="col-xs-2"/>
                <div className="col-xs-8 text-center" >
                    <h1>VSVS Individual Applications</h1>
                    <p>
                        <strong>What do VSVS members do? </strong> Each member joins a team of 3-4 volunteers.  Each team will teach four constructor
                        <strong> different</strong> lessons in the
                        <strong> same</strong> classroom.  The classrooms are off-campus and the lessons last 50 - 60 minutes.
                        Allow 25 minutes for travel each way.  For more information please attend
                        <strong> one</strong> of the following informational meetings.
                    </p>
                    <br/>
                    <p>
                        <strong> You will need at least a 2.5 hour block of free time. </strong>  Lessons
                        <strong> start </strong> at various times from 8:00 a.m. to 2.45 p.m. Monday - Friday
                        and end at 3:45 p.m. at the latest.
                        <br/>
                        <u> Slots after 3pm and on Fridays are generally scarce.</u>
                    </p>
                    <br/>
                    <p className = "col-xs-2"/>
                    <p className = "col-xs-8">
                        <strong>Important Note: </strong> Everyone must complete the Protection of Minors
                        module (even if you have already completed it in the previous years) in order
                        to participate in VSVS. Search for the module here: <strong> <a href="https://learningexchange.ea.vanderbilt.edu"> Link </a> </strong>

                        <br/>
                        <br/>
                        <strong> Submit the certificate PDF to this Google form:
                             <a href="https://goo.gl/forms/rEfRh2rwyIJigHot2"> Link </a>
                        </strong>
                    </p>

                </div>
                <form id="individual_form" className="form-horizontal" method="post" onSubmit={this.onSubmit}>
                    <div className="row">
                        <div className="col-xs-3"/>
                        <div className="col-xs-6">
                            <h2 className = "text-center">General Information</h2>
                            <table className="table table-bordered table-striped">
                                <tbody>
                                <tr>
                                    <td>First Name</td>
                                    <td><input type="text" id="first_name" name="first_name"/></td>
                                </tr>
                                <tr>
                                    <td>Last Name</td>
                                    <td><input type="text" id="last_name" name="last_name"/></td>
                                </tr>
                                <tr>
                                    <td>Phone Number</td>
                                    <td><input type="text" id="phone" name="phone" placeholder="10-digit number"/></td>
                                </tr>
                                <tr>
                                    <td>Email Address</td>
                                    <td><input type="email" id="email" name="email" placeholder="@vanderbilt.edu"/></td>
                                </tr>
                                <tr>
                                    <td>School</td>
                                    <td><select id="school" name="school">
                                        <option defaultValue> School</option>
                                        <option value="A&S"> A&S</option>
                                        <option value="Blair"> Blair</option>
                                        <option value="Engineering"> Engineering</option>
                                        <option value="Medical"> Medical</option>
                                        <option value="Peabody"> Peabody</option>
                                    </select></td>
                                </tr>
                                <tr>
                                    <td>Year</td>
                                    <td><select id="year" name="year">
                                        <option defaultValue> Year (Class of)</option>
                                        <option value="Freshman"> Freshman ('22)</option>
                                        <option value="Sophmore"> Sophmore ('21)</option>
                                        <option value="Junior"> Junior ('20)</option>
                                        <option value="Senior"> Senior ('19)</option>
                                    </select></td>
                                </tr>
                                <tr>
                                    <td>Major</td>
                                    <td><input type="text" id="major" name="major"/></td>
                                </tr>
                                <tr>
                                    <td> Preferences</td>
                                    <td><textarea type="text" id="preferences" name="preferences"
                                                  placeholder="Day of week, teacher, school, etc."/></td>
                                </tr>
                                <tr>
                                    <td>Interested in Teaching Robotics?
                                        <br/> (Placement in a Robotics
                                        <br/> Group not guaranteed)
                                    </td>
                                    <td>
                                        <label className = "radio-inline">
                                            <input type= "radio" name="robotics" value = "0" defaultChecked = "true"/>
                                            No
                                        </label>

                                        <label className = "radio-inline">
                                            <input type= "radio" name="robotics" value = "1"/>
                                            Yes
                                        </label>
                                    </td>
                                </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-3"/>
                        <div className="col-xs-6">
                            <h2 className="text-center"> Team Leader Interest </h2>

                            <div className="row">
                                <div className="col-xs-4 text-center">
                                    <br/> <br/>
                                    <strong> Responsibilities Include: </strong>

                                </div>
                                <div className="col-xs-8">
                                    <ul>
                                        <li> Attending 2 hour team leader training</li>
                                        <li> Teaching the lessons to your team</li>
                                        <li> Making sure your kit is picked up</li>
                                        <li> Coordinating team travel to the school</li>
                                        <li> Contacting your team and your teacher in the event of a cancellation</li>
                                    </ul>
                                </div>
                            </div>
                            <table className="table table-bordered table-striped text-center">
                                <tbody>
                                    <tr>
                                        <td className = "col-xs-10"> Have you been a member of VSVS before? </td>
                                        <td className = "text-center">
                                            <label className = "radio-inline">
                                                <input type= "radio" name="previous_member" value = "0" defaultChecked = "true"/>
                                                No
                                            </label>

                                            <br/>

                                            <label className = "radio-inline">
                                                <input type= "radio" name="previous_member" value = "1"/>
                                                Yes
                                            </label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className = "col-xs-10"> Are you interested in being a team leader? </td>
                                        <td className = "text-center">
                                            <label className = "radio-inline">
                                                <input type= "radio" name="interest_leader" value = "0" defaultChecked = "true"/>
                                                No
                                            </label>

                                            <br/>

                                            <label className = "radio-inline">
                                                <input type= "radio" name="interest_leader" value = "1"/>
                                                Yes
                                            </label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className = "col-xs-10"> Have you been a team leader before? </td>
                                        <td className = "text-center">
                                            <label className = "radio-inline">
                                                <input type= "radio" name="previous_leader" value = "0" defaultChecked = "true"/>
                                                No
                                            </label>

                                            <br/>

                                            <label className = "radio-inline">
                                                <input type= "radio" name="previous_leader" value = "1"/>
                                                Yes
                                            </label>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-3" />
                        <div className="col-xs-6 text-center" >
                            <h2> Transportation </h2>
                            <table className="table table-bordered table-striped">
                                <tbody>
                                    <tr>
                                        <td>
                                            Do you have a car or access to an OACS car and
                                            would be willing to drive your team to and from
                                            the school? Every year, VSVS is limited only by the
                                            number of drivers we have available.  If you have a
                                            car, we would appreciate it if you would volunteer to drive!
                                            <br/>
                                            Most schools are within 10 minutes of campus. <br/>
                                            <br/>
                                            VSVS is also willing to pay for 1-day passes (x4 classroom
                                            visits per semester) for parking in the 25th Ave garage so
                                            that students who live off-campus, but do not commute to
                                            Vanderbilt by car, can be a team driver.
                                        </td>
                                        <td>
                                            <br/> <br/> <br/>
                                            <label className = "radio-inline">
                                                <input type= "radio" name="drive" value = "0" defaultChecked = "true"/>
                                                No
                                            </label>

                                            <br/>

                                            <label className = "radio-inline">
                                                <input type= "radio" name="drive" value = "1"/>
                                                Yes
                                            </label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            How many other passengers can you take?
                                        </td>
                                        <td>
                                            <select  id="passengers" name="passengers">
                                                <option value defaultValue> N/A </option>
                                                <option value = "1"> 1 </option>
                                                <option value = "2"> 2 </option>
                                                <option value = "3"> 3 </option>
                                                <option value = "4"> 4 </option>
                                                <option value = "5"> 5 </option>
                                                <option value = "6"> 6 </option>
                                                <option value = "7"> 7 </option>
                                            </select>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-2"/>
                        <div className="col-xs-8">
                            <Schedule/>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <h2 className="text-center"> All Finished? </h2> <br/>
                        <div className="centerAlign">
                            <input type="submit" value="Sign Up!"/>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    }}


export default withRouter(Individual);
