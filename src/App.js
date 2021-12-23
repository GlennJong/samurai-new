import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { useWordingLoader } from './utils/wordingSystem';

import appStore from './store/app';
import walletStatus from './store/walletStatus';
import scrollSpy from './store/scrollSpy';

import GlobalStyle from './components/GlobalStyle';
import IntroAnimation from './components/IntroAnimation';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';

const reducer = combineReducers({
  app: appStore.reducer,
  walletStatus: walletStatus.reducer,
  scrollSpy: scrollSpy.reducer
});

const store = createStore(reducer);

const App = ({ wording, Router = BrowserRouter }) => {
  const wordingLoaded = useWordingLoader(wording ?? '/wordings/main.json?v=202106201530');

  return (
    <Provider store={store}>
      <Helmet>
        <title>KATANA N' SAMURAI</title>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@500;700;900&display=swap" rel="stylesheet"></link>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" rel="stylesheet"></link>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" rel="stylesheet"></link>
      </Helmet>
      <GlobalStyle/>
      <Router>
        { !wordingLoaded &&
          <div>網站內容準備中，請稍候</div>
        }
        { wordingLoaded &&
          <>
            <Header />
            {/* <IntroAnimation /> */}
            <Switch>
              <Route path="/" exact={true} component={HomePage} />
            </Switch>
            <Footer />
          </>
        }
      
      </Router>
    </Provider>
  );
}

export default App;
