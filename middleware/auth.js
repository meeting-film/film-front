export default function ({ store, redirect, error }) {
  if (!store.state.TOKEN) {
    error({
      message: 'You are not connected',
      statusCode: 403
    });
    return redirect('/login')
  }
}
