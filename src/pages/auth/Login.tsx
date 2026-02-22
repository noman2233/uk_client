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
    .min(8, "Too Short!")
    .matches(/[a-z]/, "Must contain lowercase")
    .matches(/[A-Z]/, "Must contain uppercase")
    .matches(/[0-9]/, "Must contain a number")
    .matches(/[@$!%*?&]/, "Must contain a symbol")
    .required("Required"),

  email: Yup.string()
    .trim()
    .lowercase()
    .email("Invalid email format")
    .required("Email is required"),
});

const Login: React.FC = () => {
  const handleSubmitForm = (values: any) => {
    console.log("New Password Data:", values);
    // Logic for JWT update would go here
  };

  return (
    <section className={styles.bodyWrapper}>
      <div className={styles.container}>
        <div className={styles.passwordCard}>
          <h2 className={styles.title}>Login to Continue</h2>
          <p className={styles.subtitle}>
            At least 8 characters with uppercase, lowercase, numbers, and
            symbols
          </p>

          <Formik
            initialValues={{ password: "", email: "" }}
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
                  <label>New Password</label>
                  <div className={styles.inputWrapper}>
                    <input
                      type="password"
                      name="password"
                      placeholder="Enter new password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      className={
                        touched.password && errors.password
                          ? styles.errorInput
                          : ""
                      }
                    />
                    {/* <span className={styles.eyeIcon}>
                      <IoEye/>
                    </span> */}
                  </div>
                  {touched.password && errors.password && (
                    <span className={styles.errorText}>{errors.password}</span>
                  )}
                </div>

                <div className={styles.inputGroup}>
                  <label>Confirm New Password</label>
                  <div className={styles.inputWrapper}>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      className={
                        touched.email && errors.email ? styles.errorInput : ""
                      }
                    />
                    {/* <span className={styles.eyeIcon}>👁️</span> */}
                  </div>
                  {touched.email && errors.email && (
                    <span className={styles.errorText}>{errors.email}</span>
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

export default Login;
