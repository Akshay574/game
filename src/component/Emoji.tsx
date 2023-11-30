import bullsEye from '../assets/bulls-eye .webp';
import thumbsUp from '../assets/thumbs-up .webp';
import meh from '../assets/meh .webp';
import React from 'react'
import { Image, ImageProps } from '@chakra-ui/react';

interface Props {
    rating: number;
}



const Emoji = ({ rating }: Props) => {


    if (rating < 3) return null

    // const emojiMap = [
    //     { src: meh, alt: 'meh', boxSize: '25px' },
    //     { src: thumbsUp, alt: 'recommended', boxSize: '25px' },
    //     { src: bullsEye, alt: 'exceptional', boxSize: '35px' }
    // ];
    

    const emojiMap: { [key: string]: ImageProps } = {
        3: { src: meh, alt: 'meh', boxSize: '25px' },
        4: { src: thumbsUp, alt: 'recommended', boxSize: '25px' },
        5: { src: bullsEye, alt: 'exceptional', boxSize: '35px' }
    }

    // debugger

    return (
        <Image {...emojiMap[rating]} />
    )
}

export default Emoji
