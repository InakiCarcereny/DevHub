import { DataTypes, Model } from "sequelize";

import sequelize from "@/config/database";

class CommentLike extends Model {}

CommentLike.init(
  {
    idComment: { type: DataTypes.UUID, allowNull: false, primaryKey: true, field: "id_comment" },
    idUser: { type: DataTypes.UUID, allowNull: false, primaryKey: true, field: "id_user" },
  },
  {
    sequelize,
    modelName: "CommentLike",
    tableName: "comment_likes",
    timestamps: true,
    updatedAt: false,
    underscored: true,
  },
);

export default CommentLike;
