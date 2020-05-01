// import req from '../api/axios';

export const isAuthenticated = () => {
  const token = !!localStorage.getItem('authorization')
  // const response = await req.post('/verify', token)
  return token
};