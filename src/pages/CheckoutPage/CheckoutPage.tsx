// import React, { useState } from "react";
// import { Formik, Form } from "formik";
// import styles from "./CheckoutPage.module.css";
// import { BiCheck, BiCreditCard, BiUser } from "react-icons/bi";
// import { BsArrowLeft, BsArrowRight, BsShieldCheck } from "react-icons/bs";
// import * as Yup from "yup";
// import InputComponent from "../../components/InputComponent/InputComponent";

// // Validation Schema updated for 3 steps
// const CheckoutSchema = Yup.object().shape({
//   fullName: Yup.string().required("Required"),
//   email: Yup.string().email("Invalid email").required("Required"),
//   phoneNumber: Yup.string().required("Required"),
//   billingAddress: Yup.string().required("Required"),
//   city: Yup.string().required("Required"),
//   postCode: Yup.string().required("Required"),
//   // Step 2 validation
//   shippingAddress: Yup.string().when([], {
//     is: () => true, // logic to check current step can be added here
//     then: (schema) => schema.required("Required"),
//   }),
// });

// const CheckoutForm: React.FC = () => {
//   const [step, setStep] = useState(1);
//   const totalSteps = 3;

//   // Dynamic progress line calculation
//   const progressWidth = ((step - 1) / (totalSteps - 1)) * 100;

//   const billingFields = [
//     { name: "fullName", label: "Full Name" },
//     { name: "email", label: "Email address" },
//     { name: "phoneNumber", label: "Phone Number" },
//     { name: "billingAddress", label: "Billing Address" },
//     { name: "city", label: "City" },
//     { name: "postCode", label: "Post Code" },
//   ];

//   return (
//     <div className={styles.mainContainer}>
//       <div className={styles.pageContainer}>
//         {/* Pixel-Perfect Stepper */}
//         <div className={styles.stepperWrapper}>
//           <div className={styles.stepperLineBackground}>
//             <div
//               className={styles.stepperLineProgress}
//               style={{ width: `${progressWidth}%` }}
//             />
//           </div>
//           <div className={styles.stepsContainer}>
//             <div className={`${styles.stepCircle} ${step >= 1 ? styles.activeStep : ""}`}>
//               <BiUser size={20} />
//             </div>
//             <div className={`${styles.stepCircle} ${step >= 2 ? styles.activeStep : ""}`}>
//               <BiCreditCard size={20} />
//             </div>
//             <div className={`${styles.stepCircle} ${step >= 3 ? styles.activeStep : ""}`}>
//               <BiCheck size={20} />
//             </div>
//           </div>
//         </div>

//         <Formik
//           initialValues={{
//             fullName: "", email: "", phoneNumber: "", billingAddress: "", city: "", postCode: "",
//             shippingAddress: "", cityShipping: "", postCodeShipping: "",
//             deliveryMethod: "standard", courier: "fedex",
//             cardNumber: "", expiry: "", cvv: ""
//           }}
//           validationSchema={CheckoutSchema}
//           onSubmit={(values) => console.log("Submission:", values)}
//         >
//           {({ handleChange, handleBlur, values, errors, touched }) => (
//             <Form className={styles.formContainer}>
//               <header className={styles.header}>
//                 <h2 className={styles.title}>
//                   {step === 1 && "Billing Information"}
//                   {step === 2 && "Shipping Information"}
//                   {step === 3 && "Payment Details"}
//                 </h2>
//                 <p className={styles.subtitle}>
//                   {step === 1 && "Please enter your billing details below."}
//                   {step === 2 && "Confirm where you'd like your order to be delivered."}
//                   {step === 3 && "Complete your purchase securely."}
//                 </p>
//               </header>

//               <div className={styles.card}>
//                 {/* Dynamic Content based on Step */}
//                 {step === 1 && (
//                   <div className={styles.grid}>
//                     {billingFields.map((field) => (
//                       <InputComponent
//                         key={field.name}
//                         label={field.label}
//                         value={(values as any)[field.name]}
//                         onChangeText={handleChange(field.name)}
//                         onBlur={handleBlur(field.name)}
//                         error={(touched as any)[field.name] && (errors as any)[field.name]}
//                       />
//                     ))}
//                   </div>
//                 )}

//                 {step === 2 && (
//                   <div className={styles.shippingContent}>
//                     <InputComponent
//                       label="Shipping Address"
//                       value={values.shippingAddress}
//                       onChangeText={handleChange("shippingAddress")}
//                       onBlur={handleBlur("shippingAddress")}
//                     />
//                     <div className={styles.grid}>
//                       <InputComponent label="City" value={values.cityShipping} onChangeText={handleChange("cityShipping")} onBlur={handleBlur("cityShipping")} />
//                       <InputComponent label="Post Code" value={values.postCodeShipping} onChangeText={handleChange("postCodeShipping")} onBlur={handleBlur("postCodeShipping")} />
//                     </div>

