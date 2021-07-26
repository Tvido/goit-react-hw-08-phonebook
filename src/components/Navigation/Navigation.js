import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../routes';
import { connect } from 'react-redux';
import { authSelectors } from '../../redux/auth';

const Navigation = ({ isAuthenticated }) => (
  <nav>
    <NavLink to={routes.HomeView} exact>
      Home
    </NavLink>

    {isAuthenticated && (
      <NavLink to={routes.ContactsView} exact>
        Contacts
      </NavLink>
    )}
  </nav>
);

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
