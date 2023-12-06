import React,{useState} from "react";
import { Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import TableFormat from "../components/TableFormat";
import { useDispatch } from "react-redux";
import { updateInvoice } from "../redux/invoicesSlice";
import { Link } from "react-router-dom";
import { useInvoiceListData } from "../redux/hooks";
// used for making of the feature of editing the invoice in bulk now not used
const dummydata = [
    {
        id: 1,
        name: "John Doe",
        email: "john@gmail.com",
        amount: 1000
    },
    {
        id: 2,
        name: "Aryan Doe",
        email: "aryan@gmail.com",
        amount: 2000
    },
    {
        id: 3,
        name: "Pikachu Doe",
        email: "pika@gmail.com",
        amount: 3000
    }
]

const EditBulk = () => {
    const dispatch= useDispatch();
    const [selectedValue, setSelectedValue] = useState([]);
    const { invoiceList} = useInvoiceListData();
    const [rowData, setRowData] = useState([]);
   
    const handleUpdateInvoices = () => {
        if (rowData.length !== 0) {
            try {
                rowData.map((invoice) => {
                    dispatch(updateInvoice({ id: invoice.id, updatedInvoice: invoice }));
                })
                alert("Invoice updated successfuly 🥳");   
                console.log(invoiceList,"updated invoice")
                
            } catch (err) {
                alert(`Error ocuured : ${err}`)
                console.error(err)
            }
        }
    }
    return (
        <div>
            <Container>
                <h3 className="fw-bold pb-2 pb-md-4 text-center">Edit Invoice Inbulk</h3>
                {
                    selectedValue != [] ? (
                        <div>
                            <TableFormat 
                                options={dummydata}
                                rowData={rowData}
                                setRowData={setRowData}
                            />
                        </div>
                    ) : (
                        <div>
                            <h3 className="fw-bold pb-2 pb-md-4 text-center">No Invoice Selected</h3>
                        </div>
                    )
                }
                <Button variant="primary mb-2 mb-md-4" style={{ margin: '10px' }} onClick={() => handleUpdateInvoices()}>Save</Button>
                <Link to="/">
                <Button variant="secondary mb-2 mb-md-4" style={{ margin: '10px' }}>Back</Button>
                </Link>
            </Container>
        </div>
    );
};

export default EditBulk;
