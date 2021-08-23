let getDataLogin = async () => {
   let login = document.querySelector('._log')
   let password = document.querySelector('._pasw')
   let eror = document.querySelector('.login_eror-login')

   let response = await fetch('http://quiz.social-server.online/login', {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({
         username: checkLogin(),
         password: checkPassword()
      })
   });

   try {
      let result = await response.json();
      console.log(result.message)
      if(result.message === undefined){
         window.location.href = "http://localhost:8010/#";
         localStorage.setItem('registration', 'true')
         eror.textContent = ''
         login.classList.remove('login__eror');   
      }     
      eror.textContent = 'Ошибка ввода логина'
      login.classList.add('login__eror');   

   } catch (error) {
      console.log(error)
   }

}

let checkLogin = () => {
   let eror = document.querySelector('.login_eror-login')
   let login = document.querySelector('._log')
   if (login.value == '') {
      eror.textContent = 'Введите логин';
      login.classList.add('login__eror');
      return
   }
   eror.textContent = ''
   login.classList.remove('login__eror');
   return login.value.trim().toLowerCase();
}


let checkPassword = () => {
   let eror = document.querySelector('.login_eror-password')
   let password = document.querySelector('._pasw')
   if (password.value == '') {
      eror.textContent = 'Введите пароль';
      password.classList.add('login__eror');
      return
   }
   eror.textContent = ''
   password.classList.remove('rlogin__eror');
   return password.value.trim().toLowerCase();
}

export {getDataLogin};