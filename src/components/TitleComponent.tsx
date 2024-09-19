import React from 'react';
import { fontFamily } from '../utils/constants/fontFamily';
import TextComponent from './TextComponent';

interface Props {
    text: string,
    font?: string,
    size?: number,
    color?: string,
    marginBottom?: number,
}

const TitleComponent = (props: Props) => {

    const { text, font, size, color, marginBottom } = props;

    return (
        <TextComponent
            marginBottom={marginBottom ?? 0}
            size={size ?? 20}
            font={font ?? fontFamily.semiBold}
            color={color}
            text={text}
        />
    )
}

export default TitleComponent