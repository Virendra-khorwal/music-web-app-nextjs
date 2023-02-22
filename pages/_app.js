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
        <div className="flex-1 h-screen overflow-hidden">
          <Navbar />
          <div className="p-2 h-full overflow-y-scroll scrollbar-none">
            <Component {...pageProps} />
          </div>
        </div>
      </div>
    </Provider>
  );
}
