import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': '761c9bf00amsh0d2136a44b62676p1cbd99jsn92f48c04a7ce'
    }
  })
  return data;
}