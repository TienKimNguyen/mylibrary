import React from  "react";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import App from "./App";
import MyBooks from "./MyBooks";

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/mybooks" component = {MyBooks} />
            </Switch>
        </BrowserRouter>
    );
}

export default Router;