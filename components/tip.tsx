import { HTMLProps } from 'react';

export interface TipProps extends HTMLProps<HTMLParagraphElement> {
	label: string;
}

const Tip = ({ label, className }: TipProps) => (
	<p className={className}>{`// TIP: ${label}`}</p>
);

export default Tip;
