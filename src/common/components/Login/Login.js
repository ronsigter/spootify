import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faStepForward,
  faPlayCircle,
  faStepBackward,
  faEllipsisH,
} from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faRandom } from '@fortawesome/free-solid-svg-icons'
import { faRetweet } from '@fortawesome/free-solid-svg-icons'
import { faVolumeDown } from '@fortawesome/free-solid-svg-icons'
import config from '../../../config'

export default function Login() {
  return (
    <div className='login'>
      <a
        className='btn btn--loginApp-link'
        href={`${config.api.authEndpoint}client_id=${config.api.clientId}&redirect_uri=${config.api.redirectUri}&response_type=token&show_dialog=true`}
      >
        Login to Spotify
      </a>
    </div>
  )
}
