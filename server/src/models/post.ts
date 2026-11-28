import { DataTypes, Model } from "sequelize";

import sequelize from "@/config/database";

class Post extends Model {}

Post.init(
  {
    id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
    idUser: { type: DataTypes.UUID, allowNull: true, field: "id_user" },
    title: { type: DataTypes.TEXT, allowNull: false },
    content: { type: DataTypes.TEXT, allowNull: false },
    type: {
      type: DataTypes.ENUM("snippet", "article", "question"),
      allowNull: false,
      defaultValue: "snippet",
    },
    codeSnippet: { type: DataTypes.TEXT, allowNull: true, field: "code_snippet" },
    codeLanguage: { type: DataTypes.TEXT, allowNull: true, field: "code_language" },
    codeFilename: { type: DataTypes.TEXT, allowNull: true, field: "code_filename" },
    imageUrl: { type: DataTypes.TEXT, allowNull: true, field: "image_url" },
  },
  {
    sequelize,
    modelName: "Post",
    tableName: "posts",
    timestamps: true,
    underscored: true,
    indexes: [
      { name: "posts_user_idx", fields: ["id_user"] },
      { name: "posts_created_at_idx", fields: ["created_at"] },
    ],
  },
);

export default Post;
