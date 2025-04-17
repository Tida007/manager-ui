import React, { useEffect, useState } from "react";
import iconMoon from "../assets/images/icon-moon.svg";
import iconSun from "../assets/images/icon-sun.svg";
import logo from "../assets/images/logo.svg";

function Header() {
    // "Apply the 'dark' class when loading the theme from localStorage." 

    const [theme, setThemes] = useState("dark");

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        console.log("Stored theme:", storedTheme);
        if (storedTheme) {
            setThemes(storedTheme === "dark");
            if (storedTheme === "dark") {
                document.documentElement.classList.add("dark"); 
                console.log("Dark mode activated"); 
            } else {
                document.documentElement.classList.remove("dark");
                console.log("Light mode activated");
            }
        }
    }, []);

    const toogleTheme = () => {
        console.log("Toggling theme. Current theme:", theme);
        const newTheme = theme === "light" ? "dark" : "light";
        setThemes(newTheme);
        localStorage.setItem("theme", newTheme);
        if (newTheme === "dark") {
            document.documentElement.classList.add("dark");
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
            document.body.classList.remove("dark")
        }
    };

    return (
        <div className="flex justify-between items-center p-2 mt-4 shadow-md rounded-lg max-w-6xl mx-auto bg-auto bg-white dark:bg-gray-800 text-black dark:text-white">
            <button className="hover:cursor-pointer">
                <img src={logo} alt="Logo" className="w-26 h-auto" />
            </button>
            <button
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 cursor-pointer"
                onClick={toogleTheme}
            >
                <img
                    src={theme === "dark" ? iconSun : iconMoon}
                    alt={theme === "dark" ? "Light Mode" : "Dark Mode"}
                    className="w-5 h-5"
                />
            </button>
        </div>
    );
 }

export default Header;