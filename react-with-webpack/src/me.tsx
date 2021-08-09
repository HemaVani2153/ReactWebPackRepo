import React from 'react';
import { IWarningProps } from './warning-props';

const me: React.FC<IWarningProps> = (props: IWarningProps): JSX.Element => {
    return <span>{props.name}</span>;
};

export default me;
