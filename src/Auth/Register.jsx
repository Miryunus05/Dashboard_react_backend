import React from 'react'
import { Card, Flex } from 'antd';
import style from './style.module.css'
import { Input , Button } from 'antd';

function Register() {
  return (
    <div className={style.root}>
      <Card hoverable title="Register" bordered={false} style={{ width: 300 }}>
        <form action="">
          <Flex vertical gap='middle'>
          <div>
            <Input placeholder="Name" />
          </div>
          <div>
            <Input placeholder="Email" />
          </div>
          <div>
            <Input placeholder="Password" />
          </div>
          <div>
          <Button to="/category" type="primary">Register</Button>
          </div>
          </Flex>
        </form>
      </Card>
    </div>
  )
}

export default Register
