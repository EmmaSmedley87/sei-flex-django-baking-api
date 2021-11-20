// const CakesCard = () => {
//   // fetch("http://localhost:8000/api/cakes/")
//   // .then((response) => {
//   //   return response.json()
//   // }).then((json) => {
//   //   this.setState({data: json})
//   // })

//   return (
//     // <section className="cakes-card-container">
//     //   <div className="cakes-card border-solid border-black px- py-6 border-width 10px">
//     //     <div className="cakes-card-content">
//     //       <h3 className="font-light text-3xl">Cake Title</h3>
//     //     </div>
//     //     <div className="recipe-button">
//     //       <button
//     //         className="object-right bg-red-600 px-10 py-4 border-20 border-gray-200
//     //       text-white hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2
//     //       focus:ring-blue-700 focus:text-blue-700 cursor-pointer"
//     //       >
//     //         Make This Cake!
//     //       </button>
//     //     </div>
//     //   </div>
//     // </section>
//   )
// };

// export default CakesCard;

import React from "react";

const CakesCard = () => {
  return (
    <section>
      <div className="cakes-card border-solid border-black px- py-6 border-width 10px">
        <div className="cakes-card-content">
          <h3 className="font-light text-3xl">Cake Title</h3>
        </div>
      </div>
    </section>
  );
};

export default CakesCard;
