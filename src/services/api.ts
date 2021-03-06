import axios from 'axios';

export enum HTTPMethod{
  get,
  post,
  put,
  patch,
  delete
}

export enum Recurse{
  createCompany = 'companies',
  getMenusFromUser = 'menus'
}


const api = {
  localApi: axios.create({
    baseURL: 'http://localhost:3333',
  }),
  homolApi: axios.create({
    baseURL: 'http://localhost:3333',
  }),
  prodApi: axios.create({
    baseURL: 'https://sds3-ags-dsvendas.herokuapp.com',
  }),
}

const setApi = api.localApi

export default setApi;
