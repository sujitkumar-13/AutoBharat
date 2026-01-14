export function Navbar() {
    return (
        <nav className="fixed backdrop-blur-lg bg-black/90 box-border caret-transparent w-full z-50 border-gray-800 border-b border-solid top-0">
            <div className="items-center box-border caret-transparent flex justify-between max-w-screen-xl mx-auto px-6 py-4">
                {/* NavbarLogo */}
                <div className="text-2xl box-border caret-transparent leading-8 font-pacifico text-white">
                    TheAutoBharat
                </div>

                {/* NavbarLinks */}
                <div className="items-center box-border caret-transparent hidden min-h-0 min-w-0 md:flex md:min-h-[auto] md:min-w-[auto] text-white">
                    <a href="#home" className="font-medium box-border caret-transparent inline min-h-0 min-w-0 md:block md:min-h-[auto] md:min-w-[auto] hover:text-red-600">
                        Home
                    </a>
                    <a href="#about" className="font-medium box-border caret-transparent inline min-h-0 min-w-0 ml-8 md:block md:min-h-[auto] md:min-w-[auto] hover:text-red-600">
                        About Me
                    </a>
                    <a href="#blogs" className="font-medium box-border caret-transparent inline min-h-0 min-w-0 ml-8 md:block md:min-h-[auto] md:min-w-[auto] hover:text-red-600">
                        Blogs
                    </a>
                    <a href="#contact" className="font-medium box-border caret-transparent inline min-h-0 min-w-0 ml-8 md:block md:min-h-[auto] md:min-w-[auto] hover:text-red-600">
                        Contact
                    </a>
                </div>
            </div>
        </nav>
    );
}
