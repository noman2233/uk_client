import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import styles from "./CheckoutPage.module.css";
import InputComponent from "../../components/InputComponent/InputComponent";

const CheckoutSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  address: Yup.string().required("Required"),
  city: Yup.string().required("Required"),
  zipCode: Yup.string().required("Required"),
  cardNumber: Yup.string().min(16, "Invalid Card").required("Required"),
  expiry: Yup.string().required("Required"),
  cvv: Yup.string().min(3, "Invalid").required("Required"),
});

const CheckoutPage: React.FC = () => {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        {/* LEFT COLUMN: FORM */}
        <div className={styles.formColumn}>
          <Formik
            initialValues={{
              email: "",
              firstName: "",
              lastName: "",
              address: "",
              city: "",
              zipCode: "",
              cardNumber: "",
              expiry: "",
              cvv: "",
            }}
            validationSchema={CheckoutSchema}
            onSubmit={(values) => console.log(values)}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
            }) => (
              <form onSubmit={handleSubmit} className={styles.form}>
                <h3 className={styles.heading}>Checkout Form </h3>

                <section>
                  <h3 className={styles.sectionHeading}>Contact</h3>
                  <InputComponent
                    label="Email or mobile phone number"
                    placeholder="Email"
                    value={values.email}
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    error={touched.email && errors.email ? errors.email : ""}
                  />
                </section>

                <section className={styles.deliverySection}>
                  <h3 className={styles.sectionHeading}>Delivery</h3>
                  <div className={styles.row}>
                    <InputComponent
                      label="First name"
                      placeholder="First name"
                      value={values.firstName}
                      onChangeText={handleChange("firstName")}
                      onBlur={handleBlur("firstName")}
                      error={
                        touched.firstName && errors.firstName
                          ? errors.firstName
                          : ""
                      }
                    />
                    <InputComponent
                      label="Last name"
                      placeholder="Last name"
                      value={values.lastName}
                      onChangeText={handleChange("lastName")}
                      onBlur={handleBlur("lastName")}
                      error={
                        touched.lastName && errors.lastName
                          ? errors.lastName
                          : ""
                      }
                    />
                  </div>
                  <InputComponent
                    label="Address"
                    placeholder="Address"
                    value={values.address}
                    onChangeText={handleChange("address")}
                    onBlur={handleBlur("address")}
                    error={
                      touched.address && errors.address ? errors.address : ""
                    }
                  />
                  <div className={styles.row}>
                    <InputComponent
                      label="City"
                      placeholder="City"
                      value={values.city}
                      onChangeText={handleChange("city")}
                      onBlur={handleBlur("city")}
                      error={touched.city && errors.city ? errors.city : ""}
                    />
                    <InputComponent
                      label="ZIP code"
                      placeholder="ZIP code"
                      value={values.zipCode}
                      onChangeText={handleChange("zipCode")}
                      onBlur={handleBlur("zipCode")}
                      error={
                        touched.zipCode && errors.zipCode ? errors.zipCode : ""
                      }
                    />
                  </div>
                </section>

                <section className={styles.paymentSection}>
                  <h3 className={styles.sectionHeading}>Payment</h3>
                  <div className={styles.cardBox}>
                    <InputComponent
                      label="Card Number"
                      placeholder="Card number"
                      value={values.cardNumber}
                      onChangeText={handleChange("cardNumber")}
                      onBlur={handleBlur("cardNumber")}
                      error={
                        touched.cardNumber && errors.cardNumber
                          ? errors.cardNumber
                          : ""
                      }
                    />
                    <div className={styles.row}>
                      <InputComponent
                        label="Expiration (MM/YY)"
                        placeholder="MM / YY"
                        value={values.expiry}
                        onChangeText={handleChange("expiry")}
                        onBlur={handleBlur("expiry")}
                      />
                      <InputComponent
                        label="Security code"
                        placeholder="CVV"
                        value={values.cvv}
                        onChangeText={handleChange("cvv")}
                        onBlur={handleBlur("cvv")}
                      />
                    </div>
                  </div>
                </section>

                <button type="submit" className={styles.payBtn}>
                  Pay now
                </button>
              </form>
            )}
          </Formik>
        </div>

        {/* RIGHT COLUMN: ORDER SUMMARY */}
        <aside className={styles.summaryColumn}>
          <div className={styles.productRow}>
            <div className={styles.imgBadge}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJywmX6_cuCdaeNrWLcqivroyL_IbBVYOPew&s"
                alt="Sopha Nest"
                className={styles.checkout_image}
              />
              <span>1</span>
            </div>
            <span className={styles.prodName}>Sopha Nest</span>
            <span className={styles.prodPrice}>$40.00</span>
          </div>
          <hr />
          <div className={styles.giftBox}>
            <input
              type="text"
              placeholder="Gift Card"
              className={styles.giftInput}
            />
            <button className={styles.giftButton}>Apply</button>
          </div>
          <div className={styles.totalRow}>
            <span className={styles.shippingHeading}>Sub Total</span>
            <span className={styles.shippingHeading}>
              <span>USD</span>$40.00
            </span>
          </div>
          <div className={styles.totalRow}>
            <span className={styles.shippingHeading}>Shipping</span>
            <span className={styles.shippingHeading}>
              <span>USD</span>$3.00
            </span>
          </div>
          <div className={styles.totalRow}>
            <span className={styles.totalHeading}>Total</span>
            <span className={styles.finalAmount}>
              <span>USD</span>$43.00
            </span>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default CheckoutPage;
