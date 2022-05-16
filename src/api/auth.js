import axios from '@/api/axios';

//метод, который делает api запрос и передает наши credentials из формы в нужной структуре
const register = (credentials) => {
  return axios.post('/users', {user: credentials});
};
export default {
  register,
};
