// import React from 'react';
import React, { Suspense, lazy} from 'react';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'; 
const AccountDetails = lazy(() => import('../src/pages/accountDetails'));
const ContactDetails = lazy(() => import('../src/pages/contactDetails'));
// import AccountDetails from '../src/pages/accountDetails';
// import ContactDetails from '../src/pages/contactDetails';
function Routes() {
    return (
      <Router>
        <Switch>
          {/* <Route path="/" exact component={AccountDetails} /> */}
          {/* <Route path="/contactDetails" component={ContactDetails} /> */}
          <Suspense fallback={<h1>Loading…</h1>}>
            <Route path="/" exact component={AccountDetails} />
          </Suspense>
          <Suspense fallback={<h1>Loading…</h1>}>
            <Route path="/contactDetails" component={ContactDetails} />
          </Suspense>
        </Switch>
      </Router>
    );
  }export default Routes;
  