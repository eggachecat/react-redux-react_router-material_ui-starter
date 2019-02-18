import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import SignIn from "./components/SignIn";
import App from "./App";
import Title from "./components/Title";
import PhotoWall from './components/PhotoWall.js'
import AddPhotos from './components/AddPhotos'
import { RoomTwoTone } from '@material-ui/icons'
import { connect } from 'react-redux'
import Notification from './components/Notification'
import DicomViewer from './components/dicom-viewer'
import OHIFViewer from './components/ohif-viewer'

class Root extends React.Component {
  render() {
    const { auth } = this.props

    if (auth.authenticated) {
      return <Router>
        <div>
          <Notification type="success" message="Hello world" />
          <Title title="一个demo" />
          <div style={{ marginTop: '80px' }}>
            <Route path="/app" component={PhotoWall} />
            <Route exact path="/add_photots" component={AddPhotos} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/viewer" component={DicomViewer} />
            <Route exact path="/ohif" component={OHIFViewer} />

            {/* <Redirect to="/app" /> */}
          </div>
        </div>
      </Router>
    } else {
      return <Router>
        <div>
          <Route exact path="/signin" component={SignIn} />
          <Redirect to="/signin/" />
        </div>
      </Router>
    }

  }
}

Root.propTypes = {
  auth: PropTypes.shape({
    authenticated: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
  }),
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}


export default connect(mapStateToProps)(Root)