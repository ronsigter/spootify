import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import Player from '../components/Player'
import Login from '../components/Login/Login'

// Get the hash of the url
const hash = window.location.hash
  .substring(1)
  .split('&')
  .reduce(function (initial, item) {
    if (item) {
      var parts = item.split('=')
      initial[parts[0]] = decodeURIComponent(parts[1])
    }
    return initial
  }, {})
window.location.hash = ''

function CoreLayout({ children, history }) {
  const [token, setToken] = useState(null)
  useEffect(() => {
    const token = hash.access_token
    if (token) setToken(token)
  }, [])

  return (
    <div className='main'>
      {token ? (
        <>
          <SideBar />
          <div className='main__content'>
            <Header history={history} />
            <div className='main__content__child'>{children}</div>
          </div>
          <Player />
        </>
      ) : (
        <Login />
      )}
    </div>
  )
}

export default CoreLayout
