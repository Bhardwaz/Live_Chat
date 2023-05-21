import ReactDOM  from "react-dom/client";
import LiveChat from "./components/LiveChat";
import React from "react";
import { Provider } from "react-redux";
import  store  from "./utils/store";

const root = ReactDOM.createRoot(document.getElementById('root'))

const AppLayout = () => {
    return(
        <Provider store={store}>
         <LiveChat />
        </Provider>
    )
}

root.render(<AppLayout />)