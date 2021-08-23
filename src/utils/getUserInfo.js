import { getUserInfo } from "./postDataRegistrtion";

let getUserLogin = async () =>{
  let login = localStorage.getItem('user')
  let url = 'http://quiz.social-server.online/users'
  fetch(`${url}/${login}`)
  .then((response) => {
    return response.json();
  })
  .then((data)  => {
    console.log(data)
  });
}


export {getUserLogin}