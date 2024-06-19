import abhLogo from "../assets/react.svg"

export default function Navbar() {
  return (
    <>
      <header>
        <nav className="flex flex-row justify-between max-w-5xl mx-auto py-4">
          <div>
            <img src={abhLogo} alt="Myreact" width={30} height={24} />
          </div>
          <div className="flex justify-between">
            <ul className="flex gap-6 font-semibold text-red-700">
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Solutions</a>
              </li>
              <li>
                <a href="#">Our Networks</a>
              </li>
              <li>
                <a href="#">Resources</a>
              </li>
              <li className="bg-rose-700 text-white rounded-full px-7 py-1">
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
