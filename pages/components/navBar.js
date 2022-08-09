import Link from "next/link";

export default function navBar() {
  return (
    <nav className="  font-mono backdrop-blur-sm sticky top-0 border border-opacity-30 border-gray-300 bg-opacity-5 bg-gray-800 flex flex-wrap justify-between items-center p-6">
      <h1 href="/" className="cursor-pointer ">
        Guilherme Tauil
      </h1>
      <ul className="flex overflow-visible">
        <li className=" cursor-pointer sm:flex hidden mx-5 px-3 py-1 rounded hover:ring-1 hover:ring-gray-300  duration-500 hover:-translate-y-1 hover:bg-slate-200 hover:text-violet-900">
          <Link href="#Home">
            <a>Home</a>
          </Link>
        </li>
        <li className=" cursor-pointer sm:flex hidden mx-5 px-3 py-1 rounded hover:ring-1 hover:ring-gray-300  duration-500 hover:-translate-y-1 hover:bg-slate-200 hover:text-violet-900">
          <Link href="#Projetos">
            <a>Projects</a>
          </Link>
        </li>
        <li className=" cursor-pointer mx-5 px-3 py-1   rounded   duration-500 hover:-translate-y-1 hover:bg-opacity-0 hover:text-slate-200 text-violet-900 bg-slate-200 ring-2 ring-slate-200 ">
          <Link href="/">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
