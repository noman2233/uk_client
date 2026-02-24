import React from "react";
import styles from "./InputComponent.module.css";

interface InputProps {
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (e: React.ChangeEvent<any>) => void;
  onBlur: (e: any) => void;
  error?: string ;
  type?: string;
  isMultiline?: boolean;
}

const InputComponent: React.FC<InputProps> = ({
  label,
  placeholder,
  value,
  onChangeText,
  onBlur,
  error,
  type = "text",
  isMultiline = false,
}) => {
  return (
    <div className={styles.inputWrapper}>
      <label className={styles.label}>{label}</label>
      {isMultiline ? (
        <textarea
          className={`${styles.input} ${error ? styles.inputError : ""}`}
          placeholder={placeholder}
          value={value}
          onChange={onChangeText}
          onBlur={onBlur}
          rows={4}
        />
      ) : (
        <input
          className={`${styles.input} ${error ? styles.inputError : ""}`}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChangeText}
          onBlur={onBlur}
        />
      )}
      {error && <span className={styles.errorText}>{error}</span>}
    </div>
  );
};

export default InputComponent;
