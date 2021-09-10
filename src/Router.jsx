import React, {Component} from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Main from "./components/main";
import About from './components/About';
import Error from './components/Error';

class Router extends Component {
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route exact path="/about" component={About} />
                    <Route path='/author' component={() => { 
                        window.location.replace('https://bit.ly/hernanreiq'); 
                        return null;
                    }}/>
                    <Route component={Error} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Router;