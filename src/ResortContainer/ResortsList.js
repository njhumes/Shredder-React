// import React from 'react';
// import { Switch, Link, Route, withRouter } from 'react-router-dom'
// import TrailContainer from '../TrailContainer';

// const ResortsList = (props) => {
//     console.log(props, 'resort list props')
//     console.log(props.resorts, '.resorts');
//     const allResorts = props.resorts.map((resort) => {
//         return(
//             <Link to={`/resorts/${resort._id}`}> 
//                         <li key={resort._id}>
//                             {resort.name}<br />
//                             {resort.logo}<br />
//                             {resort.pass}<br />
//                         </li>
//             </Link>
//         )
//     })
// // write a function to pass the resort state based on which .-id is clicked
//     return(
//         <div>
//             ResortsList
//             <ul>
//                 {allResorts}
//             </ul>
//         </div>
//     )
// }

// export default withRouter(ResortsList);