import React from 'react';
import { LinkProps } from 'next/link';
import { Component } from './colored';
import { PropList, PropsObject } from './propList';
import { capitalizeFirstLetter } from '../lib/utils';
import LinkSwitcher from './linkSwitcher';

export interface ComponentProps {
	name: string;
	props?: PropsObject;
}

export const SelfClosingComponent: React.FC<ComponentProps> = ({
	name,
	props,
}: ComponentProps) => {
	return (
		<pre>
			<Component>{`<${capitalizeFirstLetter(name)}`}</Component>
			<PropList array={props || []} />
			<Component>{'/>'}</Component>
		</pre>
	);
};

export interface ParentComponentProps extends ComponentProps {
	children: React.ReactNode;
}

export const ParentComponent: React.FC<ParentComponentProps> = ({
	name,
	props,
	children,
}: ParentComponentProps) => {
	return (
		<pre className="parent-container">
			<Component>{`<${capitalizeFirstLetter(name)}`}</Component>
			<PropList array={props || []} />
			<Component>{'>'}</Component>
			{children}
			<Component>{`</${name}>`}</Component>
		</pre>
	);
};

export interface LinkComponentProps extends ComponentProps, LinkProps {
	navigation?: boolean;
}

export const LinkComponent: React.FC<LinkComponentProps> = ({
	name,
	navigation,
	href,
}: LinkComponentProps) => {
	return (
		<pre>
			<Component>
				{`<`}
				<LinkSwitcher
					label={capitalizeFirstLetter(name)}
					navigation={!!navigation}
					href={href}
				/>
				{' />'}
			</Component>
		</pre>
	);
};
