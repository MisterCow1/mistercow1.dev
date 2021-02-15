import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";

class Root extends React.Component
{
    render()
    {
        return(
            <div>
                <Router>
                    <Switch>
                        <Route path = "/" exact component = {() => <Home/>}/>
                    </Switch>
                </Router>
            </div>
        );
    }
}

ReactDOM.render(<Root/>, document.getElementById("root"));