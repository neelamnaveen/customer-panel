import axios from "axios";
import React from "react";
import { useState } from 'react';

function ShowCustomers(){
    
            const [showCustomers, setShow]=useState(false)

            const [customers, setCustomers] = useState([{
                name: 'loading...',
                email: 'loading...',
                contactNo: 'loading...',
                address: 'loading...'
            }])

            function showCustomerInfo(taggle){
                if(taggle){
                    fetch('/allCustomers').then(res => {
                        if (res.ok) {
                            return res.json()
                        }
                    }).then(jsonRes => setCustomers(jsonRes))
                    setShow(true)
                } else {
                    setShow(false)
                }
            }
            
            function removeCustomer(id){
                axios.delete('/removeCustomer/'+id);
                // console.log(id);
                alert("---- Customer has been removed from record ----");
                window.location.reload()
            }             
            let count=1;
    return(
        <div>
            <center>
            <div class="table_buttons">
                <input id="table_button" onClick={()=>showCustomerInfo(true)} class="button" type="submit" value="Show customers" />
                <input id="table_button" onClick={()=>showCustomerInfo(false)} class="button" type="submit" value="Hide customers" />
            </div>
            {showCustomers&&
              <div class="customers">
           
                    <table className="col-12">

                        <thead>
                            <tr class="table_header">
                                <th>No.</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Contact No.</th>
                                <th>Address</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        {customers.map(customer => {
                            return (
                            
                            <tr>
                                <td>{count++}</td>
                                <td>{customer.name}</td>
                                <td>{customer.email}</td>
                                <td>{customer.contactNo}</td>
                                <td>{customer.address}</td> 
                                <td> <input id="table_button" onClick={()=>removeCustomer(customer._id)} class="button" type="submit" value="Delete" /></td>                        
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