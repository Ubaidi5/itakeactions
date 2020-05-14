import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ResetPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            submitted:false
        }
    }
    handleSubmit(e) {
        e.preventDefault();
        this.setState({submitted:true});
    }
    render() {
        return (
            <div style={{padding:'100px 0'}}>
               {!this.state.submitted && this.NotSubmitted()} 
               {this.state.submitted && this.Submitted()} 
            </div>
        );
    }
    Submitted() {
        return(
            <div style={{textAlign:'center'}}>
                <h3><strong>Check your e-mail to reset your password</strong></h3>
                <span>If there is an account associated with <strong>{this.state.email}</strong></span><br />
                <span>you will get a link in your inbox to reset your password</span>
                <br /><br />
                <span>If you don't get the link, check your spam folder</span><br />
                <span>or <strong style={{cursor:'pointer',textDecoration: 'underline'}} onClick={()=>this.setState({email:'',submitted:false})}>re-enter your e-mail address.</strong></span>
                <br /><br /><br />
                <span>Need Help? <Link style={{color:'#057f16'}}>Contact US</Link></span>
            </div>
        );
    }
    NotSubmitted() {
        const styles = {
            continue:{
                width:'400px',
                backgroundColor:'#057f16',
                color:'white',
                border:0,
                padding:'5px 0',
                borderRadius:'10px'
            },
            email: {
                marginLeft:'100px'
            }
        }
        return(
            <div>
                <div style={{textAlign:'center'}}>
                    <h3><strong>Reset your password</strong></h3><br />
                    <span>Please enter your email address to retrieve your password.</span><br />
                    <span>We will send you an email with a link to reset your password</span><br /><br />
                </div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className="row">
                        <div className="col-sm-8" style={styles.email}>
                            <label>E-mail</label>
                            <input value={this.state.email} style={{boxShadow:'5px 10px 8px #888888'}} required onChange={(e)=>this.setState({email:e.target.value})} type='email'className='form-control' />
                        </div>
                    </div><br />
                    <div style={{textAlign:'center'}}>
                        <input type="submit" value="CONTINUE" style={styles.continue}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default ResetPassword;