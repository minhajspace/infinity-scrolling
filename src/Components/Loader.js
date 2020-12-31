import React from 'react'
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'
import './Style/Scrolling.css'

const LoaderComponent = () => {
    return (
        <div className="main-div">
            <div className="item">

           
            <Segment>
                <Dimmer active inverted>
                    <Loader size='massive'>Loading</Loader>
                </Dimmer>
                <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />             
            </Segment>
        </div>
        </div>
    )
}

export default LoaderComponent
