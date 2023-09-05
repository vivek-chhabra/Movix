// import React from "react";
// import { useSelector } from "react-redux";
// import "./Cast.scss";
// // import avatar from '../../assets/avatar.png'

// const Cast = ({ data, loading }) => {
//     const { url } = useSelector((state) => state.home); 

//     const skeleton = () => {
//         return (
//             <div className="skItem">
//                 <div className="circle skeleton"></div>
//                 <div className="row skeleton"></div>
//                 <div className="row2 skeleton"></div>
//             </div>
//         );
//     };
//     return (
//         <div className="Cast">
//             <div className="sectionHeading">Top Cast</div>
//             {!loading ? (
//                 <div className="listItems">Cast Data....</div>
//             ) : (
//                 <div className="castSkeleton">
//                     {skeleton()}
//                     {skeleton()}
//                     {skeleton()}
//                     {skeleton()}
//                     {skeleton()}
//                     {skeleton()}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Cast;
