import Link, { LinkProps } from 'next/link';

export interface LinkSwitcherProps extends LinkProps {
  label: string;
  navigation: boolean;
}

export const linkSwitcherClasses =
  'text-comp-link font-bold underline transition duration-500 cursor-pointer hover:text-comp-linkHover';

const LinkSwitcher = ({ label, navigation, href }: LinkSwitcherProps) =>
  navigation ? (
    <Link className={linkSwitcherClasses} href={href}>
      {label}
    </Link>
  ) : (
    <a className={linkSwitcherClasses} href={href + ''}>
      {label}
    </a>
  );

export default LinkSwitcher;
