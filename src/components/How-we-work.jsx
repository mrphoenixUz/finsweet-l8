import pointer1 from "../images/pointer1.svg";
import pointer2 from "../images/pointer2.svg";
import pointer3 from "../images/pointer3.svg";
import pointer4 from "../images/pointer4.svg";

export function HowWeWork() {
    return (
        <div className="flex lg:flex-row flex-col justify-between items-center gap-12 bg-[#F4F6FC] px-8 md:px-20 lg:px-40 py-32 font-[Poppins] text-[#282938]">
            <div className="flex flex-col gap-4 max-w-[405px]">
                <h2 className="font-semibold text-4xl lg:text-5xl">How we work</h2>
                <p className="opacity-70 font-normal text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                </p>
                <a
                    href="#"
                    className="flex items-center gap-3 font-medium text-[#2405F2] tracking-wider"
                >
                    Get in touch with us <i className="fa-arrow-right fa"></i>
                </a>
            </div>
            <div className="gap-8 grid grid-cols-1 sm:grid-cols-2">
                <div className="flex flex-col items-start gap-4 rounded-lg max-w-[328px]">
                    <img src={pointer1} alt="pointer1" />
                    <h2 className="font-medium text-xl lg:text-3xl">Strategy</h2>
                    <p className="opacity-70 max-w-[303px] font-normal text-base">
                        Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam.
                    </p>
                </div>
                <div className="flex flex-col items-start gap-4 rounded-lg max-w-[328px]">
                    <img src={pointer2} alt="pointer2" />
                    <h2 className="font-medium text-xl lg:text-3xl">Wireframing</h2>
                    <p className="opacity-70 max-w-[303px] font-normal text-base">
                        Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam.
                    </p>
                </div>
                <div className="flex flex-col items-start gap-4 rounded-lg max-w-[328px]">
                    <img src={pointer3} alt="pointer3" />
                    <h2 className="font-medium text-xl lg:text-3xl">Design</h2>
                    <p className="opacity-70 max-w-[303px] font-normal text-base">
                        Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam.
                    </p>
                </div>
                <div className="flex flex-col items-start gap-4 rounded-lg max-w-[328px]">
                    <img src={pointer4} alt="pointer4" />
                    <h2 className="font-medium text-xl lg:text-3xl">Development</h2>
                    <p className="opacity-70 max-w-[303px] font-normal text-base">
                        Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam.
                    </p>
                </div>
            </div>
        </div>
    );
}
