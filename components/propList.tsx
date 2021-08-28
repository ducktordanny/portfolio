import React from 'react';
import { Prop } from '../components/colored';
import StyledProp from '../components/styledProp';

export type PropsObject = Array<{
	name: string;
	value: number | string | string[];
}>;

// it's only used here...
interface PropListProps {
	array: PropsObject;
}

export const PropList: React.FC<PropListProps> = ({ array }: PropListProps) => (
	<>
		{array.map(({ name, value }, index) => (
			<React.Fragment key={`${name}-${value}-${index}`}>
				{array.length > 1 && '\n '}
				<Prop>{` ${name}=`}</Prop>
				<StyledProp value={value} />
			</React.Fragment>
		))}
		{array.length > 1 && <br />}
	</>
);
