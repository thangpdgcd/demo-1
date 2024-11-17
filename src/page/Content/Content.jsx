import { useState } from 'react';
const Content = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <content>
                <div className="content p-[50px]  bg-white">
                    <div className="flex justify-between items-center bg-white p-4  ">
                        <h1 className="text-xl font-semibold text-gray-700">Filter</h1>

                        <div className="icon pl-20">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 26 26" className="w-5 cursor-pointer">
                                <path d="M 21.734375 19.640625 L 19.636719 21.734375 C 19.253906 22.121094 18.628906 22.121094 18.242188 21.734375 L 13 16.496094 L 7.761719 21.734375 C 7.375 22.121094 6.746094 22.121094 6.363281 21.734375 L 4.265625 19.640625 C 3.878906 19.253906 3.878906 18.628906 4.265625 18.242188 L 9.503906 13 L 4.265625 7.761719 C 3.882813 7.371094 3.882813 6.742188 4.265625 6.363281 L 6.363281 4.265625 C 6.746094 3.878906 7.375 3.878906 7.761719 4.265625 L 13 9.507813 L 18.242188 4.265625 C 18.628906 3.878906 19.257813 3.878906 19.636719 4.265625 L 21.734375 6.359375 C 22.121094 6.746094 22.121094 7.375 21.738281 7.761719 L 16.496094 13 L 21.734375 18.242188 C 22.121094 18.628906 22.121094 19.253906 21.734375 19.640625 Z"></path>
                            </svg>
                        </div>


                        <div className="number text-lg font-semibold text-gray-800 gap-5"><span>123 product</span></div>


                        <div className="markdow flex space-x-4">
                            <ul className="flex space-x-6">
                                <li className="flex items-center text-gray-700">
                                    <span className="font-medium">Filter</span>
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <span className="font-medium">Sort by</span>
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <span className="font-medium">Option 1</span>
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <span className="font-medium">Option 2</span>
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <span className="font-medium">Option 3</span>
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <span className="font-medium">Option 4</span>
                                </li>
                            </ul>
                        </div>

                    </div>
                    <div className="relative inline-block text-left">
                        {/* Button to toggle dropdown */}
                        <button
                            onClick={toggleDropdown}
                            className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                        >
                            Categories
                            <svg
                                className="ml-2 -mr-1 h-5 w-5 text-gray-500"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 9l-7 7-7-7"
                                ></path>
                            </svg>
                        </button>

                        {/* Dropdown menu */}
                        {isOpen && (
                            <div className="absolute bg-white shadow-lg rounded-lg w-48 mt-2 py-2 z-10 max-h-60 overflow-y-auto">
                                <ul>
                                    <li className="text-gray-700 p-2 hover:bg-gray-100">
                                        <span className="font-medium">Category</span>
                                    </li>
                                    <li className="text-gray-700 p-2 hover:bg-gray-100">
                                        <span className="font-medium">Home & Decor</span>
                                    </li>
                                    <li className="text-gray-700 p-2 hover:bg-gray-100">
                                        <span className="font-medium">Clothing</span>
                                    </li>
                                    <li className="text-gray-700 p-2 hover:bg-gray-100">
                                        <span className="font-medium">Accessories</span>
                                    </li>
                                    <li className="text-gray-700 p-2 hover:bg-gray-100">
                                        <span className="font-medium">Outdoor</span>
                                    </li>
                                    <li className="text-gray-700 p-2 hover:bg-gray-100">
                                        <span className="font-medium">Close Collection</span>
                                    </li>
                                    <li className="text-gray-700 p-2 hover:bg-gray-100">
                                        <span className="font-medium">Summer Collection</span>
                                    </li>
                                    <li className="text-gray-700 p-2 hover:bg-gray-100">
                                        <span className="font-medium">New Arrivals</span>
                                    </li>
                                    <li className="text-gray-700 p-2 hover:bg-gray-100">
                                        <span className="font-medium">Best Sellers</span>
                                    </li>
                                    <li className="text-gray-700 p-2 hover:bg-gray-100">
                                        <span className="font-medium">Sale</span>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                    {/* 
                    <div className="color ">
                        <ul className="flex p-3 gap-2">
                            <li><span className=" rounded-full  bg-black ">code</span></li>
                            <li><span className=" rounded-full  bg-black ">code</span></li>
                            <li><span className=" rounded-full  bg-black ">code</span></li>
                            <li><span className=" rounded-full  bg-black ">code</span></li>
                        </ul>
                    </div> */}
                </div>

            </content >
        </>
    );
}
export default Content;