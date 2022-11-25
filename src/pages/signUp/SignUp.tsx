import React from 'react'
import MainAuthLayout from '../../layout/layout/mainAuthLayout';
import Input from '../../components/input/Input';

import './signUp.scss'
function SignUp() {
  return (
    <MainAuthLayout styleSpecific={'h-80vh'} buttonName={'Register'} routePath={'/'} title={'Register'} navigateName={'Login?'}>
      <Input labelName={'First Name*'} placeholder={'Enter First Name'} />
      <Input labelName={'Last Name*'} placeholder={'Enter Last Name'} />
      <Input labelName={'Date Of Birth*'} placeholder={'Enter Date Of Birth'} />
      <Input labelName={'Email Address*'} placeholder={'Enter Email Address'}/>
      <Input labelName={'Address*'} placeholder={'Enter Address'}/>
      <Input labelName={'Password*'} placeholder={'Enter Password'} />
      <Input labelName={'Confirm Password*'} placeholder={'Enter Confirm Password'} />
    </MainAuthLayout>
  )
}

export default SignUp;