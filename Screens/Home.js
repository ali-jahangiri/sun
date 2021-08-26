import React, { useRef, useState } from 'react';
import { Button, Text, View } from 'react-native';
import { Container, Trigger } from '../components';
import Paragraph from '../components/Paragraph';
import useComponentCommand from '../Hooks/useComponentCommand';
import StyleGate from '../providers/Style/StyleGate';
import { systemColor } from '../style';


const Home = () => {
    const [count, setCount] = useState(0);

    const commends = useComponentCommand()


    const goToTop = () => {
        console.log(commends.current.scrollToPortion({ y : 25 }));
    }

    return (
        <StyleGate>
            <Container size="normal" reference={commends}>
                <Text>Render</Text>
                <Paragraph>
                    Ducimus totam in modi consequatur odit quia pariatur. Rerum ut error praesentium voluptates. Sapiente aut laudantium ipsa.
                    Ducimus totam in modi cons odit quia pariatur. Rerum ut error praesentium voluptates. Sapiente aut laudantium ipsa.
                    {count}
                    Ducimus totam in modi consequatur odit quia pariatur. Rerum ut error praesentium voluptates. Sapiente aut laudantium ipsa.
                </Paragraph>
                <Trigger size="large" onPress={e => console.log()}>
                    Press here
                </Trigger>
            </Container>
        </StyleGate>
    )
}


export default Home;