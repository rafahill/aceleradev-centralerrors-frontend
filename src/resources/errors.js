import axios from 'axios';

let API_URL = 'https://localhost:8080';

export class APIService {
  constructor() {
  }

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

  
}
