import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';
import Home from "./components/page/home";
import './index.css';

const store = createStore(
    reducers,
    applyMiddleware(reduxThunk)
);

const Page404 = () => (
    <div>
        <h1>Page not found - 404</h1>
    </div>
)

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Redirect to="/home" />
                </Route>
                <Route path="/home" exact component={Home} />
                <Route path="*">
                    <Page404 />
                </Route>
            </Switch>


        </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);

