import React from 'react';
import LoggedInHomepageNav from './logged_in_homepage_nav';
import LoggedInHomepageNavContainer from './logged_in_homepage_nav_container';


export const subMenu = () => {
  return this.props.navType === 'activity' ? <LoggedInHomepageNavContainer /> ? <LoggedInHomepageNav />;
};

