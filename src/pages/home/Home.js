import React, { useState, useEffect } from 'react';
import DataTable from '../../components/DataTable'
import styled from 'styled-components';
import DatePicker from "react-datepicker";
import { subMonths, addMonths } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';
// import { firestore } from "../../firebase";
import useForm from "../../hooks/useForm";
import InpAdd from '../../components/form/InpAdd';
import MaterialTable from "material-table";
import { tableColumns } from "../../columns/tableColumns"
import { forwardRef } from 'react';

import { isLogin, isLoginOut } from '../../modules/login';
import { useFirestore } from "react-redux-firebase";
import { useDispatch, useSelector } from 'react-redux';








import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';


// const devidend = firestore.collection('devidend');



const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};


const originalData = [
  {
    id: "client 1",
    name: "Anna",
    date: new Date("2021-03-01T20:11:54")
  },
  {
    id: "client 2",
    name: "Tom",
    date: new Date("2020-03-30T11:01:54")
  },
  {
    id: "client 3",
    name: "Deb",
    date: new Date("2021-02-28T21:11:54")
  }
];

const Home = (props) => {

  console.log('props ?? :', props.name);

  const dispatch = useDispatch()
  const accessToken = window.localStorage.getItem('accessToken')
  const emailInfo = window.localStorage.getItem('emailInfo')
  const userToken = window.localStorage.getItem('user')
  const {values, handleChange, handleSubmit} = useForm();
  const [ID, setID] = useState(0);
  //const [data, setData] = useState([])
  const [data, setData] = useState(originalData)
  const [inputs, setInputs] = useState({
    stocksNm: '',
    dividendPrice: ''
  })
  const [presentToDo, setPresentToDo] = useState('');
  const firestore = useFirestore();
  const { uid } = useSelector((state) => state.firebase.auth);
  



  const onHandleChange = ({ currentTarget: { name, value } }) => {
    console.log('value', value)
    if (name === 'addTodo') {
      setPresentToDo(value);
    }
  };
  const addNewTodo = (todo) => {
    console.log('todo', todo)
    firestore
      .collection('users')
      .doc(emailInfo)
      .collection('list')
      .add({
        title: todo,
        isDone: false,
      })
      .then((docRef) => {
        docRef.update({
          todoID: docRef.id,
        });
      });
    setPresentToDo('');
  };
  console.log('firestore //', firestore)
  console.log('uid //', uid)
  



  const [params, setParams] = useState({
    date: '',
    rowId: '',
    currency: 'USD',
    exchangeRate: 0,
    incomeDate: '',
    dividendPrice: 0,
    standardPrice: 'KRW',
    stocksNm: ''
  });


  const handleClick = (e) => {
    // devidend.add({ ...params, ...inputs}).then((docRef)=>{
    //   // 새로운 document의 id
    //    console.log(docRef.id);
    //  })
  }

  


  useEffect(() => {
    // devidend.doc("devidendData").get().then((doc) => {
    //   if (doc.exists) {
    //     setData(doc.data())
    //   }
    // });
  },[])

  const { login, email } = useSelector(state => ({
    login: state.login.login,
    email: state.login.email
  }));


  const onIsLogin = () => dispatch(isLogin());
  const onIsLogout = () => dispatch(isLoginOut());
  return (
    <div>
      <div>
      <form action="">
        <input
          type="text"
          name="addTodo"
          value={presentToDo}
          onChange={onHandleChange}
        />
        <button
          onClick={(event) => {
            event.preventDefault();
            addNewTodo(presentToDo);
          }}
        >
          Add Todo
        </button>
      </form>
    </div>
      <MaterialTable
        columns={tableColumns(props)}
        data={data}
        title="배당금 기록"
        icons={tableIcons}
        options={{ search: false, filtering: true }}
        editable={{
          onRowAdd: (newData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                setData([...data, newData]);
                console.log("new: :::", newData);
                addNewTodo(newData);
                resolve();
              }, 1000);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                console.log("old:", oldData);
                console.log("new:", newData);
                const dataUpdate = [...data];
                const index = oldData.tableData.id;
                dataUpdate[index] = newData;
                setData([...dataUpdate]);
                handleClick()
                resolve();
              }, 1000);
            }),
          onRowDelete: (oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataDelete = [...data];
                const index = oldData.tableData.id;
                dataDelete.splice(index, 1);
                setData([...dataDelete]);

                resolve();
              }, 1000);
            })
        }}
      />
    </div>
  );
};

export default Home;