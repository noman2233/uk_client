import React from "react";
import { Formik, Form } from "formik";
import styles from "./AccountDetails.module.css";
import * as Yup from "yup";
import InputComponent from "../../../components/InputComponent/InputComponent";

const AccountSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  displayName: Yup.string().required("Display name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  // Use .nullable() or check for empty strings
  currentPassword: Yup.string()
    .required("Current password is required")
    .transform((value) => (value === "" ? null : value))
    .nullable()
    .min(8, "Too short"),

  newPassword: Yup.string()
    .required("New password is required")
    .transform((value) => (value === "" ? null : value))
    .nullable()
    .min(8, "Too short"),

  confirmPassword: Yup.string()
    .required("Confirm New password")
    .transform((value) => (value === "" ? null : value))
    .nullable()
    .oneOf([Yup.ref("newPassword")], "Passwords must match"),
});

const AccountDetails: React.FC = () => {
  const handleSubmitForm = () => {
    console.log("Account Update Data:");
  };

  return (
    <main className={styles.mainContent}>
      <div className={styles.formCard}>
        <header className={styles.formHeader}>
          <h2 className={styles.sectionTitle}>Address Details</h2>
          <p className={styles.sectionSubtitle}>
            Confirm where you'd like your order to be delivered.
          </p>
        </header>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            displayName: "",
            email: "",
            currentPassword: "",
            newPassword: "",
            confirmPassword: "",
          }}
          validationSchema={AccountSchema}
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
              <div className={styles.row}>
                <InputComponent
                  label="First Name"
                  value={values.firstName}
                  onChangeText={handleChange("firstName")}
                  onBlur={handleBlur("firstName")}
                  error={
                    touched.firstName && errors.firstName
                      ? String(errors.firstName)
                      : undefined
                  }
                />
                <InputComponent
                  label="Last Name"
                  value={values.lastName}
                  onChangeText={handleChange("lastName")}
                  onBlur={handleBlur("lastName")}
                  error={
                    touched.lastName && errors.lastName
                      ? String(errors.lastName)
                      : undefined
                  }
                />
              </div>

              <InputComponent
                label="Display Name"
                value={values.displayName}
                onChangeText={handleChange("displayName")}
                onBlur={handleBlur("displayName")}
                error={
                  touched.displayName && errors.displayName
                    ? String(errors.displayName)
                    : undefined
                }
              />

              <InputComponent
                label="Email Address"
                type="email"
                value={values.email}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                error={
                  touched.email && errors.email
                    ? String(errors.email)
                    : undefined
                }
              />

              <div className={styles.spacer} />
              <h3 className={styles.subHeading}>Password Change</h3>

              <InputComponent
                label="Current Password (leave blank to leave unchanged)"
                type="password"
                value={values.currentPassword}
                onChangeText={handleChange("currentPassword")}
                onBlur={handleBlur("currentPassword")}
                error={
                  touched.currentPassword && errors.currentPassword
                    ? String(errors.currentPassword)
                    : undefined
                }
              />

              <InputComponent
                label="New Password (leave blank to leave unchanged)"
                type="password"
                value={values.newPassword}
                onChangeText={handleChange("newPassword")}
                onBlur={handleBlur("newPassword")}
                error={
                  touched.newPassword && errors.newPassword
                    ? String(errors.newPassword)
                    : undefined
                }
              />

              <InputComponent
                label="Confirm New Password"
                type="password"
                value={values.confirmPassword}
                onChangeText={handleChange("confirmPassword")}
                onBlur={handleBlur("confirmPassword")}
                error={
                  touched.confirmPassword && errors.confirmPassword
                    ? String(errors.confirmPassword)
                    : undefined
                }
              />

              <button
                type="submit"
                className={styles.saveBtn}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Saving..." : "Save Changes"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </main>
  );
};

export default AccountDetails;
