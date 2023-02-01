import React, { useState } from 'react'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
// import { axios } from 'axios'

import { addUser } from '../service/api'
import { v4 as uuid } from 'uuid'
import './EventPage.css'

const EventPage = () => {

    let [state, setState] = useState({
        username: "",
        email: "",
        contact: ""
    })
    let [errState, setErrState] = useState({
        username_err_msg: "",
        email_err_msg: "",
        contact_err_msg: "",
    })

    let [open, setOpen] = useState(false)


    let { username, email, contact } = state
    let { username_err_msg, email_err_msg, contact_err_msg } = errState


    let clearForm = () => {
        setState({
            username: "",
            email: "",
            contact: "",
        })
        setErrState({
            username_err_msg: "",
            email_err_msg: "",
            contact_err_msg: "",
        })
    }

    // const StateSetter = (result, event_target_name) => {
    //     let str = event_target_name + '_err_msg'
    //     let res = eval(event_target_name).match(re)

    //     console.log(res + "str : " + str)

    //     if (res) {
    //         setErrState({ ...errState, str: "" })
    //         return
    //     }
    //     setErrState({ ...errState, str: `Please Enter valid ${event_target_name} format` })
    // }
    const validateWithReg = (re, field) => {
        return eval(field).match(re)
    }

    function formValidation(event) {
        let result;
        switch (event.target.name) {
            case "contact":
                const re = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/g;
                if (validateWithReg(re, event.target.name)) setErrState({ ...errState, contact_err_msg: "", })
                else setErrState({ ...errState, contact_err_msg: "Please Enter valid Format contact", })
                break;

            case "username":
                const re_username = /^[A-Za-z0-9_]+$/g;
                if (validateWithReg(re_username, event.target.name)) setErrState({ ...errState, username_err_msg: "", })
                else setErrState({ ...errState, username_err_msg: "Please Enter valid Format username", })
                break;

            case "email":
                const re_email = /^\S+@\S+\.\S+$/g;
                if (validateWithReg(re_email, event.target.name)) setErrState({ ...errState, email_err_msg: "", })
                else setErrState({ ...errState, email_err_msg: "Please Enter valid email Format", })
                break;
            default: console.log('none is matched')
        }
    }

    let changeHandler = (evt) => {
        const value = evt.target.value;
        setState({
            ...state,
            [evt.target.name]: value
        });
    }

    //=======================================Material ui related====================================

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }
    const addUserDetails = async () => {
        const unique_id = uuid()
        const small_id = unique_id.slice(0, 8)
        state["id"] = small_id
        try {
            let resp = await addUser(state);
            clearForm()
            console.log(resp)
        } catch (error) {
            console.log(error + ' at add user')
        }
        console.log("user added SUCCESSFULLY" + state["id"])
        setOpen(true)
    }

    let submitHandler = (event) => {
        event.preventDefault()
        if (username_err_msg.length == 0 && contact_err_msg.length == 0 && email_err_msg.length == 0) {
            console.log("No errors");
            console.log(state);
            addUserDetails()
        }
    }

    return (
        <div className='container mt-4' >
            <h1 className='d-none d-md-block ' style={{
                fontWeight: "700", fontSize: "26px", marginLeft: "0%", color: "#ffffff"
            }}> Hospital Mangement System</h1>
            <h4 className='labelEvent mb-4 text-white p-1' style={{ fontFamily: "verdana" }}> Submit your details to get event updates</h4>
            <div className='col-12 col-md-6 '>
                <form onSubmit={submitHandler} data-testid='form' >
                    <div className='container'>
                        <div className='row'>
                            <label className='labelEvent text-white ' htmlFor='uname'>User Name</label>
                            <input data-testid='username' type='text' onBlur={formValidation} required onChange={changeHandler} name='username' value={username} className='form-control inputEvent' id='exampleInputEmail1' aria-describedby='emailHelp' ></input>
                            <p data-testid='usererrormsg' className='mt-2 text-danger'>{username_err_msg}</p>
                        </div>
                        <div className='row'>
                            <label className='labelEvent text-white' htmlFor='upass'>Email Address</label>
                            <input type='email' data-testid='email' onBlur={formValidation} required onChange={changeHandler} name='email' value={email} className='inputEvent form-control' id='exampsword1'></input>
                            <p data-testid='emailerrormsg' className='mt-2 text-danger'> {email_err_msg}</p>

                        </div>
                        <div className='row'>
                            <label className='labelEvent text-white' htmlFor='ucontac'>Contact Number</label>
                            <input type='text' data-testid='contact' required onBlur={formValidation} onChange={changeHandler} name='contact' value={contact} className='inputEvent form-control' id='ePassword1'></input>
                            <p data-testid='contacterrormsg' className='mt-2 text-danger'>{contact_err_msg}</p>

                        </div>
                        <div className='row'>
                            <button type='reset' onClick={clearForm} className='btn borderThick border-white  m-2  col'>Clear</button>
                            <button type='submit' className='btn borderThick border-white m-2 col'>Submit</button>
                        </div>
                        < Snackbar open={open} autoHideDuration={6000} onClose={handleClose} >
                            <Alert onClose={handleClose} severity="success">
                                Data Submitted SuccesFully!
                            </Alert>
                        </Snackbar >
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EventPage;
