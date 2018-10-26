import Cookies from 'js-cookie'
export default function ({error, redirect}) {
    console.log(Cookies.get('token'))
    // if (!Cookies.get('token')) {
    //     error({
    //         message: 'You are not connected',
    //         statusCode: 403
    //     });
    //     return redirect('/login')
    // }
    // if (!store.state.authUser) {
    //     error({
    //         message: 'You are not connected',
    //         statusCode: 403
    //     })
    //     return redirect('/login')
    // }
}
