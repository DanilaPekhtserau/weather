import React, {FC} from 'react';

interface AButtonProps {

    text?: string

    func?: () => void
}

const AButton: FC<AButtonProps> = ({text, func}) => {
    return (
        <button onClick={func} >
            {text}
        </button>
    );
};

export default AButton;