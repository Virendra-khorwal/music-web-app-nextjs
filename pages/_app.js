import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import "@/styles/globals.css";
import { Provider } from "react-redux";
import { store } from "./api/store";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <div className="flex bg-smoke h-screen">
        <Sidebar />
        <div className="">
          <Navbar />
          <Component {...pageProps} />
        </div>
      </div>
    </Provider>
  );
}
