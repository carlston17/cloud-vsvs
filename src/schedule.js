import React, { Component } from 'react';
import {Link, withRouter} from 'react-router';

class Schedule extends Component {

    onClick() {

    }

    createRows(arr){
        let rows = [];
        let row = [];
        for (let i = 0; i < arr.length; i++){
            for (let j = 0; j < 5; j++){
                row.push(<td>{arr[i]}</td>)
            }
            rows.push(<tr>{row}</tr>);
            row = [];
        }

        return <tbody>{rows}</tbody>
    }

    render() {

        let hours = ['7', '8', '9', '10', '11', '12', '1', '2', '3', '4'];
        let times = [':00', ':15', ':30', ':45'];

        let timeArr = [];
        hours.forEach((hour)=>{
            times.forEach((time)=>{
                let tStr = `${hour}${time}`;
                timeArr.push(tStr);
            })
        })

        let table15 = this.createRows(timeArr);

        let schedule = table15;

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
                    <tr className="text-center">
                        <td className="col-xs-3">
                            <label>
                                <input type="button" value="15 min" id="15 min"
                                       onClick={this.onClick()}/>
                            </label>
                        </td>
                        <td className="col-xs-3">
                            <label>
                                <input type="button" value="30 min" id="30 min"
                                       onClick={this.onClick()}/>
                            </label>
                        </td>
                        <td className="col-xs-3">
                            <label>
                                <input type="button" value="60 min" id="60 min"
                                       onClick={this.onClick()}/>
                            </label>
                        </td>
                        <td className="col-xs-3">
                            <label>
                                <input type="button" value=" 1 day" id="1 day"
                                       onClick={this.onClick()}/>
                            </label>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <table id="grid" onMouseUp="down=false;" className="centerAlign table-bordered">
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

