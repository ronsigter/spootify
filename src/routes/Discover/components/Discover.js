import React, { Component } from 'react'
import DiscoverBlock from './DiscoverBlock/components/DiscoverBlock'
import '../styles/_discover.scss'
import { connect } from 'react-redux'
import fetchNewRelease from '../../../redux/actions/newRelease/fetchNewRelease'

class Discover extends Component {
  componentWillMount() {
    this.props.fetchNewRelease()
  }

  render() {
    const { newReleases } = this.props
    console.log(newReleases)
    return (
      <div className='discover'>
        <DiscoverBlock
          text='RELEASED THIS WEEK'
          id='released'
          data={newReleases.items}
        />
        {/* <DiscoverBlock
          text='FEATURED PLAYLISTS'
          id='featured'
          data={playlists}
        />
        <DiscoverBlock
          text='BROWSE'
          id='browse'
          data={categories}
          imagesKey='icons'
        /> */}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  newReleases: state.newReleases,
})

export default connect(mapStateToProps, { fetchNewRelease })(Discover)
