import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import { Link } from 'react-router-dom';
import '../../styles/modals/login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      rememberMe: false,
      error:false
    };
  }
  handleInput(e) {
      this.setState({[e.target.name]:e.target.value});
  }
  handleSubmit(e) {
      e.preventDefault();
      console.log(e);
  }
  render() {
    return (
      <Modal show={this.props.show} dialogClassName="login-modal">
        <Modal.Body>
            <span className="modalclose" onClick={this.props.toggle()}></span>
            <div className='container'>
                <div style={{textAlign:'center'}}>
                    <h5 className='mt-3' style={{color:'black'}}><strong>Login to your account</strong></h5>
                    {this.state.error && <p className="font-weight-bold text-danger my-4" style={{fontSize:12}}><i className="fa fa-exclamation-triangle"></i> These credentials do not match our records</p>}
                    <p style={{fontSize:'12px'}}>Connect to social network</p>
                    <div className="row" style={{justifyContent:'center'}}>
                        <div className='mr-3'>
                            <Link class="fb btn small-btn" style={{backgroundColor:"#3b5998", border:'1px solid #3b5998', color:'white'}}>
                                <i class="fa fa-facebook fa-fw"></i> Facebook
                            </Link>  
                        </div>
                        <div>
                            <Link class="google btn small-btn" style={{backgroundColor:"#db4a39", border:'1px solid #db4a39', color:'white'}}>
                                <i class="fa fa-google fa-fw"></i> Google
                            </Link>  
                        </div>
                    </div>
                    <p className="simple-line" style={{fontSize:'10px', marginTop:'1rem'}}>Or</p>
                    <p style={{fontSize:'12px', marginTop:'1rem', marginBottom:0}}>Login with your e-mail address</p>
                </div>    
                <form className="m-0">
                    <div className='form-group my-2'>
                        <label className='label-tag'>E-mail</label>
                        <input className="form-control col-sm-6 inputs" required name='email' type='email' value={this.state.email} onChange={this.handleInput.bind(this)} />
                    </div>
                    <div className='form-group mb-1'>
                        <label className='label-tag'>Password</label>
                        <input className="form-control col-sm-6 inputs" required name='password' type='password' value={this.state.password} onChange={this.handleInput.bind(this)} />
                    </div>
                    <div className='row'>
                        <div className='form-group col-sm-3 mr-5'>
                            <div class="form-check">
                                <input class="form-check-input" style={{marginTop:'7px',boxShadow:'none'}} type="checkbox" checked={this.state.rememberMe} onChange={()=>this.setState({rememberMe:!this.state.rememberMe})} />
                                <label class="form-check-label" style={{fontSize:'12px',margin:0}}>
                                    Remember me
                                </label>
                            </div>
                        </div>
                        <div>
                            <Link to='/reset-password' className='links ml-1 col-sm-3'>Forgot Password?</Link>
                        </div>
                    </div>
                </form><br />
                <div style={{textAlign:'center'}}>
                    {/* HERE GOEW THE RECAPTCHA */}
                    <input type='submit' value='LOGIN' className='btn' style={{width:'150px'}} onClick={this.handleSubmit.bind(this)}/>
                    <p className='mt-3'>Don't have an account? <Link style={{color:'#057f16'}}>Sign Up</Link></p>
                </div>
            </div>
        </Modal.Body>
      </Modal>
    );
  }
}

export default Login;
