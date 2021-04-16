import React, { FC, lazy, Suspense } from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom';
import Header from './components/header/header.component';

const HomePage = lazy(() => import('./pages/home-page/home-page.component'));

const App: FC = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Suspense fallback={<>Loading</>} >
          <Route exact path="/" component={HomePage} />
        </Suspense>
      </Switch>
    </div>
  );
};

export default App;
