import React, { useCallback, useMemo, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css";
import "./cssStyles/style.css";
import { useInvoiceListData } from "../redux/hooks";

const TableFormat = ({ options, rowData, setRowData }) => {
  const { invoiceList, getOneInvoice } = useInvoiceListData();
  const [columnDefs, setColumnDefs] = useState([
    { field: "id", minWidth: 170 },
    { field: "billFrom" },
    { field: "billFromEmail" },
    { field: "billTo" },
    { field: "billToEmail", editable: true },
    { field: "discountAmount", editable: true },
    { field: "taxAmount", editable: true },
    { field: "total", editable: true },
  ]);
  let invoiceCopy = [];

  const defaultColDef = useMemo(() => {
    return {
      editable: true,
      cellDataType: false,
    };
  }, []);

  const onGridReady = useCallback((params) => {
    console.log("invoice", invoiceCopy);

    if (invoiceList.length !== 0) {
      invoiceCopy = invoiceList.map((invoice) => {
        return { ...invoice };
      });
    }
    setRowData(invoiceCopy);
  }, []);

  return (
    <div className="ag-theme-quartz-dark" style={{ height: 500 }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        onGridReady={onGridReady}
      />
    </div>
  );
};

export default TableFormat;
