import FilterBox from "./FilterBox";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Favourites from "./Favourites";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import store from "./store";

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
      <BrowserRouter>
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            <Header />
            <Routes>
              <Route path="/favourites" element={<Favourites />}></Route>
              <Route path="/" element={<FilterBox />}></Route>
            </Routes>
          </QueryClientProvider>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
