import axios from 'axios';
import { apiConfig } from '../config/api-config';

export const idcloudhostHttpClient = axios.create({
    baseURL: apiConfig.idcloudhostApiBaseUrl,
});
