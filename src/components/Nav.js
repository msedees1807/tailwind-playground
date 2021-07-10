import { Link } from "react-router-dom";

function nav() {
  const pages = ["Home", "About", "Instagram", "Twitter"];

  return (
    <div>
      <nav>
        <h1 className="text-4xl p-5 font-raleway">Hôwm</h1>
        <ul className="flex justify-center">
          {pages.map((page) => (
            <li
              className="p-3 text-sm text-gray-400 hover:text-gray-600"
              key={page}
            >
              <Link to={`/${page}`}>{page}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default nav;
