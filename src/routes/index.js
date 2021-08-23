import Home from "../pages/Home";
import Prices from "../pages/Prices.js"
import Header from "../template/Header";
import Footer from "../template/Footer";
import getHash from "../utils/getHash";
import getResolveRoutes from "../utils/getResolveRoutes";
import ErrorNotFound from "../pages/ErrorNotFound";
import Quizzes from "../pages/Quizzes";
import Inf from "../pages/Inf";
import Quest from "../pages/Quest";
import Registration from "../pages/Registration";
import Userlogin from "../pages/Userlogin";
import InfoUser from "../pages/InfoUser";




//"/news": News,



const routes = {
    "/": Home,
    "/prices": Prices,
    "/informs": Inf,
    "/quizzes": Quizzes,
    "/quests": Quest,
    "/registration": Registration,
    "/userlogin": Userlogin,
    "/inform": InfoUser //http://localhost:8080/#/3
}

const router = async () => {
    const header = null || document.getElementById("header");
    const content = null || document.getElementById("content");
    const footer = null || document.getElementById("footer");

    header.innerHTML = Header();
    footer.innerHTML = Footer();

    let hash = getHash();
    let route = await getResolveRoutes(hash);
    let render = routes[route] ? routes[route] : ErrorNotFound;
    content.innerHTML = await render();
}

export default router;