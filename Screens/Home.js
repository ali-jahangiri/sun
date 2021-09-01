import React, { useState } from 'react';

import { Trigger , Container, Paragraph, Checkbox } from '../components';
import Radio from '../components/Radio';

import useComponentCommand from '../Hooks/useComponentCommand';
import StyleGate from '../providers/Style/StyleGate';

const Home = () => {
    const [count, setCount] = useState(0);
    const commends = useComponentCommand();

    const [selected, setSelected] = useState(false);

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
                    <Paragraph>Architecto cum eos repellat debitis. Recusandae animi laudantium architecto expedita itaque. Suscipit et inventore qui eius. Aut quia distinctio ea ipsa quis enim hic. Veritatis eaque aspernatur expedita qui. Molestiae eligendi quo et dolorem aut et provident recusandae quia.Non autem praesentium do{count}</Paragraph>
                    {/* <Radio 
                        selected={selected}
                        error={count > 9}
                        onChange={() => {
                            setSelected(prev => !prev)
                            setCount(prev => prev + 1)
                        }}
                        label="Close on Time" />
                    */}
                    <Radio
                        disable={count >= 5}
                        selected={selected} 
                        onChange={() => setSelected(prev => !prev)}
                        label="Call only inside bitch" />
                    <Checkbox disable={count >= 5} selected={selected} onChange={() => setSelected(prev => !prev)} label={`This is label ${selected ? "true" : "false"}`} />
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