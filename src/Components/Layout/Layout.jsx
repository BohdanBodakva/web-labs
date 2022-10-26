import Header from "./header/Header";
import Footer from "./footer/Footer";
import Main from "./Main";

export default function Layout(props) {
    return (
        <>
            <Header />
            <Main>
                {props.children}
            </Main>
            <Footer />
        </>
    );
};