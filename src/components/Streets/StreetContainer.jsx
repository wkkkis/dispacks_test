import React from 'react';
import { connect } from 'react-redux';
import { addClient, getStreet, overrideClient, removeClient } from '../../redux/reducers/cart';
import { useRouter } from '../../hooks/useRouter';
import Street from './Street';
import '../../App.css';

const StreetContainer = ({ street, ...props }) => {

  const router = useRouter();

  const streetId = router.query.streetId;

  React.useEffect(() => {
    props.getStreet(streetId);
  }, []);

  const addingClient = (data, address) => {
    props.addClient(data.email, data.name, data.phone, address, streetId)
  }

  const overrideHandler = (data, clientId) => {
    props.overrideClient(flatMapper(data).addressId, clientId, streetId)
    // flatMapper(data)
  }

  const deleteClient = (clientId) => {
    props.removeClient(clientId, streetId)
  }

  const flatMapper = data => {
    let flat = street.filter(item => item.streetName === `${data.street}` && item.flat === `${data.flat}`)
    return flat[0]
  }

  return (
    <div className='streets-wrap'>
      {
        street && street.map(item => (
          <Street street={item}
                  addClient={addingClient}
                  key={item.addressId}
                  deleteClient={deleteClient}
                  overrideClient={overrideHandler} />
        ))
      }
    </div>
  );
};

const mapStateToProps = state => ({
  street: state.cart.street
});

export default connect(mapStateToProps, {
    getStreet, addClient, removeClient, overrideClient })
(StreetContainer);
