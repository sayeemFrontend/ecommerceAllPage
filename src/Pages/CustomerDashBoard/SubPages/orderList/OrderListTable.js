import React from 'react'
import classes from "./OrderListTable.module.css"
const listdata = [
    { id: 0, orderno: 'B-556-098',payment:'Cash On Delivery',total:'$780.00',date:'08-02-2021', status:'Canceled' , background:'#F96E6F' },
    { id: 1, orderno: 'B-556-099',payment:'Online Payment', total:'$780.00',date:'08-02-2021', status:'Processing' , background:'#FFAB00' },
    { id: 2, orderno: 'B-556-100',payment:'Cash On Delivery',total:'$780.00',date:'08-02-2021', status:'Delivery' , background:'#3955B8' },
    { id: 3, orderno: 'B-556-101',payment:'Online Payment', total:'$780.00',date:'08-02-2021', status:'Pending' , background:'#FB5DD8' },
    { id: 4, orderno: 'B-556-099',payment:'Online Payment', total:'$780.00',date:'08-02-2021', status:'Processing' , background:'#FFAB00' },
    { id: 1, orderno: 'B-556-099',payment:'Online Payment', total:'$780.00',date:'08-02-2021', status:'Processing' , background:'#FFAB00' },
  ]
function OrderList() {
    return (
        <div className="TableContainer">
         <table className={classes.listtable}>
            <tr>
                <th scope="col">Order ID</th>
                <th scope="col">Payment</th>
                <th scope="col">Total</th>
                <th scope="col">Date</th>
                <th scope="col">Status</th>
            </tr>
            {listdata.map(data => (
                <tr  key={data.id}>
                    <td className={classes.tableData} >{data.orderno}</td>
                    <td className={classes.tableData}>{data.payment}</td>
                    <td className={classes.tableData}>{data.total}</td>
                    <td className={classes.tableData}>{data.date}</td>
                    <td className={classes.statusDiv}>
                        <div className={classes.status} style={{background:data.background}} >{data.status}</div>
                    </td>
                </tr> 
                ))} 
        </table>
    

        </div>
    )
}

export default OrderList
