import React, { Component } from 'react';
import {Link, withRouter} from 'react-router';
import Schedule from './schedule.js'
import * as $ from "jquery";


class Partner extends Component {

    constructor(props){
        super(props);
    }

    onSubmit(ev){
        ev.preventDefault();

        // timeData - all time information retrieved from schedule
        // all times are in 15 minute chunks
        // represented as an array of objects with four fields
        //      status - true = selected as free time
        //      day - day of the week (Mo, Tu, We, Th, Fr)
        //      time - time of day (ex. 7:45)
        //      id - combination string of day and time
        //          format: {day}: {time}
        let timeData = this.refs.schedule.sendInfo();

        let partners = [];

        for (let i = 1; i < 5; i ++){
            let tStrF = `first_name_${i}`;
            let tStrL = `last_name_${i}`;
            let first = document.getElementById(tStrF);
            let last = document.getElementById(tStrL);

            if (first.length > 2 && last.length > 2){
                let temp = {
                    first: first,
                    last: last
                }
                partners.push(temp);
            }
        }

        // Submit Data
        //      partners - array of objects with two fields, first and last
        //      preferences - string
        //      times - array of time data (described above)
        let data = {
            partners: partners,
            preferences: document.getElementById('preferences'),
            times: timeData
        }

        $.ajax({
            url: "/v1/game",
            method: "post",
            data: data
        }).then(() => {
            this.props.history.push(`/`);
        }).fail(err => {
            let errorEl = document.getElementById('errorMsg');
            errorEl.innerHTML = `Error: ${err.response}`;
        });

    }

    render(){
        return <div className="container">
            <div className="row">
                <div className="col-xs-2"/>
                <div className="col-xs-8 text-center">
                    <h1>VSVS Partner Application</h1> <hr/>
                    <p>
                        Below, enter the names of up to four people (including yourself) with whom you want to volunteer.
                        <strong> Each partner must first complete an individual form. </strong>
                        Submit <strong> only one </strong> partner form per group.
                    </p>
                    <br/>
                    <p>
                        <strong> You will need at least a 2.5 hour block of free time. </strong> Slots between 11:00 a.m. and 1:00 p.m.
                        and slots after 3:00 p.m. are generally scarce and will be filled on a first-come-first-serve basis. Lessons
                        <strong> start </strong> at various times from 8:00 a.m. to 2:45 p.m. Monday - Friday and end at 3:45 p.m. at the latest.
                    </p>
                </div>
                <div className ="col-xs-2"/>
            </div>
            <hr/>
            <h3 className="text-center" id='errorMsg'/>
            <form id="partner_form" className="form-horizontal" method="post" onSubmit={this.onSubmit}>
                <div className="col-xs-2"/>
                <div className = "col-xs-8">
                    <div className = "row text-center"> <h2> Applicants </h2> </div>
                    <table id="partner_names" className= "table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th/>
                                <th> First Name </th>
                                <th> Last Name </th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td className = "col-xs-2"> You</td>
                            <td className = "col-xs-5">
                                <input type="text" id="first_name_1"/>
                            </td>
                            <td className = "col-xs-5">
                                <input type="text" id="last_name_1"/>
                            </td>
                        </tr>
                        <tr>
                            <td className = "col-xs-2"> Partner 1</td>
                            <td >
                                <input type="text" id="first_name_2"/>
                            </td>
                            <td >
                                <input type="text" id="last_name_2"/>
                            </td>
                        </tr>
                        <tr>
                            <td className = "col-xs-2"> Partner 2</td>
                            <td >
                                <input  type="text" id="first_name_3"/>
                            </td>
                            <td>
                                <input  type="text" id="last_name_3"/>
                            </td>
                        </tr>
                        <tr>
                            <td className = "col-xs-2"> Partner 3</td>
                            <td>
                                <input type="text" id="first_name_4"/>
                            </td>
                            <td>
                                <input type="text" id="last_name_4"/>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <table id="preferences" className= "table table-bordered">
                        <tbody>
                            <tr>
                                <td className = "col-xs-3"> Preferences </td>
                                <td className = "col-xs-9"> <textarea id="preferences"/> </td>
                            </tr>
                        </tbody>
                    </table>
                    <hr/>
                    <div className = "centerAlign">
                        <Schedule ref="schedule"/>
                    </div>
                    <hr/>
                    <h2 className="text-center"> All Finished? </h2> <br/>
                    <div className="centerAlign">
                        <input type = "submit" value= "Sign Up!" className= "col-xs-offset-4 col-xs-4" />
                    </div>
                </div>
            </form>
        </div>
    }
}

export default withRouter(Partner);