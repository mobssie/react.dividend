import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const DataTable = () => {
  return (
    <div>
      <h2>DataTable</h2>
      <table>
        <thead>
          <tr>
            <th>날짜</th>
            <th>종목명</th>
            <th>배당금</th>
            <th>통화</th>
            <th>환율</th>
            <th>원화환산</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Lorem</td>
            <td>Ipsum</td>
            <td>Dolor</td>
            <td>Lorem</td>
            <td>Ipsum</td>
            <td>Ipsum</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;