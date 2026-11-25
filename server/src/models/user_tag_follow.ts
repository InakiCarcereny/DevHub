import { DataTypes, Model } from "sequelize";

import sequelize from "@/config/database";

class UserTagFollow extends Model {}

UserTagFollow.init(
  {
    idTag: { type: DataTypes.UUID, allowNull: false, primaryKey: true, field: "id_tag" },
    idUser: { type: DataTypes.UUID, allowNull: false, primaryKey: true, field: "id_user" },
    followedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
      field: "followed_at",
    },
  },
  {
    sequelize,
    modelName: "UserTagFollow",
    tableName: "user_tag_follows",
    timestamps: false,
    underscored: true,
  },
);

export default UserTagFollow;
