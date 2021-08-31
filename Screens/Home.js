import React, { useState } from 'react';

import { Trigger , Container, Paragraph } from '../components';

import useComponentCommand from '../Hooks/useComponentCommand';
import StyleGate from '../providers/Style/StyleGate';

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
                    <Paragraph>Architecto cum eos repellat debitis. Recusandae animi laudantium architecto expedita itaque. Suscipit et inventore qui eius. Aut quia distinctio ea ipsa quis enim hic. Veritatis eaque aspernatur expedita qui. Molestiae eligendi quo et dolorem aut et provident recusandae quia.Non autem praesentium do</Paragraph>
                    <Trigger
                        iconOnlyAlignment="right"
                        icon="arrow-down-left"
                        disabled={count === 10}
                        round="10" 
                        size="large"
                        onPress={() => setCount(prev => prev + 1)}
                        // _overwrite={{container: {backgroundColor: 'red'}}} 
                        >
                            non.
                        </Trigger>
            </Container>
        // {/* </StyleGate> */}
    )
}


export default Home;