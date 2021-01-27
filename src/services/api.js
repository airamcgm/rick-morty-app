const BASE_URL = 'https://rickandmortyapi.com/api';
function handleErrors(response) {
  if (!response.ok) {
      throw Error(response.statusText);
  }
  return response;
}
class HttpClient {
  static get(url, data) {
    return HttpClient._generateRequest("GET", url, data);
  }

  static post(url, data) {
    return HttpClient._generateRequest("POST", url, data);
  }

  static _generateUrl(path) {
    return `${BASE_URL}${path}`;
  }
  
  static _generateRequest(method, url, data = {}) {
    /*const headers = {
      "Cockpit-Token": API_TOKEN,
    };*/

    //const payload = { ...data, method: method, headers: headers };
    const payload = { ...data, method: method};
    const serviceUrl = this._generateUrl(url);

    return fetch(serviceUrl, payload).then(handleErrors).then((response) => response.json()).catch(error => console.log("") );
  }
}

const fetchCharacters = (parameter, page) => HttpClient.get(`/character/?${parameter}=${page}`);

const Api = {
    fetchCharacters,
}
export default Api;
