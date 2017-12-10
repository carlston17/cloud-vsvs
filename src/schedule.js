import React, { Component } from 'react';
import {Link, withRouter} from 'react-router';
import Timeslot from './timeSlot.js';

class Schedule extends Component {

    constructor(props){
        super(props);
        this.state = {
            timeSlots: [],
            days: ['Mo', 'Tu', 'We', 'Th', 'Fr'],
            hours: ['7', '8', '9', '10', '11', '12', '1', '2', '3', '4'],
            times: [':00', ':15', ':30', ':45']
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

        this.onClick = this.onClick.bind(this);
        this.changeSlot = this.changeSlot.bind(this);

    }

    sendInfo(){
        return this.state.timeSlots;
    }

    onClick(ev) {
        ev.preventDefault();

        this.setState({timeDif: ev.target.id});
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

    createRows(arr){
        let rows = [];
        let row = [];
        let days = ['Mo', 'Tu', 'We', 'Th', 'Fr']
        let key = 0;

        for (let i = 0; i < arr.length; i++){
            for (let j = 0; j < 5; j++){
                let str = `${days[j]}: ${arr[i]}`;
                row.push(<Timeslot cb={this.changeSlot} week={days[j]} status={false} value={`${arr[i]}`} id ={str} key={key}/>)
                key ++;
            }
            rows.push(<tr key={key}>{row}</tr>);
            row = [];
            key++;
        }


        return <tbody>{rows}</tbody>
    }

    render() {
        let schedule = [];
        let row = [];
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
                    let temp = <Timeslot cb={this.changeSlot} time={index.time} status={index.status} id={index.id} day={index.day} />
                    row.push(temp);
                })
                schedule.push(<tr>{row}</tr>);
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
                <table className= "centerAlign">
                    <tbody>
                    {/*<tr className="text-center">*/}
                        {/*<td className="col-xs-4">*/}
                            {/*<label>*/}
                                {/*<input type="button" value="15 min" id="15" className="difSelect"*/}
                                       {/*onClick={this.onClick}/>*/}
                            {/*</label>*/}
                        {/*</td>*/}
                        {/*<td className="col-xs-4">*/}
                            {/*<label>*/}
                                {/*<input type="button" value="30 min" id="30" className="difSelect"*/}
                                       {/*onClick={this.onClick}/>*/}
                            {/*</label>*/}
                        {/*</td>*/}
                        {/*<td className="col-xs-4">*/}
                            {/*<label>*/}
                                {/*<input type="button" value="60 min" id="60" className="difSelect"*/}
                                       {/*onClick={this.onClick}/>*/}
                            {/*</label>*/}
                        {/*</td>*/}
                    {/*</tr>*/}
                    </tbody>
                </table>
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
        </div>
    }

}

export default withRouter(Schedule);

