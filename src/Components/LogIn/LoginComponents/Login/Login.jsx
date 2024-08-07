import React, { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import styles from './Login.module.css';
import Checkbox from '@mui/material/Checkbox';
import { yellow } from '@mui/material/colors';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const {
    formState: { errors },
    handleSubmit,
    reset,
    control,
    setValue,
  } = useForm({
    mode: 'onBlur',
  });

  const [isChecked, setIsChecked] = useState(false);
  const [loginError, setLoginError] = useState(null);

  const [isEmailFilled, setIsEmailFilled] = useState(false);
  const [isPasswordFilled, setIsPasswordFilled] = useState(false);


  useEffect(() => {
    const cookies = document.cookie.split(';');
    let rememberedEmail = '';
    let rememberedPassword = '';

    cookies.forEach((cookie) => {
      const parts = cookie.split('=');
      const name = parts[0].trim();
      const value = decodeURIComponent(parts[1]);
      if (name === 'rememberedEmail') {
        rememberedEmail = value;
      } else if (name === 'rememberedPassword') {
        rememberedPassword = value;
      }
    });

    if (rememberedEmail && rememberedPassword && isChecked) {
      setValue('email', rememberedEmail);
      setValue('password', rememberedPassword);
    }
  }, [isChecked, setValue]);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    if (!event.target.checked) {
      // Если флажок "Remember me" не установлен, удаляем cookies
      document.cookie = 'rememberedEmail=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      document.cookie = 'rememberedPassword=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    }
  };

  const handleEmailChange = (event) => {
    const emailValue = event.target.value;
    setIsEmailFilled(emailValue.trim() !== ''); // Проверка, заполнено ли поле email
  };
  
  const handlePasswordChange = (event) => {
    const passwordValue = event.target.value;
    setIsPasswordFilled(passwordValue.trim() !== ''); // Проверка, заполнено ли поле password
  };

  const onSubmit = async (data) => {
    try {
      if (isChecked) {
        // Если флажок "Remember me" установлен, устанавливаем cookies с учетными данными
        document.cookie = `rememberedEmail=${encodeURIComponent(data.email)}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/`;
        document.cookie = `rememberedPassword=${encodeURIComponent(data.password)}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/`;
      }

      // Отправка данных на сервер с использованием Axios
      const response = await axios.post('http://165.232.74.168/api/v2/user/login', data);

      // Обработка успешного ответа
      alert(JSON.stringify(response.data));
      reset();

      // Сброс состояний полей
      setIsEmailFilled(false);
      setIsPasswordFilled(false);
    } catch (error) {
      // Обработка ошибки при отправке
      setLoginError('Произошла ошибка при входе. Пожалуйста, проверьте ваши данные и попробуйте снова.');
    }
  };

  // 

  return (
    <div className={styles.login}>
      <h1><span>Log in</span> your account</h1>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.loginForm}>
        <label>
          <p className={styles.title}>Login</p>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <div className={styles.inputContainer}>
                <input
                  {...field}
                  className={styles.inputField}
                  placeholder="johnsmith@example@com"
                />
              </div>
            )}
          />
        </label>
        <div>
          {errors?.email && <p>{errors?.email?.message || ''}</p>}
        </div>
        <label>
          <p className={styles.title}>Password</p>
          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <div className={styles.inputContainer}>
                <input
                  {...field}
                  type="password"
                  className={styles.inputField}
                  placeholder="Enter your password"
                />
              </div>
            )}
          />
        </label>
        <div className={styles.chekboxAndForgetPassword}> 
          <div className={styles.checkboxContainer}>
            <Checkbox
              checked={isChecked}
              onChange={handleCheckboxChange}
              sx={{
                color: yellow[700],
                '&.Mui-checked': {
                  color: yellow[700],
                },
                '& .MuiSvgIcon-root': {
                  width: window.innerWidth > 480 ? '1.56vw' : '6.6vw',
                  height: window.innerWidth > 480 ? '1.56vw' : '6.6vw',
                },
              }}
            />
            <p>Remember me</p>
          </div>
          <Link to='/forgotPasswordPage'><a>Forgot password</a></Link>
        </div>
        <button
          type="submit"
          className={styles.loginBtn}
          disabled={!isEmailFilled || !isPasswordFilled || isChecked}
        >
          Log in
        </button>
        <p className={styles.singUp}>Don’t have an account? <Link to='/registration' className={styles.linksignUp}><span>Sign up</span></Link></p>
        {loginError && <p className={styles.error}>{loginError}</p>}
      </form>
    </div>
  );
};

export default Login;
