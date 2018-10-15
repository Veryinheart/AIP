import React, { Component } from 'react';
import Header from "./Header";



export default class Confirmation extends Component {

constructor(props) {
        super(props);
        console.log(props);
        this.state = {
           "reservDetail": '' 
        }; 
       
        fetch('/reservation/'+this.props.match.params.reservid,{
            method:'get',
            headers: {"Content-Type":"application/json"},
        })
        .then(response=>{
        	console.log(response)
        	 return response.json()
        })
        .then(responseJson => {
             console.log(responseJson)
             
             
             this.setState({
            "reservDetail": responseJson,
        })
             
        })
        
    }

render(){
   return(
    <div>
    <Header />


         <h2>Thank you for your reservation in {this.state.reservDetail.resname}!</h2>
         <p> An email will be sent to your email address {this.state.reservDetail.email}.</p>



    </div>

   )
   }
}