import React from 'react';
import Input from '../../components/input/Input';
import './login.scss';
import MainAuthLayout from '../../layout/layout/mainAuthLayout';
import Validation from '../../utiles/Validation';

function LogIn() {

  const handleChange=()=>{

  }
  
  const handleSubmit=()=>{

  }
  return (
    <MainAuthLayout styleSpecific={'h-50vh'} buttonName={'Login'} routePath={'/signup'} title={'Login'} navigateName={'Register?'}>
      <Input labelName={'User Name or Email'} placeholder={'Enter UserName or Email'} />
      <Input labelName={'Password'} placeholder={'Enter Password'}/>
    </MainAuthLayout>
  )
}

export default LogIn