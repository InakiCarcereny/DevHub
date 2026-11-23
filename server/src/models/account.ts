import { DataTypes, Model } from "sequelize";

import sequelize from "@/config/database";

class Account extends Model {}

Account.init(
  {
    provider: { type: DataTypes.TEXT, allowNull: false, primaryKey: true },
    providerAccountId: {
      type: DataTypes.TEXT,
      allowNull: false,
      primaryKey: true,
      field: "provider_account_id",
    },
    type: { type: DataTypes.TEXT, allowNull: false },
    userId: { type: DataTypes.UUID, allowNull: false, field: "user_id" },
    accessToken: { type: DataTypes.TEXT, allowNull: true, field: "access_token" },
    refreshToken: { type: DataTypes.TEXT, allowNull: true, field: "refresh_token" },
    idToken: { type: DataTypes.TEXT, allowNull: true, field: "id_token" },
    expiresAt: { type: DataTypes.INTEGER, allowNull: true, field: "expires_at" },
    scope: { type: DataTypes.TEXT, allowNull: true },
    sessionState: { type: DataTypes.TEXT, allowNull: true, field: "session_state" },
    tokenType: { type: DataTypes.TEXT, allowNull: true, field: "token_type" },
  },
  {
    sequelize,
    modelName: "Account",
    tableName: "accounts",
    timestamps: false,
  },
);

export default Account;
