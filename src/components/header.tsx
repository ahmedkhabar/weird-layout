export default function Header() {
    return (
        <header className="p-4 bg-white/85 backdrop-blur sticky top-0 inset-x-0">
            <div className="container">
                <div className="flex items-center justify-between gap-6">
                    <p className="text-xl font-bold text-primary hover:text-primary-foreground duration-200 transition-colors">
                        Layout
                    </p>

                    <div className="ms-auto hidden md:flex md:items-center md:gap-6">
                        <p>Home</p>
                        <p>Services</p>
                        <p>About</p>
                        <p>Contact</p>
                    </div>

                    <button className="p-2 rounded-md border-2 border-neutral-100 md:hidden">
                        Drawer
                    </button>
                </div>
            </div>
        </header>
    );
}
