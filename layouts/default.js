import Head from "next/head";

function LayoutDefault({ children }) {
    const now = new Date().getFullYear();
    return (
        <div className="container mx-auto">
            <Head>
                <title>Github User App</title>
            </Head>
            <div style={{ minHeight: '90vh' }}>
                {children}
            </div>
            <footer className="border-t p-8 bg-black">
                <p className="text-center text-white">Copyright &#169; {now} - Bara Laily M</p>
            </footer>
        </div >
    );
}
export default LayoutDefault