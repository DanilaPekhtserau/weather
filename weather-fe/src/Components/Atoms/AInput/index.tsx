import React, {FC} from 'react';

interface AInputProps {
    type?: React.HTMLInputTypeAttribute
    placeholder?: string

    onChange?: () => void
}

const AInput: FC<AInputProps> = ({placeholder, type, onChange}) => {
    return (
        <input placeholder={placeholder} type = {type} onChange={() => {onChange && onChange()}}>
            
        </input>
    );
};

export default AInput;