import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
// import SignIn from "./components/SignIn";
import App from "./App";
import Title from "./components/Title";
import PhotoWall from './components/PhotoWall.js'
import AddPhotos from './components/AddPhotos'
import { RoomTwoTone } from '@material-ui/icons'
import { connect } from 'react-redux'


class Root extends React.Component {
  render() {
    const { store, authenticated } = this.props
    return <Provider store={store}>
      <Router>
        <div>
          <Title title="一个demo" />
          <div style={{ marginTop: '80px' }}>
            <Route path="/app" component={PhotoWall} />
            <Redirect exact from="/" to="app" />
            <Route exact path="/add_photots" component={AddPhotos} />
          </div>
        </div>
      </Router>
    </Provider>
    // if (!authenticated) {
    //   return <Provider store={store}>
    //     <Router>
    //       <div>
    //         <Title title="一个demo" />
    //         <div style={{ marginTop: '80px' }}>
    //           <Route path="/app" component={PhotoWall} />
    //           <Redirect exact from="/" to="app" />
    //           <Route exact path="/add_photots" component={AddPhotos} />
    //         </div>
    //       </div>
    //     </Router>
    //   </Provider>
    // } else {
    //   return <Provider store={store}>
    //     <SignIn />
    //   </Provider>
    // }
  }
}



Root.propTypes = {
  store: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  }
}


export default connect(mapStateToProps)(RoomTwoTone)