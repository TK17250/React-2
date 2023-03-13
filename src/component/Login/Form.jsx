import { Button, Form } from 'react-bootstrap';
import Headerlogin from './header';
import './login.css'


function BasicExample() {

  function showpassword() {
    let password = document.getElementById("password")

    if (password.type === "password") {
      password.type = "text";
    } else {
      password.type = "password";
    }
  }

  return (
    <Form className='container'>
      <Headerlogin />
      <div className='p-3'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="ใส่ชื่อของคุณ" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" id='password' placeholder="ใส่รหัสผ่าน" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" onClick={showpassword} label="แสดงรหัสผ่าน" />
        </Form.Group>
        <Button variant="info" type="submit" className='m-auto d-block'>
          เข้าสู่ระบบ
        </Button>
      </div>
    </Form>
  );
}

export default BasicExample;