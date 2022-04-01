import React, { Component } from 'react'
import globalService from 'src/services/global-service'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CFormTextarea,
  CRow,
} from '@coreui/react'

export default class AddNew extends Component {
  constructor(props) {
    super(props)
    this.onChangeTitle = this.onChangeTitle.bind(this)
    this.onChangeContent = this.onChangeContent.bind(this)
    this.saveTutorial = this.saveTutorial.bind(this)

    this.state = {
      title: '',
      content: '',
    }
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value,
    })
  }

  onChangeContent(e) {
    this.setState({
      content: e.target.value,
    })
  }

  saveTutorial() {
    var data = {
      title: this.state.title,
      content: this.state.content,
    }

    globalService
      .create(data)
      .then((response) => {
        if (response.data.code === 200) {
          alert('data berhasil disimpan')
        }
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
    console.log(data)
  }

  render() {
    return (
      <CForm>
        <div className="mb-3">
          <CFormLabel htmlFor="title">Title</CFormLabel>
          <CFormInput type="text" id="title" onChange={this.onChangeTitle} />
        </div>
        <div className="mb-3">
          <CFormLabel htmlFor="content">Content</CFormLabel>
          <CFormTextarea id="content" rows="5" onChange={this.onChangeContent} />
        </div>
        <div className="col-auto">
          <CButton type="submit" className="mb-3" onClick={this.saveTutorial}>
            Submit
          </CButton>
        </div>
      </CForm>
    )
  }
}
