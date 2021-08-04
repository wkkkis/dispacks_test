import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

export const ClientForm = ({ btnHandler }) => {
  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(btnHandler)}>
      <input type="text" placeholder="Name" {...register('name')} />
      <input type="text" placeholder="Phone" {...register('phone')} />
      <input type="text" placeholder="Email" {...register('email')} />
      <input type="submit" value="Add" />
    </form>
  );
};

export const ClientOverride = ({ overrideHandler, clientid }) => {
  const { register, handleSubmit } = useForm();
  const [toggleOverride, setOverride] = useState(false);

  const toggleOverrideClient = () => {
    setOverride(!toggleOverride);
  };

  const overrideHandlerForm = (data) => {
    overrideHandler(data, clientid)
  }

  return (
    <>
      {toggleOverride &&
        <form onSubmit={handleSubmit(overrideHandlerForm)}>
          <input type="text" placeholder="Enter street name" {...register('street')} />
          <input type="text" placeholder="Enter flat" {...register('flat')} />
          <input type="submit" value="Override" />
        </form>
      }
      {toggleOverride ?
        <button onClick={toggleOverrideClient}>Close override</button>
        : <button onClick={toggleOverrideClient}>Override housing</button>
      }
    </>
  );
};
