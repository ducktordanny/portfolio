import Link, { LinkProps } from 'next/link';

export interface LinkSwitcherProps extends LinkProps {
  label: string;
  navigation: boolean;
}

const linkSwitcherClasses =
  'text-comp-link font-bold underline transition duration-500 hover:text-comp-linkHover';

const LinkSwitcher = ({ label, navigation, href }: LinkSwitcherProps) =>
  navigation ? (
    <Link href={href}>
      <a className={linkSwitcherClasses}>{label}</a>
    </Link>
  ) : (
    <a className={linkSwitcherClasses} href={href + ''}>
      {label}
    </a>
  );

export default LinkSwitcher;
