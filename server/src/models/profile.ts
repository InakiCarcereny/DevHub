import { DataTypes, Model } from "sequelize";

import sequelize from "@/config/database";

class Profile extends Model {}

Profile.init(
  {
    id: { type: DataTypes.UUID, primaryKey: true },
    avatarUrl: { type: DataTypes.TEXT, allowNull: true, field: "avatar_url" },
    bio: { type: DataTypes.TEXT, allowNull: true },
    coverUrl: { type: DataTypes.TEXT, allowNull: true, field: "cover_url" },
    location: { type: DataTypes.TEXT, allowNull: true },
    website: { type: DataTypes.TEXT, allowNull: true },
  },
  {
    sequelize,
    modelName: "Profile",
    tableName: "profiles",
    timestamps: true,
    createdAt: false,
    updatedAt: true,
    underscored: true,
  },
);

export default Profile;
