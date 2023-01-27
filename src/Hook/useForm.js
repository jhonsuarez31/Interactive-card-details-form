import { useEffect, useState } from "react";

export const useForm = (initialForm, validateForm) => {
  const [Form, setForm] = useState(initialForm);
  const [Error, setError] = useState({});
  const [exito, setexito] = useState(false);

  const onInputChangue = (event) => {
    const { name, value } = event.target;

    setForm({
      ...Form,
      [name]: value,
    });
  };
  

  const onSubmit = (event) => {
    event.preventDefault();
    setError(validateForm(Form));
    setexito(true)
  };

  
  
  
  
  const onResetForm = (input) => {
    for (const key in initialForm) {
      if (Object.hasOwnProperty.call(initialForm, key)) {
        if (input === key) {
          setForm({
            ...Form,
            [key]: initialForm[key],
          });
        }
      }
    }
  };

  const reset = () =>{
    setForm(initialForm)
    setError({})
    setexito(false)
  }
  return {
    ...Form,
    Form,
    Error,
    exito,
    reset,
    onInputChangue,
    onResetForm,
    onSubmit,
  };
};
