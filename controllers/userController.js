import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import { User } from "../models/user.js";
import ErrorHandler from "../utils/errorHandler.js";

export const newUser = catchAsyncError(async (req, res, next) => {

    //   // const userExist = false;
    // const user = await User.findOne({ email: "arfaz@gmail.com" });

    // if (user) {
    //     return next(new ErrorHandler("User Already Exist", 400));
    // }

    await User.create({
        name: "Arfaz",
        email: "arfaz@gmail.com"
    });

    res.status(201).json({
        message: "User Created Successfully"
    });


})

