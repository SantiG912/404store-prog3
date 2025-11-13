import React, { useEffect, useState } from 'react'
import DarkThemeIcon from './icons/DarkThemeIcon';
import LightThemeIcon from './icons/LightThemeIcon';

export default function Darkmode() {
    const [darkmode, setDarkmode] = useState(
        localStorage.getItem("darkmode") === "active"
    );
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        const savedTheme = localStorage.getItem("darkmode");
        if(savedTheme === null){
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            setDarkmode(prefersDark);
        }
    }, []);

    useEffect(() => {
        if(!isClient) return;
        document.body.classList.toggle("darkmode", darkmode);
        localStorage.setItem("darkmode", darkmode ? "active" : "inactive");
    },[darkmode, isClient]);

    const toggleTheme = () => {
        setDarkmode((prev) => !prev);
    };

    return (
        <>
        <button id="theme-switch" onClick={toggleTheme}>
            <DarkThemeIcon/>
            <LightThemeIcon/>
        </button>
        </>
    )
}
