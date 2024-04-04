import React, { useEffect } from 'react';

function Header() {
    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector("header");
            if (window.scrollY > 0) {
                header.classList.add("sticky");
            } else {
                header.classList.remove("sticky");
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Cleanup: remove event listener when component unmounts
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []); // Empty dependency array ensures the effect runs only once on component mount

    return (
        <header>
            <a href="#" className="logo">pau's digital diary</a>
            <ul>
                <li><a href="#">home</a></li>
                <li><a href="#">about</a></li>
                <li><a href="#">pages</a></li>
                <li><a href="#">contact</a></li>
            </ul>
        </header>
    );
}

export default Header;
