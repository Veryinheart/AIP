import React,{Component} from 'react';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "username": "",
            "password":"" 
        };
    }


    handleSubmit(){
       
        if (this.state.username.trim().length == 0 || this.state.password.trim().length == 0){
            alert ("Please make sure * area is not empty. "); 
            
        } else{

        fetch('/login',{
            method:'post',
            body: JSON.stringify(this.state),
            headers: {"Content-Type":"application/json"},
        })
        .then(response=>response.json())
        .then(responseJson => {
            alert(responseJson.message);
        }).catch(function(e){
            console.log('Oops,error');
        })
     }
    }

    render(){
        return(
            <div className="main">
                <div className="header">

                    <h1>Log In</h1>
                </div>
                <form id="login_form">
                    <div className="form-group">
                        <label htmlFor="">Username: <span style={{color:"red"}}>* </span></label>
                        <input type="username" className="form-control" id="username" name="username" placeholder="Please enter your username" 
                          value={this.state.username} onChange={evt => this.setState({"username":evt.target.value})}autoFocus/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Password: <span style={{color:"red"}}>* </span></label>

                        <input type="password" className="form-control" id="password" name="password" placeholder="Please enter your password"
                        value={this.state.password} onChange={evt => this.setState({"password":evt.target.value})}/>
                    </div>
                    <div className="checkbox">
                        <label>
                            <input type="checkbox"/>Keep me logged in
                        </label>
                    </div>
                    <button type="button" className="btn btn-success btn-block" onClick={this.handleSubmit.bind(this)}>Sign in</button>
                </form>
                <div className="message">
                    <p>No account? <a href="/signup">Sign up here</a>.</p>
                </div>
            </div>
        );
    }
}