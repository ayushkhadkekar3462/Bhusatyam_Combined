import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import avatar from '../../assets/profile.png';
import toast, { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { passwordValidate } from '../../helper/validate';
import useFetch from '../../hooks/fetch.hook';
import { useAuthStore } from '../../store/store';
import { verifyPassword } from '../../helper/helper';
import styles from '../../styles/Authstyles/Password.module.css';

export default function Password() {
  const navigate = useNavigate();
  const { username } = useAuthStore((state) => state.auth);
  const [{ isLoading, apiData, serverError }] = useFetch(`/user/${username}`);

  const formik = useFormik({
    initialValues: {
      password: '',
    },
    validate: passwordValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      let loginPromise = verifyPassword({
        username,
        password: values.password,
      });
      toast.promise(loginPromise, {
        loading: 'Checking...',
        success: <b>Login Successfully...!</b>,
        error: <b>Password Not Match!</b>,
      });

      loginPromise.then((res) => {
        let { token } = res.data;
        localStorage.setItem('token', token);
        navigate('/dashboard');
      });
    },
  });

  if (isLoading) return <h1 className="text-2xl font-bold">Loading...</h1>;
  if (serverError)
    return <h1 className="text-xl text-red-500">{serverError.message}</h1>;

  return (
    <div className="container mx-auto">
      <Toaster position="top-center" reverseOrder={false} />

      <div className="flex justify-center items-center h-screen">
        <div className={styles.glass}>
          <div className="profile flex justify-center py-4">
            <img
              src={apiData?.profile || avatar}
              className={styles.profile_img}
              alt="avatar"
            />
          </div>

          <div className="title flex flex-col items-center" style={{display:"flex",justifyContent:"center",marginBottom:"10px"}}>
            <h4 className="text-4xl font-bold" style={{textAlign:"center"}}>
              Hello {apiData?.firstName || apiData?.username}
            </h4>
          </div>

          <form className={styles.form} onSubmit={formik.handleSubmit}>
            <div className="textbox flex flex-col items-center gap-6">
              <input
                {...formik.getFieldProps('password')}
                className={styles.textbox}
                type="password"
                placeholder="Password"
              />
              <button className={styles.btn} type="submit">
                Login
              </button>
            </div>

            <div className="text-center py-4">
              <span className="text-gray-500">
                Forgot Password?{' '}
                <Link className="text-green-600" to="/recovery">
                  Recover Now
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
