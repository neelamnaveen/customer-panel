import React from "react";
import { useState, useEffect } from 'react';

function ShowCustomers(){
    
            let count=1;

            const [showCustomers, setShow]=useState(false)

            const [customers, setCustomers] = useState([{
                name: '',
                email: '',
                contactNo: '',
                address: ''
            }])
            
            useEffect(() => {
                fetch('/allCustomers').then(res => {
                    if (res.ok) {
                        return res.json()
                    }
                }).then(jsonRes => setCustomers(jsonRes))
            })
            
            

    return(
        <div id="show_customers">
            <center>
            <div className="table_buttons">
                <input id="table_button" onClick={()=>setShow(true)} class="button" type="submit" value="Show customers" />
                <input id="table_button" onClick={()=>setShow(false)} class="button" type="submit" value="Hide customers" />
            </div>
            {showCustomers&&
              <div id="customers">
           
                    <table className="col-12">

                              <tr id="table_header">
                              <th>No.</th>
                              <th>Name</th>
                              <th>Email</th>
                              <th>Contact No.</th>
                              <th>Address</th>
                              
                              </tr>

                        {customers.map(customer => {
                            return (
                                <tr>
                                <td>{count++}</td>
                                <td>{customer.name}</td>
                                <td>{customer.email}</td>
                                <td>{customer.contactNo}</td>
                                <td>{customer.address}</td>                          
                                </tr>
                            )
                            })
                        }

                     </table>

                </div>
            }
            </center>
        </div>
        

    )
}
export default ShowCustomers;