//                     <h4 className={styles.sectionLabel}>Choose your delivery method:</h4>
//                     <div className={styles.selectionGrid}>
//                       <label className={`${styles.selectionCard} ${values.deliveryMethod === 'standard' ? styles.cardActive : ''}`}>
//                         <input type="radio" name="deliveryMethod" value="standard" checked={values.deliveryMethod === "standard"} onChange={handleChange} />
//                         <div className={styles.selectionText}>
//                           <strong>Standard Delivery</strong>
//                           <span>(3-5 business days)</span>
//                         </div>
//                       </label>
//                       <label className={`${styles.selectionCard} ${values.deliveryMethod === 'express' ? styles.cardActive : ''}`}>
//                         <input type="radio" name="deliveryMethod" value="express" checked={values.deliveryMethod === "express"} onChange={handleChange} />
//                         <div className={styles.selectionText}>
//                           <strong>Express Delivery</strong>
//                           <span>(1-2 business days)</span>
//                         </div>
//                       </label>
//                     </div>

//     {/* <h4 className={styles.sectionLabel}>Choose your courier:</h4>
//     <div className={styles.courierRow}>
//       {['fedex', 'parcel', 'ups'].map((courier) => (
//         <label key={courier} className={`${styles.courierCard} ${values.courier === courier ? styles.cardActive : ''}`}>
//           <input type="radio" name="courier" value={courier} checked={values.courier === courier} onChange={handleChange} />
//           <img src={`/assets/${courier}.png`} alt={courier} className={styles.courierLogo} />
//         </label>
//       ))}
//     </div> */}
//   </div>
// )}

//                 {step === 3 && (
//                   <div className={styles.paymentContent}>
//                      <InputComponent label="Card Number" placeholder="0000 0000 0000 0000" value={values.cardNumber} onChangeText={handleChange("cardNumber")} onBlur={handleBlur("cardNumber")} />
//                      <div className={styles.grid}>
//                         <InputComponent label="Expiry Date" placeholder="MM/YY" value={values.expiry} onChangeText={handleChange("expiry")} onBlur={handleBlur("expiry")} />
//                         <InputComponent label="CVV" placeholder="123" value={values.cvv} onChangeText={handleChange("cvv")} onBlur={handleBlur("cvv")} />
//                      </div>
//                   </div>
//                 )}

//                 <footer className={styles.cardFooter}>
//                   {step > 1 ? (
//                     <button type="button" className={styles.backBtn} onClick={() => setStep(step - 1)}>
//                       <BsArrowLeft /> Back to {step === 2 ? "Billing" : "Shipping"}
//                     </button>
//                   ) : <div />}

//                   <div className={styles.footerRight}>
//                     <div className={styles.securityNote}>
//                       <BsShieldCheck /> <span>Your details are secure</span>
//                     </div>
//                     <button
//                       type="button"
//                       className={styles.primaryBtn}
//                       onClick={() => step < totalSteps ? setStep(step + 1) : console.log("Submit")}
//                     >
//                       {step === totalSteps ? "Complete Order" : "Continue to " + (step === 1 ? "Shipping" : "Payment")}
//                       <BsArrowRight />
//                     </button>
//                   </div>
//                 </footer>
//               </div>
//             </Form>
//           )}
//         </Formik>
//       </div>
//     </div>
//   );
// };

// export default CheckoutForm;

import React, { useState } from "react";
import { Formik, Form } from "formik";
import styles from "./CheckoutPage.module.css";
import { BiCheck, BiCreditCard, BiUser } from "react-icons/bi";
import { BsArrowLeft, BsArrowRight, BsShieldCheck } from "react-icons/bs";
import * as Yup from "yup";
import InputComponent from "../../components/InputComponent/InputComponent";

const CheckoutSchema = Yup.object().shape({
  fullName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phoneNumber: Yup.string().required("Required"),
  billingAddress: Yup.string().required("Required"),
  city: Yup.string().required("Required"),
  postCode: Yup.string().required("Required"),
});

const CheckoutForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const totalSteps = 3;

  // Calculates the progress line width based on the current step
  const progressWidth = ((step - 1) / (totalSteps - 1)) * 100;

  const billingFields = [
    { name: "fullName", label: "Full Name" },
    { name: "email", label: "Email address" },
    { name: "phoneNumber", label: "Phone Number" },
    { name: "billingAddress", label: "Billing Address" },
    { name: "city", label: "City" },
    { name: "postCode", label: "Post Code" },
  ];

  return (
    <div className={styles.mainContainer}>
      <div className={styles.pageContainer}>
        {/* Step Progress Bar */}
        <div className={styles.stepperWrapper}>
          <div className={styles.stepperLineBackground}>
            <div
              className={styles.stepperLineProgress}
              style={{ width: `${progressWidth}%` }}
            />
          </div>
          <div className={styles.stepsContainer}>
            <div
              className={`${styles.stepCircle} ${
                step >= 1 ? styles.activeStep : ""
              }`}
            >
              <BiUser size={20} />
            </div>
            <div
              className={`${styles.stepCircle} ${
                step >= 2 ? styles.activeStep : ""
              }`}
            >
              <BiCreditCard size={20} />
            </div>
            <div
              className={`${styles.stepCircle} ${
                step >= 3 ? styles.activeStep : ""
              }`}
            >
              <BiCheck size={20} />
            </div>
          </div>
        </div>

        <Formik
          initialValues={{
            fullName: "",
            email: "",
            phoneNumber: "",
            billingAddress: "",
            city: "",
            postCode: "",
            shippingAddress: "",
            cityShipping: "",
            postCodeShipping: "",
            deliveryMethod: "standard",
            courier: "fedex",
            paymentMethod: "credit",
            cardholderName: "",
            cardNumber: "",
            expiry: "",
            cvv: "",
            sameAddress: false,
          }}
          validationSchema={CheckoutSchema}
          onSubmit={(values) => console.log("Final Data:", values)}
        >
          {({ handleChange, handleBlur, values, errors, touched }) => (
            <Form className={styles.formContainer}>
              <header className={styles.header}>
                <h2 className={styles.title}>
                  {step === 1 && "Billing Information"}
                  {step === 2 && "Shipping Information"}
                  {step === 3 && "Payment Details"}
                </h2>
                <p className={styles.subtitle}>
                  {step === 1 && "Please enter your billing details below."}
                  {step === 2 &&
                    "Confirm where you'd like your order to be delivered."}
                  {step === 3 && "Securely complete your purchase."}
                </p>
              </header>

              <div className={styles.card}>
                {/* STEP 1: BILLING (STRICT GRID) */}
                {step === 1 && (
                  <div className={styles.billingGrid}>
                    {billingFields.map((field) => (
                      <InputComponent
                        key={field.name}
                        label={field.label}
                        value={(values as any)[field.name]}
                        onChangeText={handleChange(field.name)}
                        onBlur={handleBlur(field.name)}
                        error={
                          (touched as any)[field.name] &&
                          (errors as any)[field.name]
                        }
                      />
                    ))}
                  </div>
                )}

                {/* STEP 2: SHIPPING */}
                {step === 2 && (
                  <div className={styles.shippingContent}>
                    <div className={styles.fullWidthRow}>
                      <InputComponent
                        label="Shipping Address"
                        value={values.shippingAddress}
                        onChangeText={handleChange("shippingAddress")}
                        onBlur={handleBlur("shippingAddress")}
                      />
                    </div>
                    <div className={styles.billingGrid}>
                      <InputComponent
                        label="City"
                        value={values.cityShipping}
                        onChangeText={handleChange("cityShipping")}
                        onBlur={handleBlur("cityShipping")}
                      />
                      <InputComponent
                        label="Post Code"
                        value={values.postCodeShipping}
                        onChangeText={handleChange("postCodeShipping")}
                        onBlur={handleBlur("postCodeShipping")}
                      />
                    </div>

                    <h4 className={styles.sectionLabel}>
                      Choose your delivery method:
                    </h4>
                    <div className={styles.billingGrid}>
                      <label
                        className={`${styles.selectionCard} ${
                          values.deliveryMethod === "standard"
                            ? styles.cardActive
                            : ""
                        }`}
                      >
                        <input
                          type="radio"
                          name="deliveryMethod"
                          value="standard"
                          checked={values.deliveryMethod === "standard"}
                          onChange={handleChange}
                        />
                        <div className={styles.selectionText}>
                          <strong>Standard Delivery</strong>
                          <span>(3-5 business days)</span>
                        </div>
                      </label>
                      <label
                        className={`${styles.selectionCard} ${
                          values.deliveryMethod === "express"
                            ? styles.cardActive
                            : ""
                        }`}
                      >
                        <input
                          type="radio"
                          name="deliveryMethod"
                          value="express"
                          checked={values.deliveryMethod === "express"}
                          onChange={handleChange}
                        />
                        <div className={styles.selectionText}>
                          <strong>Express Delivery</strong>
                          <span>(1-2 business days)</span>
                        </div>
                      </label>
                    </div>
                    <h4 className={styles.sectionLabel}>
                      Choose your courier:
                    </h4>
                    <div className={styles.courierRow}>
                      {["fedex", "parcel", "ups"].map((courier) => (
                        <label
                          key={courier}
                          className={`${styles.courierCard} ${
                            values.courier === courier ? styles.cardActive : ""
                          }`}
                        >
                          <input
                            type="radio"
                            name="courier"
                            value={courier}
                            checked={values.courier === courier}
                            onChange={handleChange}
                          />
                          <img
                            // src={`/assets/${courier}.png`}
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJYErMR2E0YtLswvIBhR8E-E3O7FNL4WVW-Q&s"
                            alt={courier}
                            className={styles.courierLogo}
                          />
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                {/* STEP 3: PAYMENT PLACEHOLDER */}
         {step === 3 && (
  <div className={styles.paymentSection}>
    {/* Payment Method Selection */}
    <div className={styles.paymentMethodsList}>
      <label className={`${styles.paymentOption} ${values.paymentMethod === 'credit' ? styles.cardActive : ''}`}>
        <div className={styles.optionLeft}>
          <input type="radio" name="paymentMethod" value="credit" checked={values.paymentMethod === 'credit'} onChange={handleChange} />
          <span>Credit / Debit Card</span>
        </div>
        <div className={styles.optionRight}>
          <img src="https://images.seeklogo.com/logo-png/24/2/visa-logo-png_seeklogo-244624.png" alt="Visa Mastercard" className={styles.methodIcon} />
        </div>
      </label>

      <label className={`${styles.paymentOption} ${values.paymentMethod === 'paypal' ? styles.cardActive : ''}`}>
        <div className={styles.optionLeft}>
          <input type="radio" name="paymentMethod" value="paypal" checked={values.paymentMethod === 'paypal'} onChange={handleChange} />
          <span>PayPal</span>
        </div>
        <div className={styles.optionRight}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZWw9b3lMV-OafGoywJzxAJam3eyUcJBSj0g&s" alt="PayPal" className={styles.methodIcon} />
        </div>
      </label>

      <label className={`${styles.paymentOption} ${values.paymentMethod === 'bank' ? styles.cardActive : ''}`}>
        <div className={styles.optionLeft}>
          <input type="radio" name="paymentMethod" value="bank" checked={values.paymentMethod === 'bank'} onChange={handleChange} />
          <span>Bank Transfer</span>
        </div>
        <div className={styles.optionRight}>
           {/* <BiCreditCard size={20} color="#718096" /> */}
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/88a56623407179.56322f1b28682.jpg" alt="PayPal" className={styles.methodIcon} />
        </div>
      </label>
    </div>

    {/* Card Details (Using Grid) */}
    <div className={styles.cardDetailContainer}>
      <div className={styles.fullWidthInput}>
        <InputComponent label="Cardholder Name" value={values.cardholderName} onChangeText={handleChange('cardholderName')} onBlur={handleBlur('cardholderName')} />
      </div>
      <div className={styles.fullWidthInput}>
        <InputComponent label="Card Number" value={values.cardNumber} onChangeText={handleChange('cardNumber')} onBlur={handleBlur('cardNumber')} />
      </div>
      <div className={styles.billingGrid}>
        <InputComponent label="Expiry Date" placeholder="MM/YY" value={values.expiry} onChangeText={handleChange('expiry')} onBlur={handleBlur('expiry')} />
        <InputComponent label="CVV" placeholder="123" value={values.cvv} onChangeText={handleChange('cvv')} onBlur={handleBlur('cvv')} />
      </div>
    </div>

    {/* Meta Footer (Checkbox & Security) */}
    <div className={styles.paymentFooterMeta}>
      <label className={styles.checkboxLabel}>
        <input type="checkbox" name="sameAddress" checked={values.sameAddress} onChange={handleChange} />
        <span>Use same billing address for payment</span>
      </label>
      <div className={styles.securityNoteSmall}>
        <BsShieldCheck size={14} /> <span>Your payment information is encrypted and secure.</span>
      </div>
    </div>
  </div>
)}

                <footer className={styles.cardFooter}>
                  {step > 1 ? (
                    <button
                      type="button"
                      className={styles.backBtn}
                      onClick={() => setStep(step - 1)}
                    >
                      <BsArrowLeft /> Back to{" "}
                      {step === 2 ? "Billing" : "Shipping"}
                    </button>
                  ) : (
                    <div />
                  )}

                  <div className={styles.footerRight}>
                    <div className={styles.securityNote}>
                      <BsShieldCheck /> <span>Your details are secure</span>
                    </div>
                    <button
                      type="button"
                      className={styles.primaryBtn}
                      onClick={() => {
                        if (step < totalSteps) setStep(step + 1);
                        else console.log("Final Submit");
                      }}
                    >
                      {step === totalSteps
                        ? "Pay Now"
                        : "Continue to " +
                          (step === 1 ? "Shipping" : "Payment")}
                      <BsArrowRight />
                    </button>
                  </div>
                </footer>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default CheckoutForm;
