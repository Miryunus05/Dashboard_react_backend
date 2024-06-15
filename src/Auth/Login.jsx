import React, { useState } from 'react'
import { Card, Flex } from 'antd';
import style from './style.module.css'
import { Input, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import axios from "axios";


const backendUrl = "https://ecommerce-backend-fawn-eight.vercel.app/api";

function Login() {


  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await axios.post(`${backendUrl}/auth`, {
        email: email,
        password: password
      });
      console.log(response.data)
      if (response.data) {
        localStorage.setItem("token", response.data);
        navigate("/category");
      }
    } catch (error) {
      alert("Foydalanuvchi email yoki parol xato")
      console.log("Xatolik yuz berdi");
    }
  }


  return (
    <div className={style.root}>
      <Card hoverable title="Login" bordered={false} style={{ width: 300 }}>
        <form action="">
          <Flex vertical gap='middle'>
            <div>
              <Input
                type='email'
                id='email'
                placeholder="Email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
            </div>
            <div>
              <Input
                type="password"
                id='password'
                placeholder="Password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </div>
            <div>
              <Button type="primary" onClick={handleSubmit}>Login</Button>
            </div>
          </Flex>
        </form>
      </Card>
    </div>
  )
}

export default Login
