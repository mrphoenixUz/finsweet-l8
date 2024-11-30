import React from 'react'
import logo from "../images/logo.svg"
import illustration from "../images/illustration.svg"

export function Header() {
    return (
        <div>
            <header>
                <div className="bg-color mx-auto font-[Poppins] text-white container">
                    {/* Navigation Section */}
                    <nav className="flex justify-between items-center px-40 h-24">
                        <a href="#">
                            <img src={logo} alt="logo" />
                        </a>
                        <ul className="flex items-center gap-8">
                            <li><a href="#" className="hover:text-colorr">Home</a></li>
                            <li><a href="#" className="hover:text-colorr">About us</a></li>
                            <li><a href="#" className="hover:text-colorr">Features</a></li>
                            <li><a href="#" className="hover:text-colorr">Pricing</a></li>
                            <li><a href="#" className="hover:text-colorr">FAQ</a></li>
                            <li><a href="#" className="hover:text-colorr">Blog</a></li>
                            <li>
                                <a href="#">
                                    <button className="border-[#F4F6FC33] border-2 hover:bg-white rounded-[41px] w-[185px] h-[60px] text-center hover:text-[#1C1E53] transition">
                                        Contact us
                                    </button>
                                </a>
                            </li>
                        </ul>
                    </nav>

                    {/* Hero Section */}
                    <div className="flex justify-between items-center px-40 py-32">
                        <div className="max-w-lg">
                            <h1 className="font-semibold text-5xl leading-tight">
                                Building stellar websites for early startups
                            </h1>
                            <p className="opacity-70 mt-6 font-normal text-[16px]">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                            </p>
                            <div className="flex items-center gap-10 mt-8">
                                <a href="#">
                                    <button className="bg-colorr hover:opacity-90 px-6 py-3 rounded-[41px] font-medium text-[#1C1E53] transition">
                                        View our work
                                    </button>
                                </a>
                                <a href="#" className="flex items-center gap-2 font-medium hover:underline">
                                    View Pricing <i className="fa-arrow-right fa"></i>
                                </a>
                            </div>
                        </div>
                        <div>
                            <img src={illustration} alt="illustration"/>
                        </div>
                    </div>
                </div>
            </header>
        </div>

    )
}

