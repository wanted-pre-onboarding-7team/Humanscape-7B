import axios from 'axios';

import { IDiseaseAPIRes } from 'types/disease.d';

const PROXY = window.location.hostname === 'localhost' ? '' : '/cors-proxy/';
const BASE_URL = '/B551182/diseaseInfoService/getDissNameCodeList';

interface Params {
  searchText: string;
}

export const getDiseaseNameApi = (params: Params) =>
  axios.get<IDiseaseAPIRes>(`${PROXY}${BASE_URL}`, {
    params: {
      serviceKey: process.env.REACT_APP_API_KEY,
      pageNo: 1,
      numOfRows: 10,
      sickType: 1,
      medTp: 2,
      diseaseType: 'SICK_NM',
      _type: 'json',
      ...params,
    },
  });
