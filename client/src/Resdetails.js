
import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { Button } from 'reactstrap';
import Header from "./Header";

/*
this component will show details of the selected restaurant 
*/

class Resdetails extends Component {
  constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            "resDetails": '',
        }; 
        // GET request to server side to get restaurant details with the id parameter passed from Restaurant page.
        fetch('/resDetails/'+this.props.match.params.id,{
            method:'get',
            headers: {"Content-Type":"application/json"},
        })
        .then(response=>response.json())
        .then(responseJson => {
             console.log(responseJson)
             var resDeatils = responseJson[0]
             resDeatils.r_menu = resDeatils.r_menu.join(",")
             this.setState({
            "resDetails": resDeatils,
        })
             
        })
        
    }



  render() {
     
    return (
      <div>
      <div>
      <Header />
      </div>
     <Media style={{background:'#eee'}}>
      <Media left href="#" className="col-md-3 col-sm-2 col-xs-2">
        <Media object src={this.state.resDetails.r_pic}  style={{height:270,width:270}} alt="Generic placeholder image"  />
      </Media>
      <Media body style={{paddingLeft: 70}} className="col-md-6 col-sm-2 col-xs-1">
        <Media heading  >
            <div >
                {this.state.resDetails.r_name}
            </div>

        </Media>
          <div>
              Address: {this.state.resDetails.r_address}
          </div>
          <div >
              <br/>
              Tel: {this.state.resDetails.r_number}
          </div><div>
              <br/>
              Menu: {this.state.resDetails.r_menu}
          </div>

      </Media>
         <Button color="success" style={{marginLeft:100,marginTop:250}} href={"/Reservation/"+this.state.resDetails._id}>Book</Button>{' '}

     </Media>
    <br/>
     {/*// pass the restaurant id to the Reservation page.*/}



      <div className="col-md-3">

      </div>






      </div>


    );
  }
}

export default Resdetails;




