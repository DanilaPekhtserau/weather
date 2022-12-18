import React, {FC} from 'react';

interface AButtonProps {

    text?: string

    func?: () => any
}

const AButton: FC<AButtonProps> = ({text, func}) => {
    return (
        <button onClick={ ()=>{func && func()}} >
            {text}
        </button>
    );
};

export default AButton;