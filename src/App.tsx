import FilterBox from "./FilterBox";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Favourites from "./Favourites";

function App() {
  return (
    <div>
      {/* <Header />
      <FilterBox /> */}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/favourites" element={<Favourites />}></Route>
          <Route path="/" element={<FilterBox />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
