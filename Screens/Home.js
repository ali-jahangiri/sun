import React from 'react';
import { Trigger , Container, Paragraph, Divider } from '../components';

import useComponentCommand from '../Hooks/useComponentCommand';
import StyleGate from '../providers/Style/StyleGate';


const Home = () => {
    
    const commends = useComponentCommand()

    
    // const targetStyleGate = ({ color }) => ({
    //     color : {
    //         ...color,
    //         business : {
    //             ...color.business ,
    //             primary : 'red'
    //         },
    //         base : {
    //             ...color.base,
    //             black : 'red'
    //         }
    //     }
    // })

    return (
        <StyleGate >
            <Container size="normal" reference={commends}>
                    <Paragraph>
                        Ducimus totam in modi consequatur odit quia pariatur. Rerum ut error praesentium voluptates. Sapiente aut laudantium ipsa.
                        Ducimus totam in modi cons odit quia pariatur. Rerum ut error praesentium voluptates. Sapiente aut laudantium ipsa.
                        Ducimus totam in modi consequatur odit quia pariatur. Rerum ut error praesentium voluptates. Sapiente aut laudantium ipsa
                    </Paragraph>
                    <Divider vertical="horizontal" />
                    <Trigger round="3" size="large" type="primary" onPress={() => {}}>Press here</Trigger>
            </Container>
        </StyleGate>
    )
}


export default Home;