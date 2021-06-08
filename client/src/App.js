import ShowCustomers from './components/ShowCustomers';
import AddCustomer from './components/AddCustomer';
function App() {
    return ( 
        <div className = "App" >
                <center><h2 id="title">CUSTOMER PANEL</h2>
                <AddCustomer/>   
                <ShowCustomers/>
                </center>
        </div>
    );

}

export default App;
