import React, { useState } from 'react';
import { Text } from 'react-native';
import { Trigger , Container, Paragraph, Divider } from '../components';

import useComponentCommand from '../Hooks/useComponentCommand';
import StyleGate from '../providers/Style/StyleGate';
import { Feather } from '@expo/vector-icons';

const Home = () => {
    const [count, setCount] = useState(0);
    const commends = useComponentCommand();

    
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
        // <StyleGate >
            <Container reference={commends}>
            <>
                    {/* <Paragraph>
                        Ducimus totam in modi consequatur odit quia pariatur. Rerum ut error praesentium voluptates. Sapiente aut laudantium ipsa.
                        Ducimus totam in modi cons odit quia pariatur. Rerum ut error praesentium voluptates. Sapiente aut laudantium ipsa.
                        Ducimus totam in modi consequatur odit quia pariatur. Rerum ut error praesentium voluptates. Sapiente aut laudantium ipsa
                    </Paragraph> */}
                    {/* <Divider vertical="horizontal" /> */}
                    <Text>{count}</Text>
                    <Trigger
                        alignment="left"
                        icon="arrow-down-left"
                        disabled={count === 5}
                        round="8" 
                        size="large"
                        onPress={() => setCount(prev => prev + 1)}
                        // _overwrite={{container: {backgroundColor: 'red'}}} 
                        >
                            non.
                        </Trigger>
            </>
            </Container>
        // {/* </StyleGate> */}
    )
}


export default Home;