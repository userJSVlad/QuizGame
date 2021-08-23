let getUserInfo = async () => {
   let login = document.querySelector('._login')
   let password = document.querySelector('._password')
   let email = document.querySelector('._email')
   let eror = document.querySelector('.reg_eror-login')
   let headerAccount = document.querySelector('.gams__tititl')

   let response = await fetch('http://quiz.social-server.online/registration', {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({
         username: checkLogin(),
         email: checkEmail(),
         password: checkPassword()
      })
   });

   try {
      let result = await response.json();
      console.log(result.message)
      if (result.message == 'Пользователь с таким именем уже есть') {
         eror.textContent = 'Такой логин уже существует';
         login.classList.add('reg__eror');
         return
      } else if(result.message == 'Registration eror'){
         return
      }
      window.location.href = "http://localhost:8010/#";
      localStorage.setItem('registration', 'true')
      localStorage.setItem('user', login.value)
      eror.textContent = ''
      login.classList.remove('reg__eror');

   } catch (error) {
      console.log(error)
   }

}

let checkLogin = () => {
   let eror = document.querySelector('.reg_eror-login')
   let login = document.querySelector('._login')
   if (login.value == '') {
      eror.textContent = 'Введите логин';
      login.classList.add('reg__eror');
      return
   }
   eror.textContent = ''
   login.classList.remove('reg__eror');
   return login.value.trim().toLowerCase();
}


let checkPassword = () => {
   let eror = document.querySelector('.reg_eror-password')
   let password = document.querySelector('._password')
   if (password.value == '') {
      eror.textContent = 'Введите пароль';
      password.classList.add('reg__eror');
      return
   }
   eror.textContent = ''
   password.classList.remove('reg__eror');
   return password.value.trim().toLowerCase();
}


let checkEmail = () => {
   let eror = document.querySelector('.reg_eror-email')
   let email = document.querySelector('._email')
   let check = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
   if (email.value == '') {
      eror.textContent = 'Введите email';
      email.classList.add('reg__eror');
      return false
   } if (check.test(email.value)) {
      eror.textContent = 'Ошибка Email';
      email.classList.add('reg__eror');
      return false
   } else {
      eror.textContent = ''
      email.classList.remove('reg__eror');
      return email.value.trim().toLowerCase();
   }

}


export { getUserInfo, checkLogin, checkEmail, checkPassword };