import Account from "@/models/account";
import Bookmark from "@/models/bookmark";
import Comment from "@/models/comment";
import CommentLike from "@/models/comment_like";
import Post from "@/models/post";
import PostLike from "@/models/post_like";
import PostShare from "@/models/post_share";
import Profile from "@/models/profile";
import Tag from "@/models/tag";
import User from "@/models/user";
import UserTagFollow from "@/models/user_tag_follow";

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

Comment.belongsTo(Post, { foreignKey: "idPost", onDelete: "CASCADE" });
Post.hasMany(Comment, { foreignKey: "idPost", onDelete: "CASCADE" });
Comment.belongsTo(User, { foreignKey: "idUser", onDelete: "SET NULL" });
User.hasMany(Comment, { foreignKey: "idUser", onDelete: "SET NULL" });
Comment.belongsTo(Comment, { foreignKey: "idParent", onDelete: "CASCADE" });
Comment.hasMany(Comment, { foreignKey: "idParent", onDelete: "CASCADE" });

CommentLike.belongsTo(Comment, {
  foreignKey: "idComment",
  onDelete: "CASCADE",
});
Comment.hasMany(CommentLike, { foreignKey: "idComment", onDelete: "CASCADE" });
CommentLike.belongsTo(User, { foreignKey: "idUser", onDelete: "CASCADE" });
User.hasMany(CommentLike, { foreignKey: "idUser", onDelete: "CASCADE" });

Bookmark.belongsTo(User, { foreignKey: "idUser", onDelete: "CASCADE" });
User.hasMany(Bookmark, { foreignKey: "idUser", onDelete: "CASCADE" });
Bookmark.belongsTo(Post, { foreignKey: "idPost", onDelete: "CASCADE" });
Post.hasMany(Bookmark, { foreignKey: "idPost", onDelete: "CASCADE" });

Account.belongsTo(User, { foreignKey: "userId", onDelete: "CASCADE" });
User.hasMany(Account, { foreignKey: "userId", onDelete: "CASCADE" });

export {
  Account,
  Bookmark,
  Comment,
  CommentLike,
  Post,
  PostLike,
  PostShare,
  Profile,
  Tag,
  User,
  UserTagFollow,
};
