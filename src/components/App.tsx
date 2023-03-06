import React from 'react';
import GlobalStyle from '../globalStyles';
import Footer from './Footer';

type AppProps = {};

const App: React.FC<AppProps> = () => {
  return (
    <>
      <GlobalStyle />
      <h1>Time Tracking Dashboard</h1>
      <Footer />
    </>
  );
};
export default App;
