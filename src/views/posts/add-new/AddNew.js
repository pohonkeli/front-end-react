import React, { Component } from 'react'
import globalService from 'src/services/global-service'
import { CButton, CCol, CForm, CFormInput, CFormLabel, CFormTextarea, CRow } from '@coreui/react'

export default class AddNew extends Component {
  constructor(props) {
    super(props)
    this.onChangeTitle = this.onChangeTitle.bind(this)
    this.onChangeContent = this.onChangeContent.bind(this)
    this.onChangeCategory = this.onChangeCategory.bind(this)

    this.publishArticle = this.publishArticle.bind(this)
    this.draftArticle = this.draftArticle.bind(this)

    this.state = {
      title: '',
      content: '',
      category: '',
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

  onChangeCategory(e) {
    this.setState({
      category: e.target.value,
    })
  }

  onClearForm() {
    this.setState({
      title: '',
      content: '',
      category: '',
      status: '',
    })
  }

  publishArticle() {
    var data = {
      title: this.state.title,
      content: this.state.content,
      category: this.state.category,
      status: 'Publish',
    }
    globalService
      .create(data)
      .then((response) => {
        alert(response.data.message)
        this.onClearForm()
      })
      .catch((err) => {
        const message = err.response.data.data.validationError
        alert(JSON.stringify(message))
      })
  }

  draftArticle() {
    var data = {
      title: this.state.title,
      content: this.state.content,
      category: this.state.category,
      status: 'Draft',
    }

    globalService
      .create(data)
      .then((response) => {
        alert(response.data.message)
        this.onClearForm()
      })
      .catch((err) => {
        const message = err.response.data.data.validationError
        alert(JSON.stringify(message))
      })
  }

  render() {
    return (
      <CRow>
        <CCol xs={12}>
          <CForm>
            <div className="mb-3">
              <CFormLabel htmlFor="title">Title</CFormLabel>
              <CFormInput
                type="text"
                id="title"
                value={this.state.title}
                onChange={this.onChangeTitle}
              />
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="content">Content</CFormLabel>
              <CFormTextarea
                id="content"
                rows="5"
                value={this.state.content}
                onChange={this.onChangeContent}
              />
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="category">Category</CFormLabel>
              <CFormInput
                type="text"
                id="category"
                value={this.state.category}
                onChange={this.onChangeCategory}
              />
            </div>
            <div className="col-auto">
              <CButton type="submit" className="mb-3" onClick={this.publishArticle}>
                Publish
              </CButton>
              &nbsp;
              <CButton type="submit" className="mb-3" onClick={this.draftArticle}>
                Draft
              </CButton>
            </div>
          </CForm>
        </CCol>
      </CRow>
    )
  }
}
