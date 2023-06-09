'use client';
import React from 'react';

function Header() {
    return (
        <header className="flex justify-between items-center max-w-5xl p-8 mx-auto">
            <div className="flex items-center justify-center text-white font-medium uppercase text-lg">
                <img src="/pom.gif" className="w-16 h-16 mr-4" />
            </div>

            <a href="#" className="buttons text-white">
                Powered By -<span className="text-purple-300 ml-1">OpenAI</span>
            </a>
        </header>
    );
}

export default Header;
