import React from 'react'
import Header from './shared/header'
import Footer from './shared/footer'
import Films from './films'

function App() {
  return (
    <div className="wrapper">
      <Header/>
      <Films/>
      <Footer/>
    </div>
  );
}

export default App;
