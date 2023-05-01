import Logout from '../../../functions/logout';

const exit = async () => {

    await Logout();

    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem("isAdmin");
    localStorage.removeItem("isLogged");

    window.location.href = '/login';
}


export default exit;
