import About from "./About";
import Contacts from "./Contacts";
import Copyright from "./Copyright";
import Resources from "./Resources";
import ShoppingServices from "./ShoppingServices";

function Footer () {

    return (
        <div>
            <ShoppingServices/>
            <About/>
            <Resources/>
            <Contacts/>
            <Copyright/>
        </div>
    )
};

export default Footer;