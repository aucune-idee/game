import lobbyConfigure from './lobby.route';

import { Router } from 'express';


function configure(router:Router):void{
    lobbyConfigure(router);
}

export default configure;