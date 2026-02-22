import React from "react";
import { Formik, Form } from "formik";
import styles from "./ResetPassword.module.css";
import * as Yup from "yup";

// interface FormValues {
//   password: "";
//   confirmPassword: "";
// }

const ResetPasswordSchema = Yup.object().shape({
  password: Yup.string()
    .trim()
    .min(8, "Too Short!")
    .matches(/[a-z]/, "Must contain lowercase")
    .matches(/[A-Z]/, "Must contain uppercase")
    .matches(/[0-9]/, "Must contain a number")
    .matches(/[@$!%*?&]/, "Must contain a symbol")
    .required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Required"),
  username: Yup.string().trim().required("Required"),
  email: Yup.string()
    .trim()
    .lowercase()
    .email("Invalid email format")
    .required("Email is required"),
});

const SignUp: React.FC = () => {
  const handleSubmitForm = (values: any) => {
    console.log("New Password Data:", values);
    // Logic for JWT update would go here
  };

  return (
    <section className={styles.bodyWrapper}>
      <div className={styles.container}>
        <div className={styles.passwordCard}>
          <h2 className={styles.title}>Create You Account</h2>
          <p className={styles.subtitle}>
           Create an account to save your progress
          </p>

          <Formik
            initialValues={{
              username: "",
              email: "",
              password: "",
              confirmPassword: "",
            }}
            validationSchema={ResetPasswordSchema}
            onSubmit={handleSubmitForm}
          >
            {({
              handleChange,
              handleBlur,
              values,
              errors,
              touched,
              isSubmitting,
            }) => (
              <Form className={styles.form}>
                <div className={styles.inputGroup}>
                  <label>Username </label>
                  <div className={styles.inputWrapper}>
                    <input
                      type="username"
                      name="username"
                      placeholder="Enter new Name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.username}
                      className={
                        touched.username && errors.username
                          ? styles.errorInput
                          : ""
                      }
                    />
                    {/* <span className={styles.eyeIcon}>
                      <IoEye/>
                    </span> */}
                  </div>
                  {touched.username && errors.username && (
                    <span className={styles.errorText}>{errors.username}</span>
                  )}
                </div>
                <div className={styles.inputGroup}>
                  <label>Enter Your Email</label>
                  <div className={styles.inputWrapper}>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter Your Email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      className={
                        touched.email && errors.email
                          ? styles.errorInput
                          : ""
                      }
                    />
                    {/* <span className={styles.eyeIcon}>👁️</span> */}
                  </div>
                  {touched.email && errors.email && (
                    <span className={styles.errorText}>
                      {errors.email}
                    </span>
                  )}
                </div>
                <div className={styles.inputGroup}>
                  <label>Enter Your Password</label>
                  <div className={styles.inputWrapper}>
                    <input
                      type="password"
                      name="password"
                      placeholder="Enter Your Password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      className={
                        touched.password && errors.password
                          ? styles.errorInput
                          : ""
                      }
                    />
                    {/* <span className={styles.eyeIcon}>👁️</span> */}
                  </div>
                  {touched.password && errors.password && (
                    <span className={styles.errorText}>
                      {errors.password}
                    </span>
                  )}
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
                      className={
                        touched.confirmPassword && errors.confirmPassword
                          ? styles.errorInput
                          : ""
                      }
                    />
                    {/* <span className={styles.eyeIcon}>👁️</span> */}
                  </div>
                  {touched.confirmPassword && errors.confirmPassword && (
                    <span className={styles.errorText}>
                      {errors.confirmPassword}
                    </span>
                  )}
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

export default SignUp;
