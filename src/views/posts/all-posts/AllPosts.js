import React, { Component } from 'react'
import globalService from 'src/services/global-service'
import {
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
} from '@coreui/react'

export default class AllPosts extends Component {
  constructor(props) {
    super(props)
    this.getAllData()
    this.state = {
      getResult: [],
    }
  }

  getAllData() {
    globalService
      .getAll()
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
              <CTableDataCell>{item.category}</CTableDataCell>
            </CTableRow>
          ))}
        </CTableBody>
      </CTable>
    )
  }
}
