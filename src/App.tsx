import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import LokalLogin from './LokalLogin/LokalLogin';
import RefusjonOversikt from './RefusjonOversikt/RefusjonOversikt';
import RefusjonSide from './RefusjonSide/RefusjonSide';
import VerticalSpacer from './Komponenter/VerticalSpacer';
import ErrorOgSuspenseHandler from './ErrorOgSuspenseHandler';
import InternflateDekoratør from './InternflateDekoratør';

function App() {
    return (
        <>
            <InternflateDekoratør />
            {process.env.NODE_ENV === 'development' && <LokalLogin />}
            <VerticalSpacer rem={1} />
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <ErrorOgSuspenseHandler>
                            <RefusjonOversikt />
                        </ErrorOgSuspenseHandler>
                    </Route>
                    <Route exact path="/refusjon/:id">
                        <ErrorOgSuspenseHandler>
                            <RefusjonSide />
                        </ErrorOgSuspenseHandler>
                    </Route>
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default App;
