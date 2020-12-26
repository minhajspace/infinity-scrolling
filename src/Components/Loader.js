import React from 'react'
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'

const LoaderComponent = () => {
    return (
        <div>
            <Segment>
                <Dimmer active inverted>
                    <Loader size='massive'>Loading</Loader>
                </Dimmer>
                <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />             
            </Segment>
        </div>
    )
}

export default LoaderComponent