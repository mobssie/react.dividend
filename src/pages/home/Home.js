import React, { useState, useEffect } from 'react';
import DataTable from '../../components/DataTable'
import styled from 'styled-components';
import DatePicker from "react-datepicker";
import { subMonths, addMonths } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';
import { firestore } from "../../firebase";
const devidend = firestore.collection('devidend');

const Button = styled.button`
  background: ${props => props.primary ? '#db7093' : '#fff'};
  color: ${props => props.primary ? '#fff' : '#db7093'};

  font-size: 1em;
  padding: 4px 6px;
  border: 2px solid #db7093;
  border-radius: 3px;
  line-height: 1;
`;

const Home = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [ID, setID] = useState(0);
  const [data, setData] = useState([])
  const [incomeDate, setIncomeDate] = useState('')
  const [price, setPrice] = useState(0)
  const [stocks, setStock] = useState('')
  const [inputs, setInputs] = useState({
    stocks: '',
    price: ''
  })
  

  
  const [params, setParams] = useState({
    rowId: '',
    currency: 'USD',
    exchangeRate: 0,
    incomeDate: '',
    price: 0,
    standardPrice: 'KRW',
    stocks: ''
  });


  const handleClick = (e) => {
    devidend.add({ ...params, ...inputs}).then((docRef)=>{
      // 새로운 document의 id
       console.log(docRef.id);
     })
  }
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs, 
      [name]: value
    })
  }
  useEffect(() => {
    devidend.doc("devidendData").get().then((doc) => {
      if (doc.exists) {
        setData(doc.data())
      }
    });
  },[])
  return (
    <div>
      <h2>배당금 기록</h2>
      <div className="warp_top">
        <div className="unit_data">
          <span className="tit_basic info_date">날짜{data.incomeDate}</span>
          <DatePicker
            name="incomeDate"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormatCalendar={"MMM yyyy"}
            minDate={subMonths(new Date(), 6)}
            maxDate={addMonths(new Date(), 6)}
            showMonthYearDropdown
          />
        </div>
        <div className="unit_data">
          <span className="tit_basic info_date">종목명</span>
          <input type="text" name="stocks" 
            className="inp_basic inp_date"
            onChange={handleOnChange}
            />
        </div>
        <div className="unit_data">
          <span className="tit_basic info_date">배당금</span>
          <input type="text" name="price" 
          className="inp_basic inp_date"
          onChange={handleOnChange}
          />
        </div>
        <Button primary onClick={handleClick}>추가</Button>
      </div>
      <DataTable/>
    </div>
  );
};

export default Home;