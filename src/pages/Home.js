import regeneratorRuntime from "regenerator-runtime";

import Preloader from "../template/Preloader";
import Banner from "../template/Banner.js";
import Inform from "../template/Inform.js";
import Gams from "../template/Gams.js"
import Mixing from "../template/Mixing";
import Quiz from "../template/Quiz";
import Slader from "../template/Slader";
import Subscribe from "../template/Subscridbe";
import Popap from "../template/Popap";
import "../styles/css/adaptivHome.css"

const Home = async () => {
	const view =
` <div id="root">
${Preloader()}
<section class="content">
  	${Banner()}
   ${Inform()}
	${Gams()}
	${Mixing()}	
	${Quiz()}
	${Slader()}
	${Subscribe()}
	${Popap()}
  </section>
</div>
`;

	return view;
}

export default Home;