export default function Footer() {
    return (
        <footer className="p-4">
            <div className="container">
                <p className="text-sm text-center font-medium">
                    Copyright {new Date().getFullYear()} &copy;{" "}
                    <span className="font-semibold">Ahmed Khabar</span>
                </p>
            </div>
        </footer>
    );
}
