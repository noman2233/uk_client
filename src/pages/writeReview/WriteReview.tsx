import React from "react";
import Modal from "react-modal";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "./writeReview.module.css";
import { IoClose } from "react-icons/io5";

// Required for accessibility with react-modal
Modal.setAppElement("#root");

interface WriteReviewProps {
  modalIsOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "0",
    borderRadius: "12px",
    border: "none",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 1000,
  },
};

const WriteReview: React.FC<WriteReviewProps> = ({
  modalIsOpen,
  setIsOpen,
}) => {
  const formik = useFormik({
    initialValues: {
      rating: 0,
      comment: "",
    },
    validationSchema: Yup.object({
      rating: Yup.number()
        .min(1, "Please select at least one star")
        .required("Rating is required"),
      comment: Yup.string()
        .min(10, "Feedback must be at least 10 characters")
        .required("Feedback is required"),
    }),
    onSubmit: (values) => {
      console.log("Review Submitted:", values);
      // Here you would typically send values to your backend with your JWT
      setIsOpen(false);
      formik.resetForm();
    },
  });

  const closeModal = () => {
    setIsOpen(false);
    formik.resetForm();
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Write a Review"
    >
      <div className={styles.feedback_container}>
        <button className={styles.close_x} onClick={closeModal}>
          <IoClose className={styles.crosssIcon}/>
        </button>
        <h2 className={styles.heaidng}>Customer Feedback</h2>
        <p className={styles.desc}>Please rate your experience below</p>

        <form onSubmit={formik.handleSubmit}>
          {/* Star Rating Section */}
          <div className={styles.stars}>
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`${styles.star} ${
                  formik.values.rating >= star ? styles.active : ""
                }`}
                onClick={() => formik.setFieldValue("rating", star)}
              >
                ★
              </span>
            ))}
          </div>
          {formik.touched.rating && formik.errors.rating ? (
            <div className={styles.error_text}>{formik.errors.rating}</div>
          ) : null}

          {/* Textarea Section */}
          <textarea
            name="comment"
            placeholder="Your Feedback Here ..."
            className={`${styles.feedback_textarea} ${
              formik.touched.comment && formik.errors.comment
                ? styles.input_error
                : ""
            }`}
            value={formik.values.comment}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></textarea>
          {formik.touched.comment && formik.errors.comment ? (
            <div className={styles.error_text}>{formik.errors.comment}</div>
          ) : null}

          <button type="submit" className={styles.feedback_button}>
            Submit Feedback
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default WriteReview;
