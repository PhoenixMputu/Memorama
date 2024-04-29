import axios from 'axios';

export const account = () => {
  axios.get(`${process.env.apiUrl}/auth/account`)
  .then(() => {
    return true;
  })
  .catch(() => {
    return false;
  });
  return false
}