import { MdNightsStay, MdWbSunny } from "react-icons/md";
export default function Header({ darkMode, setDarkMode }) {
    const heading="<Pv.Dev/>"
  return (
    <header className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <nav className="flex justify-between items-center p-5">
        <h1 className="text-5xl dev animate-bounce"> {heading} </h1>
        <div onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? (
            <MdWbSunny className="text-4xl cursor-pointer" />
          ) : (
            <MdNightsStay className="text-4xl cursor-pointer" /> 
          )}
        </div>
      </nav>
    </header>
  );
}
