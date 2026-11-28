import { DataTypes, Model } from "sequelize";

import sequelize from "@/config/database";

class Comment extends Model {}

Comment.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    content: { type: DataTypes.TEXT, allowNull: false },
    codeLine: { type: DataTypes.TEXT, field: "code_line" },
    idPost: { type: DataTypes.UUID, allowNull: false, field: "id_post" },
    idUser: { type: DataTypes.UUID, field: "id_user" },
    idParent: { type: DataTypes.UUID, field: "id_parent" },
  },
  {
    sequelize,
    modelName: "Comment",
    tableName: "comments",
    timestamps: true,
    updatedAt: false,
    underscored: true,
  },
);

export default Comment;
