import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Colors = React.lazy(() => import('./views/theme/colors/Colors'))
const Typography = React.lazy(() => import('./views/theme/typography/Typography'))

// Base
const AllPosts = React.lazy(() => import('./views/posts/all-posts/AllPosts'))
const AddNew = React.lazy(() => import('./views/posts/add-new/AddNew'))
const Review = React.lazy(() => import('./views/posts/review/Review'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/theme', name: 'Theme', element: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', element: Colors },
  { path: '/theme/typography', name: 'Typography', element: Typography },
  { path: '/posts', name: 'Posts', element: Review, exact: true },
  { path: '/posts/all-posts', name: 'All Posts', element: AllPosts },
  { path: '/posts/add-new', name: 'Add New', element: AddNew },
  { path: '/posts/review', name: 'Review', element: Review },
]

export default routes
