import e from "express";
import { User } from "../models/user";

// Method to crate user
function userCreate({ name, email, password}: User): User {
    let user: User = new User();
    user.name = name;
    user.email = email;
    user.password = password;
    return user;
}

export { userCreate };