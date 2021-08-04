import axios from 'axios';

const SET_COMPANY_DATA = 'SET_COMPANY_DATA';
const SET_STREET_DATA = 'SET_STREET_DATA';

let initialState = {
  street: [],
  companies: []
};

export default function cart(state = initialState, action) {
  switch (action.type) {
    case SET_COMPANY_DATA:
      return {
        ...state,
        companies: action.payload
      };
    case SET_STREET_DATA:
      return {
        ...state,
        street: action.payload
      };
    default:
      return state;
  }
}

export const setCompanies = payload => ({ type: SET_COMPANY_DATA, payload });
export const setStreet = payload => ({ type: SET_STREET_DATA, payload });

export const getCompanies = () => async dispatch => {
  let response = await axios.get(`https://dispex.org/api/vtest/Request/companies`);
  dispatch(setCompanies(response.data));
};

export const getStreet = (companyId) => async dispatch => {
  let response = await axios.get(`https://dispex.org/api/vtest/HousingStock?companyId=${companyId}`);
  dispatch(setStreet(response.data));
};

export const addClient = (email, name, phone, address) => dispatch => {
  axios.post(`https://dispex.org/api/vtest/HousingStock/client`, { Email: email, Name: name, Phone: phone }).then( res => {
    if(res.data.result === "Ok"){
      dispatch(overrideClient(address, res.data.id))
    }
  })
};

export const removeClient = (clientId) => async dispatch => {
  let response = await axios.delete(`https://dispex.org/api/vtest/HousingStock/bind_client/${clientId}`);
};

export const overrideClient = (address, clientId) => async dispatch => {
  let response = await axios.put(`https://dispex.org/api/vtest/HousingStock/bind_client`, { AddressId: address, ClientId: clientId });

}
