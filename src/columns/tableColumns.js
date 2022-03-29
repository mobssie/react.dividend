import React from "react";
import DatePicker from "../components/form/DataPicker"

export const tableColumns = function (props) {
  return [
    { title: "NO", field: "rowId" },
    {
      title: "날짜",
      field: "date",
      type: "date",
      dateSetting: { locale: "en-GB" },
      filterComponent: (props) => <DatePicker {...props} />
    },
    { title: "종목명", field: "stocksNm" },
    { title: "배당금", field: "dividendPrice" },
    { title: "통화", field: "currency" },
    { title: "환율", field: "exchangeRate" },
    { title: "원화환산", field: "standardPrice" },
  ]
}