import { DataTypes, Model } from "sequelize";

import sequelize from "@/config/database";

class PostLike extends Model {}

PostLike.init(
  {
    idPost: { type: DataTypes.UUID, allowNull: false, primaryKey: true, field: "id_post" },
    idUser: { type: DataTypes.UUID, allowNull: false, primaryKey: true, field: "id_user" },
  },
  {
    sequelize,
    modelName: "PostLike",
    tableName: "post_likes",
    timestamps: true,
    updatedAt: false,
    underscored: true,
  },
);

export default PostLike;
