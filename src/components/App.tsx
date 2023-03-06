import React from 'react';
import GlobalStyle from '../globalStyles';
import Container from './Container';
import Footer from './Footer';

type AppProps = {};

const App: React.FC<AppProps> = () => {
  return (
    <>
      <GlobalStyle />
      <Container />
      <Footer />
    </>
  );
};
export default App;
