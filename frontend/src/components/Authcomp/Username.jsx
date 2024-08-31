import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import avatar from '../../assets/profile.png';
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { usernameValidate } from '../../helper/validate';
import { useAuthStore } from '../../store/store';

import styles from '../../styles/Authstyles/Username.module.css';

export default function Username() {
  const navigate = useNavigate();
  const setUsername = useAuthStore((state) => state.setUsername);

  const formik = useFormik({
    initialValues: {
      username: '',
    },
    validate: usernameValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      setUsername(values.username);
      navigate('/password');
    },
  });

  return (
    <div className="container mx-auto">
      <Toaster position="top-center" reverseOrder={false} />

      <div className="flex justify-center items-center h-screen">
        <div className={styles.glass}>
          <div className="profile flex justify-center py-4">
            <img src={avatar} className={styles.profile_img} alt="avatar" />
          </div>

          <div className="title titleuser flex flex-col items-center" style={{marginBottom:"10px"}}>
            <h4 className="text-5xl font-bold text-black-600">Login</h4>
          </div>

          <form className={styles.formuser} onSubmit={formik.handleSubmit}>
            <div className="textbox flex flex-col items-center gap-6">
              <input
                {...formik.getFieldProps('username')}
                className={styles.textbox}
                type="text"
                placeholder="Username"
              />
              <button className={styles.btn} type="submit">
                Next
              </button>
            </div>

            <div className="text-center py-4">
              <span className="text-green-500">
                Not a Member?{' '}
                <Link className="text-red-600" to="/register">
                  Register Now
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
