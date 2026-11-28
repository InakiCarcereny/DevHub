import Post from "@/models/post";
import PostLike from "@/models/post_like";
import PostShare from "@/models/post_share";
import Profile from "@/models/profile";
import User from "@/models/user";

Profile.belongsTo(User, { foreignKey: "id", onDelete: "CASCADE" });
User.hasOne(Profile, { foreignKey: "id", onDelete: "CASCADE" });

Post.belongsTo(User, { foreignKey: "idUser", onDelete: "SET NULL" });
User.hasMany(Post, { foreignKey: "idUser", onDelete: "SET NULL" });

PostLike.belongsTo(Post, { foreignKey: "idPost", onDelete: "CASCADE" });
Post.hasMany(PostLike, { foreignKey: "idPost", onDelete: "CASCADE" });
PostLike.belongsTo(User, { foreignKey: "idUser", onDelete: "CASCADE" });
User.hasMany(PostLike, { foreignKey: "idUser", onDelete: "CASCADE" });

PostShare.belongsTo(Post, { foreignKey: "idPost", onDelete: "CASCADE" });
Post.hasMany(PostShare, { foreignKey: "idPost", onDelete: "CASCADE" });
PostShare.belongsTo(User, { foreignKey: "idUser", onDelete: "CASCADE" });
User.hasMany(PostShare, { foreignKey: "idUser", onDelete: "CASCADE" });

export { Post, PostLike, PostShare, Profile, User };
