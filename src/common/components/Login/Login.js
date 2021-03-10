import React from 'react'
import config from '../../../config'
import './_login.scss'

export default function Login() {
  return (
    <div className='login'>
      <a
        className='btn'
        href={`${config.api.authUrl}?&response_type=token&client_id=${
          config.api.clientId
        }&redirect_uri=${encodeURIComponent(config.api.redirectUrl)}`}
      >
        Login to Spotify
      </a>
    </div>
  )
}
