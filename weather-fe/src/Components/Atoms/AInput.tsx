import React, {FC} from 'react';

interface AInputProps {
    type?: React.HTMLInputTypeAttribute
    placeholder?: string
}

const AInput: FC<AInputProps> = ({placeholder, type}) => {
    return (
        <input placeholder={placeholder} type = {type}>
            
        </input>
    );
};

export default AInput;