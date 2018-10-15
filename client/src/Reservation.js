import React,{Component} from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import Header from "./Header";

export default class Reservation extends Component {
constructor(props) {
        super(props);
        
        this.state = {
            "resname": "",
            "r_id" : this.props.match.params.rid,  // get the parameter of the selected restaurant and set to state 
            "email": "",
            "time": "10:00", // set default time to the earliest reservation time
            "date": setDate(), //set default date to current date 
            "cusno": "1", // set default customer number to the least number 
            "today" : setDate()
        };
    
    }
    // fetch('/resName/'+this.props.match.params.rid,{
    //         method:'get',
    //         headers: {"Content-Type":"application/json"},
    //     })
    //     .then(response=>response.json())
    //     .then(responseJson => {
    //          console.log(responseJson)
    //          this.setState({
    //         "resname": responseJson[0].r_name,
    //     })

    //     })


// handleDate(){
//   var handleDate = [this.state.date.split("-")];
//   var date = new Date();
//   if (handleDate[1]< (date.getMonth()+1) ){
    
//     return false;
//   } else if(handleDate[2]< date.getDate()){
    
//     return false;
//   }
//   return true;
// }
  
handleSubmit(){
// set email format
var emailReg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

// validate not empty input 
if (this.state.email.trim().length === 0 &&
    this.state.date !== null){
  alert ("* area must be filled.");
// email validation 
}else if (!emailReg.test(this.state.email)) {
            alert ("Pleaze enter a valid email address.");
            return false;
        }  else{
// POST request to server side to save reservation details
fetch('/reservation',{
            method:'post',
            body: JSON.stringify(this.state),
            headers: {"Content-Type":"application/json"},
        })
        .then(response=>response.json())
        .then(responseJson => {
             console.log(responseJson);

            if(responseJson.err_code === 0){
               
                  window.location.href="/Confirmation/"+responseJson.reserv_id;
               
            }
            else if(responseJson.err_code === 1){
                alert(responseJson.message);
            }else{
                if(responseJson.err_code === 2){
                    alert(responseJson.message);
                    window.location.href="/login";
                }
            }

        })
}
}


render(){
   return(
   	<div>
   	 <Header/>
   	
   	  <div>
      <h1 style={{marginLeft:150}}> {this.setState.resname} </h1>
    
      <Form style={{marginLeft:150}}>
        <FormGroup>
          <Label for="exampleSelect">Number of Customers: <span style={{color:"red"}}>* </span> </Label><br/>

            <Input type="select" name="select" id="exampleSelect" style={{height:35,width:200}}
            onChange={evt => this.setState({"cusno":evt.target.value})}> 
             
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
            </Input>
            <p style={{color:'red'}}>* For group customer more than 10 people, please contact the restaurant for arrangement.  </p>
        </FormGroup>

        <FormGroup>
          <Label for="exampleSelect">Time: <span style={{color:"red"}}>* </span></Label><br/>
          <Input type="select" name="select" id="exampleSelect" style={{height:35,width:200}}
            onChange={evt => this.setState({"time":evt.target.value})}>
              
            <option>10:00</option>
            <option>11:00</option>
            <option>12:00</option>
            <option>13:00</option>
            <option>14:00</option>
            <option>15:00</option>
            <option>16:00</option>
            <option>17:00</option>
            <option>18:00</option>
            <option>19:00</option>
            <option>20:00</option>
            <option>21:00</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleDate">Date: <span style={{color:"red"}}>* </span></Label>
          <Input type="date" name="date" id="exampleDate" placeholder="date placeholder" style={{height:30,width:200}}
              value={this.state.date} onChange={evt => this.setState({"date":evt.target.value})} min={this.state.today}/>  
        </FormGroup>

        <FormGroup>
          <Label for="exampleEmail">Email:<span style={{color:"red"}}> * </span></Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="Email" style={{height:30,width:200}}
           value={this.state.email} onChange={evt => this.setState({"email":evt.target.value})}/>   
          <p style={{color:'red'}}>* Confirmation message will be sent to this email address. </p>
        </FormGroup>

         <Button color="success" onClick={this.handleSubmit.bind(this)}>Reserve</Button>{' '}

        </Form>
       </div>
     </div>
   	)
}

}

// this function defind the format of date 
function setDate(){

var date = new Date();

// get month
var nowMonth = date.getMonth() + 1;

// get date
var strDate = date.getDate();

// add sperator
var seperator = "-";

// handle month 
if (nowMonth >= 1 && nowMonth <= 9) {
   nowMonth = "0" + nowMonth;
}

// handle date
if (strDate >= 0 && strDate <= 9) {
   strDate = "0" + strDate;
}

// fomulate date format
var nowDate = date.getFullYear() + seperator + nowMonth + seperator + strDate;
return nowDate;

}




