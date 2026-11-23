import { DataTypes, Model } from "sequelize";

import sequelize from "@/config/database";

class Comment extends Model {}

Comment.init(
  {
    id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
    idPost: { type: DataTypes.UUID, allowNull: false, field: "id_post" },
    idUser: { type: DataTypes.UUID, allowNull: true, field: "id_user" },
    idParent: { type: DataTypes.UUID, allowNull: true, field: "id_parent" },
    content: { type: DataTypes.TEXT, allowNull: false },
    codeLine: { type: DataTypes.TEXT, allowNull: true, field: "code_line" },
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
