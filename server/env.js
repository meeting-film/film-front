let url = '';
if (process.env.NODE_ENV == 'production') {
  url = '';
}
export default {
  url: url
}
