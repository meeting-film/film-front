import request from '~/server'

export const auth = async (store, params) => {
  return await request.post('https://www.easy-mock.com/mock/5b52fdd00a35bc5c5ece0613/film/auth', params)
  // return await request.post('/meetingfilm/auth', params)
};
export const logout = async (store, params) => {
  return await request.post('https://www.easy-mock.com/mock/5b52fdd00a35bc5c5ece0613/film/meetingfilm/user/logout', params)
  // return await request.post('/meetingfilm/auth', params)
};
export const register = async (store, params) => {
  return await request.post('https://www.easy-mock.com/mock/5b52fdd00a35bc5c5ece0613/film/meetingfilm/user/register', params)
  // return await request.post('/meetingfilm/user/register', params)
};
export const check = async (store, params) => {
  return await request.post('https://www.easy-mock.com/mock/5b52fdd00a35bc5c5ece0613/film/meetingfilm/user/check', params)
  // return await request.post('/meetingfilm/user/check', params)
};
