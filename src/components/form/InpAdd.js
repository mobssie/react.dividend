// import React, { useState, useEffect } from "react";
// import styled from 'styled-components';
// import DatePicker from "react-datepicker";
// import { subMonths, addMonths } from 'date-fns';
// import 'react-datepicker/dist/react-datepicker.css';
// import { firestore } from "../../firebase";
// import useForm from "../../hooks/useForm";

// const devidend = firestore.collection('devidend');

// const Button = styled.button`
//   background: ${props => props.primary ? '#db7093' : '#fff'};
//   color: ${props => props.primary ? '#fff' : '#db7093'};

//   font-size: 1em;
//   padding: 4px 6px;
//   border: 2px solid #db7093;
//   border-radius: 3px;
//   line-height: 1;
// `;
// const InpAdd = () => {
//   const {values, handleChange, handleSubmit} = useForm();
//   const [startDate, setStartDate] = useState(new Date());
//   const [ID, setID] = useState(0);
//   const [data, setData] = useState([])
//   const [incomeDate, setIncomeDate] = useState('')
//   const [dividendPrice, setPrice] = useState(0)
//   const [stocksNm, setStock] = useState('')
//   const [inputs, setInputs] = useState({
//     stocksNm: '',
//     dividendPrice: ''
//   })
//   console.log('handleChange', values)

  
//   const [params, setParams] = useState({
//     rowId: '',
//     currency: 'USD',
//     exchangeRate: 0,
//     incomeDate: '',
//     dividendPrice: 0,
//     standardPrice: 'KRW',
//     stocksNm: ''
//   });


//   const handleClick = (e) => {
//     devidend.add({ ...params, ...inputs}).then((docRef)=>{
//       // 새로운 document의 id
//        console.log(docRef.id);
//      })
//   }
//   const handleOnChange = (e) => {
//     const { name, value } = e.target;
//     setInputs({
//       ...inputs, 
//       [name]: value
//     })
//   }
//   useEffect(() => {
//     devidend.doc("devidendData").get().then((doc) => {
//       if (doc.exists) {
//         setData(doc.data())
//       }
//     });
//   },[])
//   return (
//     <div className="warp_top">
//       <div className="unit_data">
//         <label htmlFor="incomeDate" className="tit_basic info_date">날짜</label>
//         <DatePicker
//           name="incomeDate"
//           selected={startDate}
//           onChange={(date) => setStartDate(date)}
//           dateFormatCalendar={"MMM yyyy"}
//           minDate={subMonths(new Date(), 6)}
//           maxDate={addMonths(new Date(), 6)}
//           showMonthYearDropdown
//         />
//       </div>
//       <div className="unit_data">
//         <label className="tit_basic">종목명</label>
//         <input type="text" name="stocksNm" 
//           className="inp_basic inp_date"
//           onChange={handleChange}
//           value={values.stocksNm}
//           placeholder="종목명"
//           />
//       </div>
//       <div className="unit_data">
//         <label className="tit_basic">배당금</label>
//         <input type="text" name="dividendPrice" 
//           className="inp_basic inp_date"
//           onChange={handleChange}
//           value={values.dividendPrice}
//           placeholder="dividendPrice"
//           />
//       </div>
//       <Button primary onClick={handleClick}>추가</Button>
//     </div>
//   )
// }

// export default InpAdd;