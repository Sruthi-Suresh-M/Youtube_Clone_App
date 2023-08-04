import axios from 'axios';
const BASE_URL= 'https://youtube-v31.p.rapidapi.com';

const options = {
  method: 'GET',
  params: {
    maxResults: '50',
  },
  headers: {
    'X-RapidAPI-Key': 'c37aba4201mshc67aafcaf175a86p187ea7jsn8c513e8cfd5a',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (url) => {
    const { data } =  await axios.get(`${BASE_URL}/${url}`,options);
    return data;
}