import React from 'react';
import Footer from '../main_tools/footer';
import MainNav from '../main_tools/main_nav_container';


class Explore extends React.Component {
  render() {
    return (
      <React.Fragment>
        <MainNav />
        <nav className="sub-nav">
          <h1 className="explore1">Explore</h1>
        </nav>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Explore;