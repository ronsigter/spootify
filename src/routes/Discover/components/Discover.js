import React, { Component } from 'react'
import DiscoverBlock from './DiscoverBlock/components/DiscoverBlock'
import '../styles/_discover.scss'
import { connect } from 'react-redux'
import fetchNewRelease from '../../../redux/actions/fetchNewRelease'
import fetchPlaylists from '../../../redux/actions/fetchPlaylists'
import fetchCategories from '../../../redux/actions/fetchCategories'

const token =
  'BQDVZ3uF4P5AHLJnQOQMxbwHHmnKwD5PlfWEPcaSNdUTOUSLzu-jn4AbPDUdGEAELka8aVpH_t5Uq5IhN9R1AOqYG5CMDYAjLQgDgO6t7y3fZknZi2FupHzwFp7sjbe6w6rTzmXecZGQgA'
class Discover extends Component {
  componentWillMount() {
    this.props.fetchNewRelease(token)
    this.props.fetchPlaylists(token)
    this.props.fetchCategories(token)
  }

  render() {
    const { newReleases, playlists, categories } = this.props
    return (
      <div className='discover'>
        <DiscoverBlock
          text='RELEASED THIS WEEK'
          id='released'
          data={newReleases.items}
        />
        <DiscoverBlock
          text='FEATURED PLAYLISTS'
          id='featured'
          data={playlists.items}
        />
        <DiscoverBlock
          text='BROWSE'
          id='browse'
          data={categories.items}
          imagesKey='icons'
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  newReleases: state.newReleases,
  playlists: state.playlists,
  categories: state.categories,
})

export default connect(mapStateToProps, {
  fetchNewRelease,
  fetchPlaylists,
  fetchCategories,
})(Discover)
