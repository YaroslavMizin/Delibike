import axios from "axios";

const baseAPI = 'https://sf-final-project.herokuapp.com/api'
const authAPI = 'https://sf-final-project.herokuapp.com/api/auth';

export default class Service {
      static async postAuth (data: {}, url: string) {
        const response = await axios({
                method: 'post',
                baseURL: authAPI,
                url: url,
                data: data,
            });
         return response.data;
    }
    static async getAuth (token: string) {
        const response = await axios({
            baseURL: authAPI,
            headers: {
                authorization: token
            }
        })
        return response.data;
    }
    static async postReport (data: {}, url: string, token: string) {
        const response = await axios({
            method: 'post',
            baseURL: baseAPI,
            url: url,
            headers: {
                authorization: token,
            },
            data: data
        })
        return response.data;
    }
    static async putReport (data: {}, url: string, id: string | undefined, token: string) {
        const response = await axios({
            method: 'put',
            baseURL: baseAPI,
            url: url+id,
            headers: {
                authorization: token,
            },
            data: data
        });
        return response.data;
    }
    static async deleteReport (url: string, id: string | undefined, token: string) {
        const response = await axios({
            method: 'delete',
            baseURL: baseAPI,
            url: url+id,
            headers: {
                authorization: token,
            }
        })
        return response.data;
    }
    static async putOfficer (data: {}, url: string, id: string | undefined, token: string) {
        const response = await axios({
            method: 'put',
            baseURL: baseAPI,
            url: url+id,
            headers: {
                authorization: token,
            },
            data: data,
        })
        return response.data;
    }
    static async deleteOfficer (url: string, id: string | undefined, token: string) {
        const response = await axios({
            method: 'delete',
            baseURL: baseAPI,
            url: url+id,
            headers: {
                authorization: token,
            },
        });
        return response.data;
    }
    static async createOfficer (data: {}, url: string, token: string) {
        const response = await axios({
            method: 'post',
            baseURL: baseAPI,
            url: url,
            headers: {
                authorization: token,
            },
            data: data
        });
        return response.data;
    }
}