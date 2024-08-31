import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import avatar from '../../assets/profile.png';
import toast, { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { registerValidation } from '../../helper/validate';
import convertToBase64 from '../../helper/convert';
import { registerUser } from '../../helper/helper';

import styles from '../../styles/Authstyles/Username.module.css';

export default function Register() {
  const navigate = useNavigate();
  const [file, setFile] = useState();

  const formik = useFormik({
    initialValues: {
      email: '',
      username: '',
      password: '',
    },
    validate: registerValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      values = await Object.assign(values, { profile: file || '' });
      let registerPromise = registerUser(values);
      toast.promise(registerPromise, {
        loading: 'Creating...',
        success: <b>Register Successfully...!</b>,
        error: <b>Could not Register.</b>,
      });

      registerPromise.then(function () {
        navigate('/signup');
      });
    },
  });

  const onUpload = async (e) => {
    const base64 = await convertToBase64(e.target.files[0]);
    setFile(base64);
  };

  return (
    <div className="container mx-auto">
      <Toaster position="top-center" reverseOrder={false} />

      <div className="flex justify-center items-center h-screen">
        <div className={styles.glass} style={{ width: '100%', maxWidth: '400px', paddingTop: '2em' }}>
          <form className="flex flex-col items-center gap-4" onSubmit={formik.handleSubmit}>
            <div className="profile flex flex-col justify-center items-center py-4">
              <label htmlFor="profile" style={{ display: "flex", justifyContent: "center", cursor: "pointer" }}>
                <img src={file || avatar} className={styles.profile_img} alt="avatar" />
              </label>
              <input onChange={onUpload} type="file" id="profile" name="profile" style={{ display: "none" }} />
              <h2 className="text-4xl font-bold mt-4">Register</h2> {/* Heading added here */}
            </div>

            <input {...formik.getFieldProps('email')} className={styles.textbox} type="text" placeholder="Email*" />
            <input {...formik.getFieldProps('username')} className={styles.textbox} type="text" placeholder="Username*" />
            <input {...formik.getFieldProps('password')} className={styles.textbox} type="password" placeholder="Password*" />
            <button className={styles.btn} type="submit">Register</button>

            <div className="text-center py-2">
              <span className="text-gray-500">Already Register? <Link className="text-red-500" to="/signup">Login Now</Link></span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
