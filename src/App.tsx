import React, { FC, lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Header from './components/header/header.component';
import Spinner from './components/spinner/spinner.component';

const HomePage = lazy(() => import('./pages/home-page/home-page.component'));

const App: FC = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Suspense fallback={<Spinner />}>
          <Route exact path="/" component={HomePage} />
        </Suspense>
      </Switch>
    </div>
  );
};

export default App;
