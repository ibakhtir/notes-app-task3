import { Sequelize } from "sequelize";

const sequelize = new Sequelize("postgres-db", "admin", "root", {
  host: "postgres_container",
  dialect: "postgres",
});

export default sequelize;
