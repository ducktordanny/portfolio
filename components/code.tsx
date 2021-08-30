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
		<section>
			<Component>{`<${capitalizeFirstLetter(name)}`}</Component>
			<PropList array={props || []} />
			<Component>{'/>'}</Component>
		</section>
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
		<section className="parent-container">
			<Component>{`<${capitalizeFirstLetter(name)}`}</Component>
			<PropList array={props || []} />
			<Component>{'>\n'}</Component>
			{children}
			<Component>{`</${name}>\n`}</Component>
		</section>
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
		<section>
			<Component>
				{`<`}
				<LinkSwitcher
					label={capitalizeFirstLetter(name)}
					navigation={!!navigation}
					href={href}
				/>
				{' />\n'}
			</Component>
		</section>
	);
};
