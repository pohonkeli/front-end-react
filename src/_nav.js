import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilPuzzle, cilSpeedometer } from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavTitle,
    name: 'Menus',
  },
  {
    component: CNavGroup,
    name: 'Posts',
    to: '/posts',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'All Posts',
        to: '/posts/all-posts',
      },
      {
        component: CNavItem,
        name: 'Add New',
        to: '/posts/add-new',
      },
      {
        component: CNavItem,
        name: 'Review',
        to: '/posts/review',
      },
    ],
  },
]

export default _nav
