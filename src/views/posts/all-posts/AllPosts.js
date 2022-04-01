import React, { Component } from 'react'
import globalService from 'src/services/global-service'
import {
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
  CNav,
  CNavItem,
  CNavLink,
  CTabPane,
  CTabContent,
} from '@coreui/react'

export default class AllPosts extends Component {
  constructor(props) {
    super(props)
    this.getAllPublish()
    this.state = {
      getResult: [],
      activeKey: 1,
    }
    this.getAllPublish = this.getAllPublish.bind(this)
    this.getAllDraft = this.getAllDraft.bind(this)
    this.getAllThrash = this.getAllThrash.bind(this)
  }

  getAllPublish() {
    this.setState({
      activeKey: 1,
    })
    globalService
      .getAllDataByStatus('Publish')
      .then((response) => {
        this.setState({
          getResult: response.data.data,
        })
      })
      .catch((e) => {
        console.log(e)
      })
  }

  getAllDraft() {
    this.setState({
      activeKey: 2,
    })
    globalService
      .getAllDataByStatus('Draft')
      .then((response) => {
        this.setState({
          getResult: response.data.data,
        })
      })
      .catch((e) => {
        console.log(e)
      })
  }

  getAllThrash() {
    this.setState({
      activeKey: 3,
    })
    globalService
      .getAllDataByStatus('Thrash')
      .then((response) => {
        this.setState({
          getResult: response.data.data,
        })
      })
      .catch((e) => {
        console.log(e)
      })
  }

  render() {
    return (
      <>
        <CNav variant="tabs" role="tablist">
          <CNavItem>
            <CNavLink active={this.state.activeKey === 1} onClick={this.getAllPublish}>
              Publish
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink active={this.state.activeKey === 2} onClick={this.getAllDraft}>
              Draft
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink active={this.state.activeKey === 3} onClick={this.getAllThrash}>
              Trash
            </CNavLink>
          </CNavItem>
        </CNav>
        <CTabContent>
          <CTabPane role="tabpanel" aria-labelledby="home-tab" visible={this.state.activeKey === 1}>
            <CTable>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">Title</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Category</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {this.state.getResult.map((item) => (
                  <CTableRow key={item.title}>
                    <CTableDataCell>{item.title}</CTableDataCell>
                    <CTableDataCell>{item.status}</CTableDataCell>
                  </CTableRow>
                ))}
              </CTableBody>
            </CTable>
          </CTabPane>
          <CTabPane
            role="tabpanel"
            aria-labelledby="profile-tab"
            visible={this.state.activeKey === 2}
          >
            <CTable>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">Title</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Category</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {this.state.getResult.map((item) => (
                  <CTableRow key={item.title}>
                    <CTableDataCell>{item.title}</CTableDataCell>
                    <CTableDataCell>{item.status}</CTableDataCell>
                  </CTableRow>
                ))}
              </CTableBody>
            </CTable>
          </CTabPane>
          <CTabPane
            role="tabpanel"
            aria-labelledby="contact-tab"
            visible={this.state.activeKey === 3}
          >
            <CTable>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">Title</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Category</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {this.state.getResult.map((item) => (
                  <CTableRow key={item.title}>
                    <CTableDataCell>{item.title}</CTableDataCell>
                    <CTableDataCell>{item.status}</CTableDataCell>
                  </CTableRow>
                ))}
              </CTableBody>
            </CTable>
          </CTabPane>
        </CTabContent>
      </>
    )
  }
}
