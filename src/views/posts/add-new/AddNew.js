import React from 'react'
import { CButton, CFormCheck, CFormInput, CFormText, CFormLabel, CRow, CForm } from '@coreui/react'

const AddNew = () => {
  return (
    <CRow>
      <CForm>
        <div className="mb-3">
          <CFormLabel htmlFor="exampleInputEmail1">Email address</CFormLabel>
          <CFormInput type="email" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <CFormText id="emailHelp">We ll never share your email with anyone else.</CFormText>
        </div>
        <div className="mb-3">
          <CFormLabel htmlFor="exampleInputPassword1">Email Password</CFormLabel>
          <CFormInput type="password" id="exampleInputPassword1" />
        </div>
        <CFormCheck
          className="mb-3"
          label="Check me out"
          onChange={(e) => {
            console.log(e.target)
          }}
        />
        <CButton type="submit" color="primary">
          Submit
        </CButton>
      </CForm>
    </CRow>
  )
}

export default AddNew
