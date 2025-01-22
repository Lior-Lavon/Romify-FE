import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import "./index.css";
import { store } from "./store.js";
import App from "./App.jsx";
// import { interceptor } from "../src/utils/customFetch.jsx";

// configure axios interceptor
// ToDo interceptor(store);

const queryClient = new QueryClient({
  defaultOptions: {
    Queries: {
      staleTime: 1000 * 60 * 5, // cache for 5 minute
    },
  },
});

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      {/* <ToastContainer position="top-center" autoClose={2000} /> */}
      <App />
    </Provider>
    {/* <ReactQueryDevtools initialIsOpen={true} /> */}
  </QueryClientProvider>
);
