import React from 'react'
import { useNavigate } from "react-router-dom";
import Button from '../../components/button/Button';

function MainAuthLayout(props: { children: any, styleSpecific: string, navigateName: string, title: string, buttonName: string, routePath: string }) {
  let { styleSpecific, children, buttonName, routePath, title, navigateName } = props
  const navigate = useNavigate();
  return (
    <div className='d-flex justify-content-center align-items-center vh-100 main-logo'>
      <div className={'col-md-4 col-xxl-3 col-sm-6 col-11 p-3 box-shadow bg-light d-flex flex-column align-items-center border-radius ' + styleSpecific} >
        <div className='h-100'>
          <div className='h-20'>
            <div className='text-center h3'>{title}</div>
          </div>
          <div className='h-60  col-md-11 col-12 overflow-auto m-auto'>
            {children}
          </div>
          <div className='h-20 col-md-11 col-12 m-auto'>
            <div className='h-50px d-flex justify-content-between align-items-center text-primary cursor-pointer'>
              <Button labelName={buttonName} styleName={"login-btn"} />
              <div className='h7' onClick={() => navigate(routePath)}>{navigateName}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainAuthLayout