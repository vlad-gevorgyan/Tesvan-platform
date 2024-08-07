import React, { createContext, useContext, useState } from 'react';

const FormDataContext = createContext();

export function FormDataProvider({ children }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    birthday: '',
    gender: '',
    country: '',
    city: '',
    englishLevel: '',
    education: '',
    backgroundInQA: '',
    password: '',
    role: 'Student'
  });

  return (
    <FormDataContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormDataContext.Provider>
  );
}

export function useFormData() {
  return useContext(FormDataContext);
}
