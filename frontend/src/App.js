import "tailwindcss/tailwind.css";
import "./index.css";
import "./styles/style.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/__Home";
import Allergies from "./pages/Allergies.js";
import AnythingGoes from "./pages/AnythingGoes.js";
import Celebration from "./pages/Celebration.js";
import ChallengingBakes from "./pages/ChallengingBakes.js";
import LoveChocolate from "./pages/LoveChocolate.js";
import Newbie from "./pages/Newbie.js";
import ShortOnTime from "./pages/ShortOnTime.js";
import Vegan from "./pages/Vegan.js";
import WithTheKids from "./pages/WithTheKids.js";

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/Allergies" element={<Allergies />} />
      <Route exact path="/AnythingGoes" element={<AnythingGoes />} />
      <Route exact path="/Celebration" element={<Celebration />} />
      <Route exact path="/ChallengingBakes" element={<ChallengingBakes />} />
      <Route exact path="/LoveChocolate" element={<LoveChocolate />} />
      <Route exact path="/Newbie" element={<Newbie />} />
      <Route exact path="/ShortOnTime" element={<ShortOnTime />} />
      <Route exact path="/Vegan" element={<Vegan />} />
      <Route exact path="/WithTheKids" element={<WithTheKids />} />
    </Routes>
  </BrowserRouter>
);

export default App;
