import React, { FC, lazy, Suspense } from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom';

const HomePage = lazy(() => import('./pages/home-page/home-page.component'));

const App: FC = () => {
  return (
    <div className="App">
      <Switch>
        <Suspense fallback={<>Loading</>} >
          <Route exact path="/" component={HomePage} />
        </Suspense>
      </Switch>
    </div>
  );
};

export default App;
