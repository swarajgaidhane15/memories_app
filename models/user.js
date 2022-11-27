import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  id: String,
  isGoogleSignIn: {
    type: Boolean,
    default: false,
  },
  imageUrl: {
    type: String,
    default:
      "https://i1.sndcdn.com/avatars-UidYWfW20bjki8Ub-GJKpBQ-t500x500.jpg",
  },
});

const User = mongoose.model("User", UserSchema);

export default User;
