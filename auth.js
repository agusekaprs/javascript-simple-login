class Auth {

  constructor() {
    const auth = localStorage.getItem("token");
    this.validateAuth(auth);
  }

  validateAuth(token) {
    if(token===null){
      window.location.href="login.html";
    }
  }

  logOut() {
    localStorage.removeItem("token");
    window.location.href="login.html";
  }

}