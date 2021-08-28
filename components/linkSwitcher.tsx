import Link, { LinkProps } from 'next/link';

export interface LinkSwitcherProps extends LinkProps {
	label: string;
	navigation: boolean;
}

const LinkSwitcher = ({ label, navigation, href }: LinkSwitcherProps) =>
	navigation ? (
		<Link href={href}>
			<a className="text-comp font-bold underline transition duration-500 hover:text-comp-link">
				{label}
			</a>
		</Link>
	) : (
		<a
			className="text-comp font-bold underline transition duration-500 hover:text-comp-link"
			href={href + ''}
		>
			{label}
		</a>
	);

export default LinkSwitcher;
