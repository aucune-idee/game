import { NestMiddleware } from '@nestjs/common';
import { ConfigService } from "../../config/config.service";
export declare class AuthMiddleware implements NestMiddleware {
    private configuration;
    constructor(configuration: ConfigService);
    use(req: any, res: any, next: () => void): void;
}
