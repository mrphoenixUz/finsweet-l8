import React from 'react'
import logo from "../images/logo.svg"
import illustration from "../images/illustration.svg"
import homeicon from "../images/home.svg"

export function Header() {
    return (
        <header className="bg-color font-[Poppins] text-white">
            {/* Navigation Section */}
            <nav className="flex max-lg:flex-col justify-between items-center mx-auto px-8 md:px-20 lg:px-40 h-24 container">
                <a href="#">
                    <img src={logo} alt="logo"/>
                </a>
                <ul className="flex items-center gap-4">
                    <li>
                        <a href="#" className="flex items-center hover:text-colorr">
                            <span className="md:block hidden">Home</span>
                            <a href="#" title='Home' className="block md:hidden w-6 h-6"><i class="fa-house fa-solid"></i></a>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center hover:text-colorr">
                            <span className="md:block hidden">About</span>
                            <a href="#" title='About' className="block md:hidden w-6 h-6"><i class="fa-address-card fa-regular"></i></a>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center hover:text-colorr">
                            <span className="md:block hidden">Features</span>
                            <a href="#" title='Features' className="block md:hidden w-6 h-6"><i class="fa-feather fa-solid"></i></a>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center hover:text-colorr">
                            <span className="md:block hidden">Pricing</span>
                            <a href="#" title='Pricing' className="block md:hidden w-6 h-6"><i class="fa-money-bill fa-solid"></i></a>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center hover:text-colorr">
                            <span className="md:block hidden">FAQ</span>
                            <a href="#" title='FAQ' className="block md:hidden w-6 h-6"><i class="fa-question fa-solid"></i></a>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center hover:text-colorr">
                            <span className="md:block hidden">Blog</span>
                            <a href="#" title='Blog' className="block md:hidden w-6 h-6"><i class="fa-blog fa-solid"></i></a>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <button className="md:block border-[#F4F6FC33] border-2 hidden hover:bg-white rounded-[41px] w-[185px] h-[60px] text-center hover:text-[#1C1E53] transition">
                                Contact us
                            </button>
                            <a href="#" title='Contact' className="block md:hidden w-6 h-6"><i class="fa-address-book fa-solid"></i></a>
                        </a>
                    </li>
                </ul>
            </nav>


            {/* Hero Section */}
            <div className="flex lg:flex-row flex-col-reverse justify-between items-center mx-auto px-6 md:px-20 lg:px-40 py-16 md:py-24 lg:py-32 container">
                <div className="max-w-lg text-center lg:text-left">
                    <h1 className="font-semibold text-3xl md:text-4xl lg:text-5xl leading-tight">
                        Building stellar websites for early startups
                    </h1>
                    <p className="opacity-70 mt-6 font-normal text-sm md:text-base">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                    </p>
                    <div className="flex lg:flex-row flex-col items-center lg:items-start gap-4 lg:gap-10 mt-8">
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
                    <img src={illustration} alt="illustration" className="w-full max-w-xs md:max-w-md lg:max-w-lg" />
                </div>
            </div>
        </header>

    )
}

