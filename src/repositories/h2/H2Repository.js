const fetch = require('node-fetch');
const Headers = fetch.Headers;
const headers = new Headers();
headers.set("Content-Type", "application/json")

class H2Repository {
  /**
   * @param {string} apiUrl URL base da API
   * @param {string} resourcePath caminho do resource iniciando com '/'
   */
  constructor(apiUrl, resourcePath) {
    this.apiUrl = apiUrl;
    this.resourcePath = resourcePath;
  }

  get apiEndpoint() {
    return `${this.apiUrl}${this.resourcePath}`;
  }

  async list() {
    const res = await fetch(this.apiEndpoint);
    return res.json();
  }

  async listSubPath(id,subPath) {
    const url = `${this.apiEndpoint}/${id}/${subPath}`
    const res = await fetch(url);
    return res.json();
  }

  async getById(id) {
    const url = `${this.apiEndpoint}/${id}`;
    const res = await fetch(url);
    return res.json();
  }

  async insert(obj) {
    const res = await fetch(this.apiEndpoint, {
      method: 'POST',
      body: JSON.stringify(obj),
      headers
    });
    return res.json();
  }

  async insertInSubPath(id, subPath, obj) {
    
    console.log("cheguei no insertInSubPath do H2 repository");
    const url = `${this.apiEndpoint}/${id}/${subPath}`
    const res = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(obj),
      headers
    });
    return res.json();
  }

  async update(id, obj) {
    const url = `${this.apiEndpoint}/${id}`;

    const res = await fetch(url, {
      method: 'PUT',
      body: JSON.stringify(obj),
      headers
    });
    return res.json();
  }
  async updateSubPath(id, subPath, notaId, obj) {
    const url = `${this.apiEndpoint}/${id}/${subPath}/${notaId}`

    const res = await fetch(url, {
      method: 'PUT',
      body: JSON.stringify(obj),
      headers
    });
    return res.json();
  }

  async delete(id) {
    const url = `${this.apiEndpoint}/${id}`;
    const res = await fetch(url, {
      method: 'DELETE'
    });

    return res.json();
  }
}

module.exports = H2Repository;