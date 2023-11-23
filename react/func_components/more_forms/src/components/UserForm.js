import React, { useState } from  'react';
    
const UserForm = (props) => {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCpassword] = useState("");
    const [fnameError, setFnameError] = useState("");
    const[lnameError, setLnameError] = useState("");
    const[emailError, setEmailError] = useState("");
    

    const handleFname = (e) => {
        setFname(e.target.value);
        if(e.target.value.length < 2) {
            setFnameError("First Name must be 2 characters or longer!");
        }
    }
    const handleLname = (e) => {
        setLname(e.target.value);
        if(e.target.value.length < 2) {
            setLnameError("Last Name must be 2 characters or longer!");
        }
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length <5) {
            setEmailError("Email must be 5 characters or longer!");
        }
    }


    const createUser = (e) => {
        e.preventDefault();
        
        const newUser = { fname, lname, email, password, cpassword };
        console.log("Welcome", newUser);
        setFname("");
        setLname("");
        setEmail("");
        setPassword("");
        setCpassword("")
    };
    
    return(
        <div>
            <form onSubmit={ createUser }>
                <div>
                    <label>First Name: </label> 
                    <input type="text" value={fname} onChange={ handleFname} />
                </div>  
                { fnameError? 
                <p> {fnameError} </p>  : 
                null 
                }

                <div>
                    <label> Last Name : </label>
                    <input type='text' value={lname} onChange={handleLname}/>
                </div>
                { lnameError? 
                <p> {lnameError} </p>  : 
                null 
                }
                <div>
                    <label>Email Address: </label> 
                    <input type="text" value={email} onChange={ handleEmail } />
                </div>
                { emailError? 
                <p> {emailError} </p>  : 
                null 
                }
                <div>
                    <label>Password: </label>
                    <input type="text" value={password} onChange={ (e) => setPassword(e.target.value) } />
                </div>
                { password.length < 8 ?
                <p>Password must be at least 8 charachters</p> :
                null }
                <div>
                    <label>Confirm Password: </label>
                    <input type="text" value={cpassword} onChange={ (e) => setCpassword(e.target.value) } />
                </div>
                {cpassword !== password ?
                <p> Passwords must match </p>:
                null}
                <input type="submit" value="Create User" />
            </form>
            <div>
                <h4>Your data form</h4>
                <p>Your First Name : {fname} </p>
                <p> Your Last Name : {lname} </p>
                <p>Your email :{email} </p>
                <p>Your password : {password} </p>
                <p>Confirm Password : {cpassword}</p>
            </div>
        </div>
    );
};
    
export default UserForm;
