import React from 'react'
import SearchBar from './SearchBar'
import ShoppingCart from './ShoppingCart'
import Notifications from './Notifications'

function TopBar() {
  return (
    <div>
      <h1>Top Bar</h1>
      <SearchBar />
      <ShoppingCart />
      <Notifications />

    </div>
  )
}

export default TopBar
