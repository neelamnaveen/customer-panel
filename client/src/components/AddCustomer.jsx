import React from "react";
import axios from "axios";
import {useState} from 'react';

function AddCustomer(){

    const [customer, setCustomer] = useState([{
        name: '',
        email: '',
        contactNo: '',
        address: ''
    }])


    function handleChange(e){
        const{name,value}=e.target;
        setCustomer(prevInput=>{
          return(
            {
              ...prevInput,
              [name]:value
            }
          )
        })
      }
  
      function addCustomer(e){
        e.preventDefault();
        const newCustomer={
            name: customer.name ,
            email: customer.email,
            contactNo: customer.contactNo,
            address: customer.address
        }
        axios.post('/addCustomer',newCustomer);
            alert("---- New customer added ----");
            axios.get('/');
        setCustomer({
            name: '',
            email: '',
            contactNo: '',
            address: ''
        });
    }
        

    return(
        <div id="addCustomer">

            <form onSubmit={addCustomer} className="col-12">
                
              <div id="inline">
              <label for="name">Name:&nbsp; </label>
              <input onChange={handleChange} class="dotted" type="text" id="name" name="name" value={customer.name} required="required" autocomplete="false"/>
              </div>

              <div id="inline">
              <label for="email">Email:&nbsp;</label>
              <input onChange={handleChange} class="dotted" type="text" id="email" name="email" value={customer.email} required="required" autocomplete="false"/>
              </div>

              <div id="inline">
              <label for="text">Contact No.&nbsp;</label>
              <input onChange={handleChange} class="dotted" type="text" id="contactNo" name="contactNo" value={customer.contactNo} required="required" autocomplete="false"/>
              </div>

              <div id="inline">
              <label for="address">Address:&nbsp;</label>
              <input onChange={handleChange} class="dotted" type="text" id="address" name="address" value={customer.address} required="required" autocomplete="false"/>
              </div>

              <div id="inline">          
              <input class="button" type="submit" value="Add Customer" />
              </div><br/>
        
            </form>

        </div>

    )
}
export default AddCustomer;