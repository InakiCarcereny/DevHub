import { DataTypes, Model } from "sequelize";

import sequelize from "@/config/database";

class PostShare extends Model {}

PostShare.init(
  {
    idPost: { type: DataTypes.UUID, allowNull: false, primaryKey: true, field: "id_post" },
    idUser: { type: DataTypes.UUID, allowNull: false, primaryKey: true, field: "id_user" },
  },
  {
    sequelize,
    modelName: "PostShare",
    tableName: "post_shares",
    timestamps: true,
    updatedAt: false,
    underscored: true,
  },
);

export default PostShare;
