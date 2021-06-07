
const validation=(customer)=>{
    let errors={};

    if(!customer.name){
        errors.error="Name is required"
    }else if(!customer.email){
        errors.error="Email is invalid"
    }else if(!/\S+@\S+\.\S+/.test(customer.email)){
        errors.error="Email is invalid"
    }else if(!customer.contactNo){
        errors.error="Contact number is invalid"
    }else if(!/^[0][1-9]\d{9}$|^[1-9]\d{9}$/.test(customer.contactNo)){
        errors.error="Contact number is invalid"
    }else if(!customer.address){
        errors.error="Address is required"
    }
    
    return errors;   
};

export default validation;