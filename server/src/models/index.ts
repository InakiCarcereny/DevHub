import Account from "@/models/account";
import Profile from "@/models/profile";
import User from "@/models/user";

Profile.belongsTo(User, { foreignKey: "id", onDelete: "CASCADE" });
User.hasOne(Profile, { foreignKey: "id", onDelete: "CASCADE" });

Account.belongsTo(User, { foreignKey: "userId", onDelete: "CASCADE" });
User.hasMany(Account, { foreignKey: "userId", onDelete: "CASCADE" });

export { Account, Profile, User };
