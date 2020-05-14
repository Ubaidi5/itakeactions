import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../styles/modals/signup.css';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fname:'',
            lname:'',
            email:'',
            password:'',
            retypePassword:''
        }
    }
    handleInput(e) {
        this.setState({[e.target.name]:e.target.value});
    }
    handleSubmit(e) {
        e.preventDefault();
    }
    render() { 
        return (
            <Modal show={this.props.show} dialogClassName="signup-modal">
                <Modal.Body>
                    <span className="modalclose" onClick={this.props.toggle()}></span>
                    <div className='container'>
                        <div style={{textAlign:'center'}}>
                            <h3><strong>Sign Up</strong></h3>
                            <p>And start tracking actions and claiming rewards!</p>
                            <Link class="fb btn mb-3" style={{backgroundColor:"#3b5998", border:'1px solid #3b5998', color:'white'}}>
                                <i class="fa fa-facebook fa-fw"></i> Facebook
                            </Link>
                            <Link class="google btn" style={{backgroundColor:"#db4a39", border:'1px solid #db4a39', color:'white'}}>
                                <i class="fa fa-google fa-fw"></i> Google
                            </Link>
                        </div>
                        <p className='simple-line my-3'>Or</p>
                    </div>
                    <form className="m-0">
                        <div className="form-row ml-3">
                            <div className='form-group col-sm-3 mb-1'>
                                <label className="m-0">First Name</label>
                                <input name='fname' required value={this.state.fname} onChange={this.handleInput.bind(this)} type="text" className='form-control' />
                            </div>
                            <div className='offset-sm-1 form-group col-sm-3 mb-1'>
                                <label className="m-0">Last Name</label>
                                <input name='lname' required value={this.state.lname} onChange={this.handleInput.bind(this)} type="text" className='form-control' />
                            </div>
                        </div>
                        <div className='form-group mb-1 col-sm-7 ml-2'>
                            <label className="m-0">E-mail</label>
                            <input type='email' value={this.state.email} onChange={this.handleInput.bind(this)} name='email' required className='form-control' />
                        </div>
                        <div className='form-group mb-1 col-sm-7 ml-2'>
                            <label className="m-0">Password</label>
                            <input type='password' value={this.state.password} onChange={this.handleInput.bind(this)} name='password' required className='form-control' />
                        </div>
                        <div className='form-group col-sm-7 ml-2'>
                            <label className="m-0">Retype Password</label>
                            <input type='password' value={this.state.retypePassword} onChange={this.handleInput.bind(this)} name='retypePassword' required className='form-control' />
                        </div>
                    </form>
                    <div style={{textAlign:'center'}}>
                        {/* HERE GOEW THE RECAPTCHA */}
                        <input value='SIGN UP' type='submit' className='signup-button' onSubmit={this.handleSubmit.bind(this)}/>
                        <p className="links mt-2"><Link className="bottom-links">Terms of Service</Link> | <Link className='bottom-links'>Privacy Policy</Link></p>
                        <strong><p>Already have an account? <Link style={{color:'#057f16',textDecoration:'none'}}>Log In</Link></p></strong>
                    </div>
                </Modal.Body>
            </Modal>
        );
    }
}
 
export default SignUp;