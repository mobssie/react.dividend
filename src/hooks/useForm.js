import { useState } from 'react';

const useForm = () => {
  const [values, setValues] = useState({
    rowId: '',
    date: '',
    stocksNm: '', // 종목명
    currency: 'USD', // 통화
    exchangeRate: 0, // 환률
    incomeDate: '', // 입금일
    dividendPrice: 0, // 배당금
    standardPrice: 'KRW', // 원화환산
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