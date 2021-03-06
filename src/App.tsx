import React, { FC, lazy, Suspense, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import 'primereact/resources/themes/arya-orange/theme.css';
import 'primereact/resources/primereact.min.css';

import Header from './components/header/header.component';
import Spinner from './components/spinner/spinner.component';

const HomePage = lazy(() => import('./pages/home-page/home-page.component'));
const HistoryPage = lazy(() => import('./pages/history-page/history-page.component'));

const App: FC = () => {
  useEffect(() => {
    document.title = 'Triangle Classifier';
  }, []);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Suspense fallback={<Spinner />}>
          <Route exact path="/" component={HomePage} />
          <Route path="/history" component={HistoryPage} />
        </Suspense>
      </Switch>
    </div>
  );
};

export default App;
