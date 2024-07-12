import Footer from "./components/footer";
import Header from "./components/header";

export default function App() {
    return (
        // grid-cols-1 : repeat(1, minmax(0, 1fr))
        <div className="grid grid-rows-[auto_1fr_auto] min-h-screen grid-cols-1">
            <Header />
            
            <main>
                <section className="px-4 py-8 md:py-12 bg-neutral-100">
                    <div className="container">
                        <h1 className="text-3xl font-bold">All Services</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Pariatur sint distinctio ipsa!
                        </p>
                    </div>
                </section>

                <section className="px-4 py-12 md:py-16 lg:py-20">
                    <div className="container">
                        <table className="w-full border-collapse overflow-x-auto">
                            <thead>
                                <tr>
                                    <th className="px-4 py-3 border-2 border-neutral-100">
                                        #
                                    </th>
                                    <th className="px-4 py-3 border-2 border-neutral-100">
                                        Title
                                    </th>
                                    <th className="px-4 py-3 border-2 border-neutral-100 max-w-sm">
                                        Description
                                    </th>
                                    <th className="px-4 py-3 border-2 border-neutral-100">
                                        Price
                                    </th>
                                    <th className="px-4 py-3 border-2 border-neutral-100">
                                        Actions
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <tr key={i}>
                                        <td className="px-4 py-3 border-2 border-neutral-100">
                                            {i + 1}
                                        </td>
                                        <td className="px-4 py-3 border-2 border-neutral-100">
                                            Service {i + 1}
                                        </td>
                                        <td className="px-4 py-3 border-2 border-neutral-100 max-w-sm">
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit.
                                            Accusamus molestias, debitis
                                            eligendi deleniti est consequatur
                                            unde neque ad ex nesciunt quaerat
                                            fuga ullam quibusdam.
                                        </td>
                                        <td className="px-4 py-3 border-2 border-neutral-100 max-w-sm">
                                            299.75 $
                                        </td>
                                        <td className="px-4 py-3 border-2 border-neutral-100 max-w-sm">
                                            <div className="flex items-center gap-2 flex-wrap">
                                                <button className="text-sm font-medium px-4 py-2 rounded bg-blue-500 text-blue-50">
                                                    Show
                                                </button>
                                                <button className="text-sm font-medium px-4 py-2 rounded bg-red-500 text-red-50">
                                                    Delete
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
