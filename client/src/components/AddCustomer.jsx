import React, { useEffect } from "react";
import axios from "axios";
import {useState} from 'react';
import validation from './validation';

function AddCustomer(){

    const [customer, setCustomer] = useState([{
        name: '',
        email: '',
        contactNo: '',
        address: ''
    }])

    const [errors, setErrors] = useState({});
    const [dataIsCorrect, setDataIsCorrect] = useState(false);

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
    
    useEffect(()=>{
      if(Object.keys(errors).length===0&&dataIsCorrect){
        const newCustomer={
            name: customer.name ,
            email: customer.email,
            contactNo: customer.contactNo,
            address: customer.address
        }
        axios.post('/addCustomer',newCustomer);
        setCustomer({
            name: '',
            email: '',
            contactNo: '',
            address: ''
        });
        alert("---- New customer added ----");
        window.location.reload();
      }
    },[errors]);

      function addCustomer(e){
        e.preventDefault();
        setErrors(validation(customer));
        setDataIsCorrect(true);
    }
        

    return(
        <div class="addCustomer">            
            <form onSubmit={addCustomer} class="form">
                
              <div class="inline">
              <label for="name">Name:&nbsp; </label>
              <input onChange={handleChange} type="text" name="name" value={customer.name} />          
              </div>

              <div class="inline">
              <label for="email">Email:&nbsp;</label>
              <input onChange={handleChange} type="text" name="email" value={customer.email} />    
              </div>

              <div class="inline">
              <label for="text">Contact No.&nbsp;</label>
              <input onChange={handleChange} type="text"  name="contactNo" value={customer.contactNo} />             
              </div>

              <div class="inline">
              <label for="address">Address:&nbsp;</label>
              <input onChange={handleChange} type="text" name="address" value={customer.address} />
              </div>
              
              <div class="inline form-button">          
              <input class="button" type="submit" value="Add Customer" />
              </div><br/>
        
            </form>
            <p class="form-error">{errors.error}.</p>

        </div>

    )
}
export default AddCustomer;