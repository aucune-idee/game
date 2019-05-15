import lobbyConfigure from './lobby.route';

import { Router } from 'express';


function configure(router:Router):void{
    console.log("configure")
    lobbyConfigure(router);
}

export default configure;