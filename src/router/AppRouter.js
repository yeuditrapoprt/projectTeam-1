import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from '../components/login';
import Payment from '../components/payment';
import CompleteTest from '../components/comleteTest';
import ErrorPage from '../components/errorPage';
import StudentPermit from '../components/studentPermit';
import App from '../components/App';
import FileUploadDemo from '../components/FileUploadDemo';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
      
       
          <Switch>
            <Route component={Login} path="/" exact={true} />
            <Route component={Payment} path="/payment/:id" />
            <Route component={ErrorPage} path="/errorpage/:id" />
            <Route component={CompleteTest} path="/completetest/:id" />
            <Route component={StudentPermit} path="/studentpermit/:id" />
            <Route component={App} path="/StudentPayment/:id" />
            <Route component={FileUploadDemo} path="/FileUploadDemo" />

          </Switch>
        
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;