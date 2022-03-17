import React from 'react';
import DataTable from '../../components/DataTable'
import styled from 'styled-components';

const Button = styled.button`
  background: ${props => props.primary ? "#db7093" : "#fff"};
  color: ${props => props.primary ? "#fff" : "#db7093"};

  position: absolute;
  right: 8px;
  font-size: 1em;
  padding: 4px 6px;
  border: 2px solid #db7093;
  border-radius: 3px;
  line-height: 1;
`;

const Home = () => {
  return (
    <div>
      <h2>배당금</h2>
      <div className="warp_top">
        <div className="unit_data">
          <span className="tit_basic info_date">날짜</span>
          <input type="text" className="inp_basic inp_date"/>
        </div>
        <div className="unit_data">
          <span className="tit_basic info_date">종목명</span>
          <input type="text" className="inp_basic inp_date"/>
        </div>
        <div className="unit_data">
          <span className="tit_basic info_date">배당금</span>
          <input type="text" className="inp_basic inp_date"/>
        </div>
        <Button primary>추가</Button>
      </div>
      <DataTable/>
    </div>
  );
};

export default Home;