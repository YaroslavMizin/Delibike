import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { casesData, robberyCaseData } from '../types/case';
import { officersData } from '../types/officer';

const token = localStorage.getItem('token');

export const casesAPI = createApi({
    reducerPath: 'casesAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://sf-final-project.herokuapp.com/api',
        prepareHeaders: (headers) => {
            if(token) {
                headers.set('authorization', token);
            }
            return headers;
        }
    }),
    endpoints: (build) => ({
        fetchAllCases: build.query<casesData, string>({
            query: () => ({
                url: '/cases',
            })
        }),
        fetchOneCase: build.query<robberyCaseData, string>({
            query: (id) => ({
                url: `/cases/${id}`
            })
        })
    })
});

export const officersAPI = createApi({
    reducerPath: 'officersAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://sf-final-project.herokuapp.com/api',
        prepareHeaders: (headers) => {
            if(token) {
                headers.set('authorization', token);
            }
            return headers;
        }
    }),
    endpoints: (build) => ({
        fetchAllOfficers: build.query<officersData, string>({
            query: () => ({
                url: '/officers',
            })
        }),
        fetchOneOfficer: build.query({
            query: (id) => ({
                url: `/officers/${id}`
            })
        })
    })
});