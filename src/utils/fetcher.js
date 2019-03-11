import axios from 'axios';
import Storage from './storage';

class Fetcher {
  /**
   * @desc Metodo nativo de React.js
   *
   * @doc https://reactjs.org/docs/react-component.html#constructor
   * @return { void }
   */
  constructor() {
    this.lastToken = Storage.getElement('token');
    this.config = {
      /**
       *
       *   HEADER WAS HARDCODED TO TEST PURPOSES *
       * */

      headers: { Authorization: `Bearer ${this.lastToken}` },
    };
    // headers
    this.dispatch = false;
  }

  /**
   *  add headers
   * @param { Object } headersArray
   * @return { Headers }
   */
  addHeaders(newHeaders = {}) {
    //
    let { headersArray } = this;

    // Recorremos y añadimos las cabeceras.
    Object.keys(headersArray).length > 0 &&
      headersArray.forEach((prop, value) => {
        headersArray.append(prop, value);
      });
  }

  /**
   * performa  get request
   * @param { String } endpoint
   * @return { Promise }
   */
  async get(endpoint) {
    const { data } = await axios.get(endpoint, this.config);

    return data;
  }

  /**
   * perfform a post
   * @param  { String } endpoint
   * @param  { Object } data
   * @return { Promise }
   */
  async post(endpoint, payload) {
    const { data } = await axios.post(endpoint, payload, this.config);
    return data;
  }

  /**
   * perfform a put
   * @param  { String } endpoint
   * @param  { Object } data
   * @return { Promise }
   */
  async put(endpoint, payload) {
    const { data } = axios.put(endpoint, payload, this.config);
    return data;
  }

  /**
   * perform a remove request
   * @param { String } endpoint
   * @return { Promise }
   */
  async remove(endpoint) {
    let { data } = await axios.delete(endpoint, this.config);
    return data;
  }
}

export default Fetcher;
