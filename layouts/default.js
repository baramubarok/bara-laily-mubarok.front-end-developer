import Head from "next/head";

function LayoutDefault({ children }) {
    const now = new Date().getFullYear();
    return (
        <div className="container mx-auto">
            <Head>
                <title>Github User App</title>
                <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
            </Head>
            <div>
                {children}
            </div>
            <footer className="border-t h-10">
                <p className="text-center">Copyright &#169; {now} - Bara Laily M</p>
            </footer>
        </div>
    );
}
export default LayoutDefault