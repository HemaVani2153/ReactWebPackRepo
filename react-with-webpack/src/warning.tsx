import React from 'react';
import { IWarningProps } from './warning-props';

const warning: React.FC<IWarningProps> = (props: IWarningProps) => (
    <span>{props.name}</span>
);

export default warning;
