// redirects to Home function on index.js

import Principal from './index.js'
import Home from "./index.js";

function Main() {
    return Principal(Home)
}

export default Main