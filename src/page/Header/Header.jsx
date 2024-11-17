const Header = () => {
    return (
        <>
            <header className="bg-white py-4">
                <div className="container mx-auto flex items-center justify-between px-4">

                    <div className="text-2xl font-bold">Logo</div>

                    <div className="hidden md:block">
                        <ul className="flex space-x-6">
                            <li><a href="#" className="text-gray-700 hover:text-blue-600">Home</a></li>
                            <li><a href="#" className="text-gray-700 hover:text-blue-600">Shop</a></li>
                            <li><a href="#" className="text-gray-700 hover:text-blue-600">Product</a></li>
                            <li><a href="#" className="text-gray-700 hover:text-blue-600">Pages</a></li>
                        </ul>
                    </div>


                    <div className="flex items-center space-x-6">
                        <div className="help text-gray-700">
                            <button className="focus:outline-none">Help</button>
                        </div>
                        <div className="search text-gray-700">
                            <button className="focus:outline-none">Search</button>
                        </div>
                        <div className="cart text-gray-700">
                            <button className="focus:outline-none">Cart</button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Header;