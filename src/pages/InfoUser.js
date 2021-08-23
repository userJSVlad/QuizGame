import getHash from "../utils/getHash";
import { getUserLogin} from "../utils/getUserInfo";
import Preloader from "../template/Preloader";

const InfoUser = () => {
  //geter()
   const view =
   `
   ${ Preloader()}
   <h1>${info}</h1>
  <h2>asdasdasdsadsadsadsadasd</h2>
`
return view;
}
export default InfoUser;