import React, {FC} from 'react';

interface BButtonProps {
    text: string;
}
const BButton: FC<BButtonProps> = ({text}) => {
    // @ts-ignore
    return (
        <button>
            {text}
        </button>
    );
};

export default BButton;