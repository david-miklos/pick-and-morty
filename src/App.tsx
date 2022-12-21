import FilterBox from "./FilterBox";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Favourites from "./Favourites";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

function App() {
  return (
    <div>
      {/* <Header />
      <FilterBox /> */}
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Header />
          <Routes>
            <Route path="/favourites" element={<Favourites />}></Route>
            <Route path="/" element={<FilterBox />}></Route>
          </Routes>
        </QueryClientProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
