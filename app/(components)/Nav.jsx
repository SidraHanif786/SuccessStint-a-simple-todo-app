import Link from "next/link";

const Nav = () => {
  return (
    <nav className="flex justify-between bg-nav p-4">
      <div className="flex items-center justify-center gap-4">
        <Link href="/">
         <h5 className="text-slate-100 hover:text-blue-accent/90">Home</h5>
        </Link>
        <Link href="/TicketPage/new">
        <h5 className="text-slate-100 hover:text-blue-accent/90">Create New</h5>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
