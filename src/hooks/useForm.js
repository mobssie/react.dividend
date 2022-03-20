import { useState } from 'react';

const useForm = () => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    password2: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  function handleSubmit(e) {
    e.preventdefault();
  }
  return {
    handleChange,
    values,
    handleSubmit,
  };
};

export default useForm;