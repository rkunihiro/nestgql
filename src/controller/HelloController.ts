import { Controller, Get } from "@nestjs/common";

@Controller("")
export class HelloController {
    @Get("")
    public async hello(): Promise<string> {
        return "Hello,World!";
    }
}
