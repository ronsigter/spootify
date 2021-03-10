import React, { useEffect } from 'react'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import Player from '../components/Player'
import Login from '../components/Login/Login'
import { hash } from '../../utils'
import { useSelector, useDispatch } from 'react-redux'
import setToken from '../../redux/actions/setToken'

function CoreLayout({ children, history }) {
  const dispatch = useDispatch()
  const { token } = useSelector((state) => state.auth)

  useEffect(() => {
    const hashToken = hash.access_token
    if (hashToken) dispatch(setToken(hashToken))
  }, [dispatch])

  return (
    <div className="main">
      {token ? (
        <>
          <SideBar />
          <div className="main__content">
            <Header history={history} />
            <div className="main__content__child">{children}</div>
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
