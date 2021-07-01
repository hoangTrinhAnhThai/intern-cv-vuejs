import axios from 'axios'
// axios.defaults.baseURL = 'https://60dd418f878c890017fa274b.mockapi.io/api/cv/'
axios.defaults.baseURL = "https://cv-php-api.herokuapp.com/"
// axios.defaults.headers.common['Authorization'];
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'