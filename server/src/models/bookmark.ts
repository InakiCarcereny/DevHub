import { DataTypes, Model } from "sequelize";

import sequelize from "@/config/database";

class Bookmark extends Model {}

Bookmark.init(
  {
    idUser: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      field: "id_user",
    },
    idPost: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      field: "id_post",
    },
  },
  {
    sequelize,
    modelName: "Bookmark",
    tableName: "bookmarks",
    timestamps: true,
    updatedAt: false,
    underscored: true,
  },
);

export default Bookmark;
