import React from 'react';
import Link, { LinkProps } from 'next/link';
import StyledProp from './styledProp';
import { Component, Prop } from './colored';

export interface ComponentProps {
	name: string;
	props?: {
		name: string;
		value: string | number | string[];
	}[];
}

export const SelfClosingComponent: React.FC<ComponentProps> = ({
	name,
	props,
}: ComponentProps) => {
	return (
		<pre>
			<Component>{`<${name}`}</Component>
			{props?.map(({ name, value }, index) => {
				return (
					<React.Fragment key={`${name}-${value}-${index}`}>
						<br />
						<Prop>{`  ${name}=`}</Prop>
						<StyledProp value={value} />
					</React.Fragment>
				);
			})}
			{props && props.length > 0 ? <br /> : ' '}
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
			<Component>{`<${name}`}</Component>
			{props?.map(({ name, value }, index) => {
				return (
					<React.Fragment key={`${name}-${value}-${index}`}>
						{props.length > 1 && <br />}
						{props.length > 1 && ' '}
						<Prop>{` ${name}=`}</Prop>
						<StyledProp value={value} />
					</React.Fragment>
				);
			})}
			{props && props.length > 1 && <br />}
			<Component>{'>'}</Component>
			{children}
			<Component>{`</${name}>`}</Component>
		</pre>
	);
};

export interface LinkComponentProps extends ComponentProps, LinkProps {
	navigation: boolean;
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
				{navigation ? (
					<Link href={href}>
						<a>{name}</a>
					</Link>
				) : (
					<a href={href + ''}>{name}</a>
				)}
				{' />'}
			</Component>
		</pre>
	);
};
