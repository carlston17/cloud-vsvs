import React, { Component } from 'react';
import {withRouter} from 'react-router';
import Timeslot from './timeSlot.js';
import * as $ from "jquery/src/ajax";

const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

firebase.initializeApp({
  apiKey: "AIzaSyAMcqmIvLgrC4gfVO6p06buBYSgD680eB0",
  authDomain: "finalcloudcomp.firebaseapp.com",
  projectId: "finalcloudcomp"
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

class Schedule extends Component {

    constructor(props){
        super(props);
        this.state = {
            timeSlots: [],
            days: ['Mo', 'Tu', 'We', 'Th', 'Fr'],
            hours: ['7', '8', '9', '10', '11', '12', '1', '2', '3', '4'],
            times: [':00', ':15', ':30', ':45'],
            form: this.props.form
        }

        this.state.days.forEach((day) => {
            this.state.hours.forEach ((hour) => {
                this.state.times.forEach ((time) => {
                    this.state.timeSlots.push({
                        status: false,
                        id: `${day}: ${hour}${time}`,
                        time: `${hour}${time}`,
                        day: day
                    })
                })
            })
        })

        this.changeSlot = this.changeSlot.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    onSubmit(ev) {
        ev.preventDefault();
        let data = this.props.cb();
        data['timeData'] = this.state.timeSlots;
        if(this.state.form === "individual"){
            db.collection('applicants').doc(data.general.email).set(data)
            console.log ('Posted Individual App');
        } else {
            //db.collection('partners').doc(data.partners[0].email).set(data);
            var ref = db.collection('applicants').doc(data.partners[0].email);
            ref.get().then(function(doc) {
            if (doc.exists) {
                console.log("Document data:", doc.data());
                db.collection('applicants').doc(data.partners[0].email).collection('partners').doc(data.partners[0].email).set(data);
            } else {
                alert("Must Create an Individual Application before you submit a Partner application");
            }
            }).catch(function(error) {
            console.log("Error getting document:", error);
            });
            console.log ('Posted Partner App');
        }
    }

    changeSlot(id, day){
        let index;
        for (let i = 0; i < this.state.timeSlots.length; i ++){
            if (this.state.timeSlots[i].id === id && this.state.timeSlots[i].day === day){
                index = i;
                break;
            }
        }
        this.state.timeSlots[index].status = !(this.state.timeSlots[index].status);
    }

    render() {
        let schedule = [];
        let row = [];
        let key = 0;
        this.state.hours.forEach((hour) => {
            this.state.times.forEach((time) => {
                this.state.days.forEach((day) => {
                    let index;
                    for (let i = 0; i < this.state.timeSlots.length; i ++){
                        if (this.state.timeSlots[i].time === `${hour}${time}` && this.state.timeSlots[i].day === day){
                            index = this.state.timeSlots[i];
                            break;
                        }
                    }
                    let temp = <Timeslot cb={this.changeSlot} time={index.time} status={index.status} id={index.id} day={index.day} key={key} />
                    row.push(temp);
                    key ++;
                })
                schedule.push(<tr key = {key}>{row}</tr>);
                key++
                row = [];
            })
        })

        schedule = <tbody>{schedule}</tbody>;

        return <div className="row">
            <div className="col-xs-12 text-center">
                <h2> Availability </h2>
                <hr/>
                <p>
                    <strong> Note: </strong> Let this reflect your <strong> class/work start and end times. </strong>
                    We will account for the travel time ourselves.
                </p>
                <table id="grid" className="centerAlign table-bordered">
                    <thead className = "text-center" id="tableHeader">
                    <tr className="centerAlign">
                        <th className = "text-center"> Monday </th>
                        <th className = "text-center"> Tuesday </th>
                        <th className = "text-center"> Wednesday </th>
                        <th className = "text-center"> Thursday </th>
                        <th className = "text-center"> Friday </th>
                    </tr>
                    </thead>
                    {schedule}
                </table>
            </div>

            <div className="row">
                <p> <br/> </p>
                <hr/> <hr/>
                <h2 className="text-center"> All Finished? </h2> <br/>
                <div className="centerAlign">
                    <input type="submit" value="Sign Up!" onClick={this.onSubmit}/>
                </div>
            </div>
        </div>
    }

}

export default withRouter(Schedule);

