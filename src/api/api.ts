import axios from '../helpers/axios';
import { IAuthenticatedInfo } from '../types/interfaces';

export const auth = {
    login: (email: string, password: string) => {
        return axios.post<IAuthenticatedInfo>('/user/obtain_token/', { email, password }).then((response) => response.data);
    },
    register: (email: string, first_name: string, last_name: string, password: string) => {
        return axios.post('/user/create/', { email, first_name, last_name, password }).then((response) => response.data);
    }
}