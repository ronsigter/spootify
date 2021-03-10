import React, { Component } from 'react'
import DiscoverBlock from './DiscoverBlock/components/DiscoverBlock'
import '../styles/_discover.scss'
import { connect } from 'react-redux'
import fetchNewRelease from '../../../redux/actions/fetchNewRelease'
import fetchPlaylists from '../../../redux/actions/fetchPlaylists'
import fetchCategories from '../../../redux/actions/fetchCategories'

class Discover extends Component {
  componentWillMount() {
    const { token } = this.props
    this.props.fetchNewRelease(token)
    this.props.fetchPlaylists(token)
    this.props.fetchCategories(token)
  }

  render() {
    const { newReleases, playlists, categories } = this.props
    return (
      <div className="discover">
        <DiscoverBlock
          text="RELEASED THIS WEEK"
          id="released"
          data={newReleases.items}
          isLoading={newReleases.loading}
        />
        <DiscoverBlock
          text="FEATURED PLAYLISTS"
          id="featured"
          data={playlists.items}
          isLoading={playlists.loading}
        />
        <DiscoverBlock
          text="BROWSE"
          id="browse"
          data={categories.items}
          isLoading={categories.loading}
          imagesKey="icons"
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  newReleases: state.newReleases,
  playlists: state.playlists,
  categories: state.categories,
  token: state.auth.token,
})

export default connect(mapStateToProps, {
  fetchNewRelease,
  fetchPlaylists,
  fetchCategories,
})(Discover)
