import {Link} from '@/i18n/routing';

type Props = {
  href: string;
  children: React.ReactNode;
};

export function CustomLink({children, href}: Props) {
  const isExternal = href.startsWith('http');
  return isExternal ? (
    <a href={href} rel="noopener noreferrer" target="_blank">
      {children}
    </a>
  ) : (
    <Link
      href={{
        pathname: '/',
        query: {
          ref: href
        }
      }}
    >
      {children}
    </Link>
  );
}

export default CustomLink;
