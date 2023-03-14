import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Login/login.css';


function Register() {

    //  show Password
    function showpassword() {
        let password = document.getElementById("password")
        let password1 = document.getElementById("password1")

        if (password.type === "password" || password1.type === "password") {
            password.type = "text";
            password1.type = "text";
        } else {
            password.type = "password";
            password1.type = "password";
        }
    }

    //  Error
    function Errorpassword(event) {
        let passwordnumber = document.getElementById("password")
        let Errorpassword = document.getElementsById("error")

        let Long = false
        passwordnumber.forEach(password => {
            if (password.value.length > 8) {
                Long = true
            }
        });

        if (Long) {
            Errorpassword.style.display = "block"
            event.preventDefault();
        }
    }

    return (
        <Form className='container'>
            <h4>Register</h4>
            <div className='p-3'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="ใส่ชื่อของคุณ" />
                </Form.Group>

                {/*             Email            */}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>You Email</Form.Label>
                    <Form.Control type="Email" placeholder="อีเมลของคุณ" />
                </Form.Group>

                {/*          Password 1           */}
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" id='password' onInput={Errorpassword} placeholder="ใส่รหัสผ่าน" />
                    <p id='error' style={{display: "none"}}>Error</p>
                </Form.Group>

                {/*          Password 2           */}
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm password</Form.Label>
                    <Form.Control type="password" id='password1' placeholder="ยืนยันรหัสผ่าน" />
                </Form.Group>

                {/*             Show Password            */}
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" onClick={showpassword} label="แสดงรหัสผ่าน" />
                </Form.Group>

                {/*             Submit           */}
                <Button variant="info" type="submit" className='m-auto But d-block'>
                    สมัครสมาชิก
                </Button>

                {/*       Link register      */}
                <Link to="/Login" className='Register'>มีบัญชีแล้ว</Link>
            </div>
        </Form>
    );
}

export default Register;