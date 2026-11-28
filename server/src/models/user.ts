import { DataTypes, Model } from "sequelize";

import sequelize from "@/config/database";

class User extends Model {}

User.init(
  {
    id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
    email: { type: DataTypes.TEXT, allowNull: false, unique: true },
    username: { type: DataTypes.TEXT, allowNull: false, unique: true },
    passwordHash: { type: DataTypes.TEXT, allowNull: true, field: "password_hash" },
    emailVerified: { type: DataTypes.DATE, allowNull: true, field: "email_verified" },
  },
  {
    sequelize,
    modelName: "User",
    tableName: "users",
    timestamps: true,
    createdAt: true,
    updatedAt: false,
    underscored: true,
  },
);

export default User;
