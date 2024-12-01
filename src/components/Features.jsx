import icon1 from "../images/icon1.svg";
import icon2 from "../images/icon2.svg";
import icon3 from "../images/icon3.svg";
import icon4 from "../images/icon4.svg";
import icon5 from "../images/icon5.svg";
import icon6 from "../images/icon6.svg";

export function Features() {
    return (
        <div className="flex flex-col justify-center items-center bg-[#F4F6FC] px-8 md:px-20 lg:px-40 py-32 font-[Poppins] text-[#282938]">
            <div className="flex flex-col items-center gap-3 max-w-[630px] text-center">
                <p className="font-medium text-base">Features</p>
                <h2 className="font-semibold text-4xl lg:text-5xl">
                    Design that solves problems, one product at a time
                </h2>
            </div>
            <div className="gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pt-12">
                <div className="flex flex-col items-start gap-4 bg-white p-8 rounded-lg max-w-[405px]">
                    <img src={icon1} alt="icon1" />
                    <h2 className="font-normal text-xl lg:text-2xl">Uses Client First</h2>
                    <p className="opacity-70 max-w-[324px] font-normal text-sm lg:text-base">
                        Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.
                    </p>
                </div>
                <div className="flex flex-col items-start gap-4 bg-white p-8 rounded-lg max-w-[405px]">
                    <img src={icon2} alt="icon2" />
                    <h2 className="font-normal text-xl lg:text-2xl">Uses Client First</h2>
                    <p className="opacity-70 max-w-[324px] font-normal text-sm lg:text-base">
                        Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.
                    </p>
                </div>
                <div className="flex flex-col items-start gap-4 bg-white p-8 rounded-lg max-w-[405px]">
                    <img src={icon3} alt="icon3" />
                    <h2 className="font-normal text-xl lg:text-2xl">Uses Client First</h2>
                    <p className="opacity-70 max-w-[324px] font-normal text-sm lg:text-base">
                        Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.
                    </p>
                </div>
                <div className="flex flex-col items-start gap-4 bg-white p-8 rounded-lg max-w-[405px]">
                    <img src={icon4} alt="icon4" />
                    <h2 className="font-normal text-xl lg:text-2xl">Uses Client First</h2>
                    <p className="opacity-70 max-w-[324px] font-normal text-sm lg:text-base">
                        Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.
                    </p>
                </div>
                <div className="flex flex-col items-start gap-4 bg-white p-8 rounded-lg max-w-[405px]">
                    <img src={icon5} alt="icon5" />
                    <h2 className="font-normal text-xl lg:text-2xl">Uses Client First</h2>
                    <p className="opacity-70 max-w-[324px] font-normal text-sm lg:text-base">
                        Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.
                    </p>
                </div>
                <div className="flex flex-col items-start gap-4 bg-white p-8 rounded-lg max-w-[405px]">
                    <img src={icon6} alt="icon6" />
                    <h2 className="font-normal text-xl lg:text-2xl">Uses Client First</h2>
                    <p className="opacity-70 max-w-[324px] font-normal text-sm lg:text-base">
                        Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.
                    </p>
                </div>
            </div>
        </div>
    );
}
