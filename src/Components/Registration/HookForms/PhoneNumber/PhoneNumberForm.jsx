import React, { useState, useEffect } from "react"
import { useForm } from "react-hook-form";
import styles from "./PhoneNumberForm.module.css";

const countryCodes = [
  { value: "+374", label: "ARM (+374)", length: 8 },
  { value: "+1", label: "USA (+1)", length: 10 },
  { value: "+44", label: "UK (+44)", length: 10 },
  { value: "+61", label: "Australia (+61)", length: 9 },
  { value: "+33", label: "France (+33)", length: 9 },
  { value: "+49", label: "Germany (+49)", length: 11 },
  { value: "+81", label: "Japan (+81)", length: 10 },
  { value: "+86", label: "China (+86)", length: 11 },
  { value: "+7", label: "Russia (+7)", length: 10 },
  { value: "+91", label: "India (+91)", length: 10 },
  { value: "+55", label: "Brazil (+55)", length: 11 },
  { value: "+39", label: "Italy (+39)", length: 10 },
  { value: "+82", label: "South Korea (+82)", length: 10 },
  { value: "+34", label: "Spain (+34)", length: 9 },
  { value: "+52", label: "Mexico (+52)", length: 10 },
  { value: "+90", label: "Turkey (+90)", length: 10 },
  { value: "+20", label: "Egypt (+20)", length: 10 },
  { value: "+27", label: "South Africa (+27)", length: 9 },
  { value: "+971", label: "UAE (+971)", length: 9 },
  { value: "+371", label: "Latvia (+371)", length: 8 },
];

const PhoneNumberForm = ({ onUpdate, phoneNumber: initialPhoneNumber }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const [selectedCountryCode, setSelectedCountryCode] = useState(
    countryCodes[0]
  );
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isArrowActive, setIsArrowActive] = useState(false);
  const [isValidNumber, setIsValidNumber] = useState(true);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumberValue, setPhoneNumberValue] = useState(
    "X".repeat(countryCodes[0].length)
  );
  const [isPhoneNumberEntered, setIsPhoneNumberEntered] = useState(false);

  useEffect(() => {
    setIsPhoneNumberEntered(false);
  }, [selectedCountryCode]);

  useEffect(() => {
    // Установите начальное значение номера телефона при его наличии
    if (initialPhoneNumber) {
      const countryCode = initialPhoneNumber.substring(0, 4); // Первые 4 символа - код страны
      const number = initialPhoneNumber.substring(4); // Остальные символы - номер телефона
      const selectedCountry = countryCodes.find(
        (country) => country.value === countryCode
      );
      setSelectedCountryCode(selectedCountry);
      setPhoneNumberValue(number);
      setPhoneNumber(number);
    }
  }, [initialPhoneNumber]);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
    setIsArrowActive(!isArrowActive);
  };

  const handleOptionSelect = (country) => {
    if (country !== selectedCountryCode) {
      setSelectedCountryCode(country);
      const xCharacters = "X".repeat(country.length);
      setPhoneNumberValue(xCharacters);
      setPhoneNumber(xCharacters);
      setDropdownOpen(false);
      setIsArrowActive(false);

      setIsPhoneNumberEntered(false);
    }
  };

  const handlePhoneNumberChange = (event) => {
    const phoneNumber = event.target.value;
    const isValid =
      /^[0-9]+$/.test(phoneNumber) &&
      phoneNumber.length <= selectedCountryCode.length;
    setIsValidNumber(isValid);
    if (isValid) {
      setPhoneNumberValue(phoneNumber);
      setPhoneNumber(phoneNumber);
      setIsPhoneNumberEntered(true);
    }
  };

  const handlePhoneNumberBlur = () => {
    if (isPhoneNumberEntered) {
      setIsFormSubmitted(true);
      const fullPhoneNumber = `${selectedCountryCode.value}${phoneNumber}`;
      onUpdate({ phoneNumber: fullPhoneNumber });
    }
  };

  return (
    <div className={styles.Container} onClick={handlePhoneNumberBlur}>
      <label htmlFor="phoneNumber" className={styles.label}>
        Phone number
      </label>
      <form
        className={`${styles.formContainer} ${
          isFormSubmitted
            ? isValidNumber
              ? styles.validForm
              : styles.invalidForm
            : ""
        }`}
      >
        <div className={styles.inputContainer}>
          <div
            className={`${styles.select} ${dropdownOpen ? styles.active : ""}`}
            onClick={toggleDropdown}
            onBlur={() => setDropdownOpen(false)}
            tabIndex={0}
          >
            <div className={styles.selectedOption}>
              {selectedCountryCode
                ? selectedCountryCode.value
                : "Select a country code"}
            </div>
            <div
              className={`${styles.arrow} ${
                isArrowActive ? styles.active : ""
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={dropdownOpen ? styles.rotate : ""}
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            {dropdownOpen && (
              <div
                className={`${styles.customDropdownOptions} ${
                  countryCodes.length > 5 ? styles.scrollableContainer : ""
                }`}
              >
                <div className={styles.dropdownScroll}>
                  <div className={styles.dropdownOptions}>
                    {countryCodes.map((country) => (
                      <div
                        key={country.value}
                        className={`${styles.customDropdownOption} ${
                          selectedCountryCode === country ? styles.active : ""
                        }`}
                        onClick={() => handleOptionSelect(country)}
                      >
                        {country.label}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className={styles.inputContainer2}>
          <input
            type="text"
            {...register("phoneNumber")}
            className={styles.inputField}
            onChange={handlePhoneNumberChange}
            onBlur={handlePhoneNumberBlur}
            value={phoneNumber}
            maxLength={selectedCountryCode.length}
            onClick={() => setPhoneNumber("")}
            placeholder={phoneNumberValue}
          />
          {isFormSubmitted && !isValidNumber && (
            <p className={styles.errorMessage}>Phone number is not valid</p>
          )}
        </div>
      </form>
    </div>
  );
};

export default PhoneNumberForm;