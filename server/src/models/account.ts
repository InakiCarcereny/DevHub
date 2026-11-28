import { DataTypes, Model } from "sequelize";

import sequelize from "@/config/database";

class Account extends Model {}

Account.init(
  {
    type: { type: DataTypes.STRING, allowNull: false },
    provider: { type: DataTypes.STRING, allowNull: false, primaryKey: true },
    providerAccountId: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      field: "provider_account_id",
    },
    refreshToken: { type: DataTypes.TEXT, field: "refresh_token" },
    accessToken: { type: DataTypes.TEXT, field: "access_token" },
    expiresAt: { type: DataTypes.INTEGER, field: "expires_at" },
    tokenType: { type: DataTypes.STRING, field: "token_type" },
    scope: { type: DataTypes.STRING },
    idToken: { type: DataTypes.TEXT, field: "id_token" },
    sessionState: { type: DataTypes.STRING, field: "session_state" },
    userId: { type: DataTypes.UUID, allowNull: false, field: "user_id" },
  },
  {
    sequelize,
    modelName: "Account",
    tableName: "accounts",
    timestamps: false,
    underscored: true,
  },
);

export default Account;
