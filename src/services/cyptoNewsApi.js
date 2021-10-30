import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '21b4c9853emshdf9bc0eead1a265p1d71e7jsne7e2aca335d6'
}

const baseUrl= 'https://coinranking1.p.rapidapi.com/'

const createRequest = (url) => ({ url, headers: cryptoNewsApiHeaders })

export const cryptoApi = createApi({

)}