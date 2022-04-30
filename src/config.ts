import { ConfigFactory } from "@nestjs/config";

export interface Config {
    database: {
        writer: string;
        reader: string;
    };
}

export const configFactory: ConfigFactory<Config> = () => {
    return {
        database: {
            writer: process.env["DATABASE_WRITER_URL"] ?? "",
            reader: process.env["DATABASE_READER_URL"] ?? "",
        },
    };
};
