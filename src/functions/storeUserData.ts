interface User {
    name: string;
    isAdmin: boolean;
}

function storeUserData(user: User, token: string): void {
    localStorage.setItem("token", token);
    localStorage.setItem("name", user.name);
    localStorage.setItem("isAdmin", user.isAdmin.toString());
    localStorage.setItem("isLogged", "1");
}
  
export default storeUserData;
