import Link from 'next/link';
import { useUser } from '../context/user';

const Nav = () => {
  const { user, isLoading } = useUser();

  return (
    <section className="border-b border-gray-200">
      <nav className="flex py-4 px-6">
        <Link href="/">
          <a>Home</a>
        </Link>
        {!!user && !isLoading && (
          <Link href="/dashboard">
            <a className="ml-2">Dashboard</a>
          </Link>
        )}
        <Link href="pricing">
          <a className="ml-2">Pricing</a>
        </Link>
        {!isLoading ? (
          <Link href={user ? '/logout' : '/login'}>
            <a className="ml-auto">{user ? 'Logout' : 'Login'}</a>
          </Link>
        ) : (
          <Link href="/login">
            <a className="ml-auto">Login</a>
          </Link>
        )}
      </nav>
    </section>
  );
};

export default Nav;
