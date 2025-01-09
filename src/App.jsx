// import "./App.css";
// import Card, { Abc } from "./components/card";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import About from "./pages/about";

// const Products = [
//   {
//     id: 1,
//     title: "Mango",
//     img: "mango.jpg",
//     desc: "The mango is a tropical stone fruit and member of the drupe family.This is a type of plant food with a fleshy outer section that surrounds a shell, or pit ",
//   },
//   {
//     id: 2,
//     title: "Banana",
//     img: "banana.jpg",
//     desc: "A banana is an elongated, edible fruit – botanically a berry – produced by several kinds of large treelike herbaceous flowering plants in the genus Musa",
//   },
//   {
//     id: 3,
//     title: "Orange",
//     img: "orange.jpg",
//     desc: " The orange, also called sweet orange to distinguish it from the bitter orange (Citrus × aurantium), is the fruit of a tree in the family Rutaceae.",
//   },
//   {
//     id: 4,
//     title: "Lemon",
//     img: "lemon.jpg",
//     desc: "The lemon (Citrus × limon) is a species of small evergreen tree in the Citrus genus of the flowering plant family Rutaceae, native to Asia",
//   },
// ];
// export { Products };

// function App() {
//   return (
//     <>
//       <div className="flex">
//         {Products.map((product) => {
//           //if else condition Example

//           // if (product.id == 3) {
//           //   return (
//           //     <Card
//           //       key={product.id}
//           //       title={product.title}
//           //       img={product.img}
//           //       desc={product.desc}
//           //     />
//           //   );
//           // } else {
//           //   return <div key={product.id}>Error</div>;
//           // }

//           return (
//             <Card
//               key={product.id}
//               title={product.title}
//               img={product.img}
//               desc={product.desc}
//             />
//           );
//         })}

//         {/* WITHOUT USING OBJECT */}
//         {/* <Card
//           img="/public/mango.jpg"
//           title="Mango"
//           desc="  The mango is a tropical stone fruit and member of the drupe family.
//           This is a type of plant food with a fleshy outer section that
//           surrounds a shell, or pit. "
//         />
//         <Card
//           img="/public/banana.jpg"
//           title="Banana"
//           desc="  A banana is an elongated, edible fruit – botanically a berry – produced by several kinds of large treelike herbaceous flowering plants in the genus Musa."
//         />
//         <Card
//           img="/public/orange.jpg"
//           title="Orange"
//           desc="  The orange, also called sweet orange to distinguish it from the bitter orange (Citrus × aurantium), is the fruit of a tree in the family Rutaceae. "
//         /> */}
//       </div>
//       <Abc />
//     </>
//   );
// }

// export default App;

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Home />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <Navbar />
        <About />
      </>
    ),
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
