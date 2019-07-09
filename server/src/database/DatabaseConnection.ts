import { Connection, createConnection, ConnectionOptions } from "typeorm";
import { injectable } from "inversify";

@injectable()
export class DatabaseConnection {
  connect(): Promise<Connection> {
    return createConnection(<ConnectionOptions>{
      type: "postgres",
      host: "localhost",
      username: "postgres",
      password: "salopa44",
      port: 5432,
      database: "unibookdev",
      extra: {
        trustedConnection: true
      },
      options: {
        useUTC: true,
        trustedConnection: true
      },
      entities: ["src/entity/**/*.ts"]
    });
  }
}
