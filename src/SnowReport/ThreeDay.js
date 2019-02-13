import React from 'react';

const ThreeDay = (props) => {
    // console.log(props.snowReport, 'props.snowReport on 3day');
    const today = new Date();
    const time = today.getHours() + today.getMinutes();
    const hour = today.getHours();
    // console.log(time, 'time')
    // console.log(hour, 'hour');
    // console.log(typeof hour)
    // console.log(typeof time)
    return (

        <div>
            <div className='day-main'>
            <ul>    
                    <li>Today: </li> <br/>
                    <p>Date: {props.snowReport.Days[0].date}</p>
                    <p>High: {props.snowReport.Days[0].temp_max_f}°F</p>
                    <p>Low: {props.snowReport.Days[0].temp_min_f}°F</p>
                    <p>Total Snowfall: {props.snowReport.Days[0].snow_total_in}in</p><br/>
                    Tomorrow: <br/>
                    <li>Date: {props.snowReport.Days[1].date}</li>
                    <li>High: {props.snowReport.Days[1].temp_max_f}°F</li>
                    <li>Low: {props.snowReport.Days[1].temp_min_f}°F</li>
                    <li>Total Snowfall: {props.snowReport.Days[1].snow_total_in} inches</li><br/>
                    Day After Tomorrow: <br/>
                    <li>Date: {props.snowReport.Days[2].date}</li>
                    <li>High: {props.snowReport.Days[2].temp_max_f}°F</li>
                    <li>Low: {props.snowReport.Days[2].temp_min_f}°F</li>
                    <li>Total Snowfall: {props.snowReport.Days[2].snow_total_in} in</li><br/>
                    
                    {/* Timeframes:
                    {hour < 8 && hour > 5 ? <div>
                        <p>'8:00am ' + {props.snowReport.Days[0].Timeframes[0].time}</p>
                        <p>'11:00am' + {props.snowReport.Days[0].Timeframes[1].time}</p>
                        <p>'2:00pm' + {props.snowReport.Days[0].Timeframes[2].time}</p>
                        <p>'5:00pm' + {props.snowReport.Days[0].Timeframes[3].time}</p>
                        </div> : null}
 

                    {hour < 11 && hour > 8 ? <div>
                    
                        <p>'11:00am  ' + {props.snowReport.Days[0].Timeframes[0].time}</p>
                        <p>'2:00pm' + {props.snowReport.Days[0].Timeframes[1].time}</p>
                        <p>'5:00pm' + {props.snowReport.Days[0].Timeframes[2].time}</p>
                        </div> : null}


                    {hour < 14 && hour > 11 ? <div>
                        <p>'2:00pm' + {props.snowReport.Days[0].Timeframes[0].time}</p>
                        <p>'5:00pm' + {props.snowReport.Days[0].Timeframes[1].time}</p>
                        </div> : null}


                    {hour < 17 && hour > 14 ? <p>5:00pm {props.snowReport.Days[0].Timeframes[0].time}</p> : null} */}

            </ul>
               
            </div>
        </div>
    )
}

export default ThreeDay;