import { toggleTheme } from "../utils/functions";

const Navbar = () => {
    return (
        <header className="sticky top-0 z-50 p-5 dark:bg-gray-800 shadow-lg flex">
            <h1 className="dark:text-white text-3xl ml-4">Markdown Editor</h1>
            <div className="flex-grow" />
            <button
                className="border-1 rounded-md p-3 dark:text-white hover:bg-gray-300 hover:bg-opacity-5 active:bg-opacity-10 mr-5"
                onClick={toggleTheme}
            >
                Toggle Theme
            </button>
        </header>
    );
};

export default Navbar;
