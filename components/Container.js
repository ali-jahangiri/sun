import React, { useEffect, useRef } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import useDynamicStyle from '../Hooks/useDynamicStyle';
import { systemSpace } from '../style';

/**
 * @param {{ reference? : object , hideScrollbar? : boolean  , size : "fluid" | "normal" | "small" | "box"}} props 
*/

const Container = ({ children , size = "normal" , reference , hideScrollbar = false}) => {

    const appendedStyle = useDynamicStyle(style , { size })

    const _containerRef = useRef();

    const scrollToTop = () => {
        _containerRef.current?.scrollTo({
            y: 0,
            animated: true,
        });
    }

    const scrollToPortion = ({ y = 0 , animated = true }) => {
        _containerRef.current?.scrollTo({
            y: Number(y),
            animated,
        });
    }

    useEffect(() => {
        reference.current = {
            scrollToTop , 
            scrollToPortion
        }
    } , [])

    return (
        <ScrollView 
            contentContainerStyle={appendedStyle.container} 
            ref={_containerRef}
            showsVerticalScrollIndicator={!hideScrollbar}
            showsHorizontalScrollIndicator={!hideScrollbar}
        >
            {children}
        </ScrollView>
    )
}

const style = ({ size }) => StyleSheet.create({
    container : {
        width : `${systemSpace.containerSize[size]}%`,
        marginHorizontal : `${(100 - systemSpace.containerSize[size]) / 2}%`,
    }
})

export default Container;