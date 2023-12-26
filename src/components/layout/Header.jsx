import Link from "next/link";

const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <a href="#" className="text-primary font-semibold text-2xl uppercase">
        Pizzeria
      </a>
      <nav className="flex items-center gap-8 text-gray-600 font-semibold">
        <Link href={""}>Home</Link>
        <Link href={""}>Menu</Link>
        <Link href={""}>About</Link>
        <Link href={""}>Contact</Link>
        <Link
          href={""}
          className="bg-primary text-white px-7 py-2 rounded-full"
        >
          Login
        </Link>
      </nav>
    </header>
  );
};

export default Header;
