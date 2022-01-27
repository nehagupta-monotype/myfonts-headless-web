import axios from "axios";

const provider = {
  get,
  post,
  put,
  delete: _delete
};

function get(url) {
  let data;
  data = axios.get(url)
    .then(handleResponse)
    .catch(handleError);
  return data;
}

function post(url, body) {
  let data;
  const requestOptions = {
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  };
  data = axios.post(url, requestOptions)
    .then(handleResponse)
    .catch(handleError);
  return data;
}

function put(url, body) {
  let data;
  const requestOptions = {
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  };
  data = axios.put(url, requestOptions)
    .then(handleResponse)
    .catch(handleError);
  return data;
}

// prefixed with underscored because delete is a reserved word in javascript
function _delete(url) {
  let data;
  const requestOptions = {
  };
  data = axios.delete(url, requestOptions)
    .then(handleResponse)
    .catch(handleError);
  return data;
}

// helper functions
function handleResponse(response) {
  return response.data;
}

function handleError(error) {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.log(error.response.status);
    console.log(error.response.headers);
  } else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    console.log(error.request);
  } else {
    // Something happened in setting up the request that triggered an Error
    console.log('Error', error.message);
  }
  throw error.response.status
}

export default provider;
