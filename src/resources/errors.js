import axios from 'axios';

<<<<<<< HEAD
let API_URL = 'https://localhost:8080';
=======
let API_URL = 'http://localhost:8080';
>>>>>>> 5434164338e1674ae13f1c03f0e905a87d9ef9d2

export class APIService {
  constructor() {
  }

<<<<<<< HEAD
  getCustomer(userId) {
    const encodedUserId = btoa(userId);
    const url = `${API_URL}/seller/customer/${encodedUserId}`;
    return axios.get(url, { crossDomain: true }).then(response => response.data);
  }

  getAllResumedBysellerId(customerId, sellerId) {
    const encodedSellerId = btoa(sellerId);
    const url = `${API_URL}/person/findAll/${customerId}/${encodedSellerId}`;
    
    return axios.get(url, { crossDomain: true }).then(response => response.data);
  }

  getResumedCustomerPaginated(userId, seller, page) {    
    const url = `${API_URL}/api/persons/search/getByCustomerIdAndSellerPaginated?customerId=${userId}&seller=${seller}&page=${page}&size=50&projection=forAgenda`;
    return axios.get(url, { crossDomain: true }).then(response => response.data);
  }
=======
  findAll() {
    const url = `${API_URL}/error/findAll`;
    return axios.get(url, { crossDomain: true }).then(response => response.data);
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
>>>>>>> 5434164338e1674ae13f1c03f0e905a87d9ef9d2

  
}
