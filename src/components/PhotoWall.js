import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {connect} from 'react-redux'
import Photo from './Photo'
import Title from './Title'

const styles = {
    header: {
        height: '100px',
    }
};

class PhotoWall extends Component {

    constructor(){
        super();
    }

    render() {
        const { classes, posts } = this.props;
        return <div>
            {posts.map((post, index) => <Photo key={index} info={post} />)}
        </div>
    }
}

PhotoWall.propTypes = {
    classes: PropTypes.object.isRequired
};

function mapStateToProps(state){
    console.log('mapStateToProps', state)
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(withStyles(styles)(PhotoWall))