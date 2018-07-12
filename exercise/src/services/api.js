/**
 * API Class
 *
 * Currently just simple static access to API HOST env.
 */
class Api {

  static getApiHost() {
    return process.env.REACT_APP_API_HOST || `http://localhost:3000`;
  }
}

export default Api
