type Config = {
  port: number;
  host: string;
  db: {
    user: string;
    password: string;
    host: string;
    port: number;
    database: string;
  };
  log: {
    level: string;
  };
};
