export default function authHeader() {
    const token = localStorage.getItem('token');

    if (token && token !== null) {
        return { token: token };
    } else {
        return console.log('there was an error on setting the header in the authheader service');
    }
}
