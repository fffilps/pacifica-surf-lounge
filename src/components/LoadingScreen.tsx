// import { useState } from "react";

// const LoadingScreen = () => {
//   const [visible, setVisible] = useState(true);
//   const [ofAge, setOfAge] = useState(Boolean);

//   //age verification may need to be outside of this function and on the main index since its a z over other things based on age. also would like to cache it for 3 days. 
//   const ageVerifcation = () => {
//     if (ofAge === true) {
//       setVisible(false);
//     } else {
//       // change the site to a cat google search hahaa.
//     }
//   };

//   return (
//     <div>
//       <div>
//         {visible && (
//           <div>
//             <div>Are you at least 21 years old?</div>
//             <div>
//               <div onClick={() => setOfAge(true)}>Yes</div>
//               <div onClick={() => setOfAge(false)}>No</div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default LoadingScreen;
