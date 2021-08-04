import React from 'react';
import '../App.css';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { getCompanies } from '../redux/reducers/cart';
import { Link } from 'react-router-dom';

const Companies = props => {

  React.useEffect(() => {
    props.getCompanies();
  }, []);

  return (
    <div className='companies-wrap'>
      {
        props.companies.map((item) => {
          return (
            <Link to={`/${item.id}`} className='companies-item'>
              <span>{item.id}</span>
              <span>{item.name}</span>
            </Link>
          );
        })
      }
    </div>
  );
};

const mapStateToProps = state => ({
  companies: state.cart.companies
});

export default compose(
  connect(mapStateToProps, {
    getCompanies
  })
)(Companies);
