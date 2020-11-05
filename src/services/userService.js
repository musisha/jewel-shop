import axios from 'axios';
import authHeader from './authHeader';
import { API_URL } from '../config';

class UserService {
    async getOverview() {
        return await axios.get(`${API_URL}overview`, { headers: authHeader() });
    }

    async getTransactions() {
        return await axios.get(API_URL + 'transactions', { headers: authHeader() });
    }

    getSettlements() {
        return axios.get(API_URL + 'settlements', { headers: authHeader() });
    }

    getBankAccounts() {
        return axios.get(API_URL + 'bank-accounts', { headers: authHeader() });
    }

    getPaymentLinks() {
        return axios.get(API_URL + 'links', { headers: authHeader() });
    }

    postPayout() {
        return axios.get(API_URL + 'mobile/payout', { headers: authHeader() });
    }
}

export default new UserService();
