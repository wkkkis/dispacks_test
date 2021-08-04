import React, { useState } from 'react';
import '../../App.css';
import {ClientForm, ClientOverride} from './ClientForm';

const Street = ({ street, addClient, deleteClient, overrideClient }) => {

  const [toggle, setToggle] = useState(false);

  const toggleAddClient = () => {
    setToggle(!toggle);
  };

  const btnHandler = data => {
    addClient(data, street.addressId);
  };
  
  return (
    <div>
      <div className="streets-item">
        <div className="street-data">
          <span>street: {street.streetName}</span>
          <span>building: {street.building}</span>
          <span>flat: {street.flat}</span>
          <span>clients: {street.clients.length}</span>
        </div>
        <button onClick={toggleAddClient}>{toggle ? '-' : '+'}</button>
      </div>
      <div className="clients-wrap">
        {toggle && <ClientForm btnHandler={btnHandler} />}
        {toggle &&
        street.clients && street.clients.map((client) => {
          return (
            <div className="streets-client">
              <div className="streets-client-wrap">
                <span>Client:</span>
                <span>name: {client.name}</span>
                <span>id: {client.id}</span>
                <span>phone: {client.phone}</span>
                <span>email: {client.email}</span>
                <button onClick={() => deleteClient(client.id)}>Delete client</button>
                <ClientOverride overrideHandler={overrideClient} clientid={client.id} />
              </div>
            </div>
          );
        })
        }
      </div>
    </div>
  );
};

export default Street;
