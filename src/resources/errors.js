import axios from 'axios';

let API_URL = 'http://localhost:8080';

export class APIService {
  constructor() {
  }

  findAll() {
    const url = `${API_URL}/error/findAll`;
    return axios.get(url, { crossDomain: true }).then(response => response.data);
  }
  findById(id) {
    const url = `${API_URL}/error/${id}`;
    return axios.get(url, { crossDomain: true }).then(response => response.data);
  }
  findByEnviroment(env) {
    const url = `${API_URL}/error/findByEnvironment/${env}`;
    return axios.get(url, { crossDomain: true }).then(response => response.data);
  }
  changeArchived(id, flag) {
    const url = `${API_URL}/error/${id}/setArchived/${flag}`;
    return axios.put(url, { crossDomain: true }).then(response => response.data);
  }
  findAllByArchivedTrue() {
    const url = `${API_URL}/error/findAllByArchivedTrue`;
    return axios.get(url, { crossDomain: true }).then(response => response.data);
  }

  findAllByArchivedFalse() {
    const url = `${API_URL}/error/findAllByArchivedFalse`;
    return axios.get(url, { crossDomain: true }).then(response => response.data);
  }

  deleteError(error) {
    const url = `${API_URL}/error/${error.id}`;
    return axios.delete(url, { crossDomain: true });
  }
  

  // getAllResumedBysellerId(customerId, sellerId) {
  //   const encodedSellerId = btoa(sellerId);
  //   const url = `${API_URL}/person/findAll/${customerId}/${encodedSellerId}`;
    
  //   return axios.get(url, { crossDomain: true }).then(response => response.data);
  // }

  // getResumedCustomerPaginated(userId, seller, page) {    
  //   const url = `${API_URL}/api/persons/search/getByCustomerIdAndSellerPaginated?customerId=${userId}&seller=${seller}&page=${page}&size=50&projection=forAgenda`;
  //   return axios.get(url, { crossDomain: true }).then(response => response.data);
  // }

  
}
