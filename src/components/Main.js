import React, { Component } from 'react'
import PhotoWall from './PhotoWall'
import Title from './Title'

const posts = [{
    id: "0",
    description: "post_0",
    imageLink: "https://tinypng.com/images/social/website.jpg"
}, {
    id: "1",
    description: "post_1",
    imageLink: "https://tinypng.com/images/social/website.jpg"
}, {
    id: "2",
    description: "post_2",
    imageLink: "https://tinypng.com/images/social/website.jpg"
}]

class Main extends Component {
    render() {
        return <div>
            <Title title={"PhotoWall"} />
            <PhotoWall posts={posts} />
        </div>
    }
}

export default Main