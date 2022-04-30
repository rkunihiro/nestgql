import { Scalar } from "@nestjs/graphql";
import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import { Kind, ValueNode } from "graphql";

dayjs.extend(timezone);
dayjs.extend(utc);
dayjs.tz.setDefault("Asia/Tokyo");

@Scalar("Date", () => Date)
export class DateScalar {
    description = "Date custom scalar type";

    parseValue(value: string): Date {
        console.log("DateScalar#parseValue", value);
        return dayjs.tz(value, "Asia/Tokyo").toDate(); // value from the client
    }

    serialize(value: Date): string {
        console.log("DateScalar#serialize", value);
        return dayjs(value).tz("Asia/Tokyo").format(); // value sent to the client
    }

    parseLiteral(ast: ValueNode): Date | null {
        console.log("DateScalar#parseLiteral", ast);
        if (ast.kind === Kind.STRING) {
            return dayjs.tz(ast.value, "Asia/Tokyo").toDate();
        }
        return null;
    }
}
