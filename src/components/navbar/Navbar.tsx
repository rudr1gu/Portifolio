const Navbar = () => {
    return (
        <nav className="flex justify-between items-center py-4 px-8 bg-white shadow-lg">
            <h1>Rudr1gu</h1>
            <div>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Projects</a>
                <a href="#">Contact</a>
            </div>
        </nav>
    );
}

export default Navbar;