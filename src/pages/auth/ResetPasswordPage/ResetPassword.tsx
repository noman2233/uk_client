import React from 'react';
import { Formik, Form } from 'formik';
import styles from './ResetPassword.module.css';
import * as Yup from 'yup';

// interface FormValues {
//   password: "";
//   confirmPassword: "";
// }

const ResetPasswordSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, 'Too Short!')
    .matches(/[a-z]/, 'Must contain lowercase')
    .matches(/[A-Z]/, 'Must contain uppercase')
    .matches(/[0-9]/, 'Must contain a number')
    .matches(/[@$!%*?&]/, 'Must contain a symbol')
    .required('Required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Required'),
});


const ResetPassword: React.FC = () => {
  const handleSubmitForm = (values: any) => {
    console.log("New Password Data:", values);
    // Logic for JWT update would go here
  };

  return (
    <section className={styles.bodyWrapper}>
      <div className={styles.container}>
        <div className={styles.passwordCard}>
          <h2 className={styles.title}>Create a New Password</h2>
          <p className={styles.subtitle}>
            At least 8 characters with uppercase, lowercase, numbers, and symbols
          </p>

          <Formik
            initialValues={{ password: "", confirmPassword: "" }}
            validationSchema={ResetPasswordSchema}
            onSubmit={handleSubmitForm}
          >
            {({ handleChange, handleBlur, values, errors, touched, isSubmitting }) => (
              <Form className={styles.form}>
                <div className={styles.inputGroup}>
                  <label>New Password</label>
                  <div className={styles.inputWrapper}>
                    <input
                      type="password"
                      name="password"
                      placeholder="Enter new password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      className={touched.password && errors.password ? styles.errorInput : ''}
                    />
                    <span className={styles.eyeIcon}>👁️</span>
                  </div>
                  {touched.password && errors.password && <span className={styles.errorText}>{errors.password}</span>}
                </div>

                <div className={styles.inputGroup}>
                  <label>Confirm New Password</label>
                  <div className={styles.inputWrapper}>
                    <input
                      type="password"
                      name="confirmPassword"
                      placeholder="Confirm your password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.confirmPassword}
                      className={touched.confirmPassword && errors.confirmPassword ? styles.errorInput : ''}
                    />
                    <span className={styles.eyeIcon}>👁️</span>
                  </div>
                  {touched.confirmPassword && errors.confirmPassword && <span className={styles.errorText}>{errors.confirmPassword}</span>}
                </div>

                <button 
                  type="submit" 
                  className={styles.submitBtn}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Updating..." : "Continue"}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
};

export default ResetPassword;