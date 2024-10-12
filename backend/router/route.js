import { Router } from "express";
const router = Router();
import {upload} from "../middleware/multer.middleware.js";
import {uploadcreatelisting_product} from "../controllers/appController.js";
import {uploadcreatelisting_productioncontract} from "../controllers/appController.js";
/** import all controllers */
import * as controller from "../controllers/appController.js";
import { registerMail } from "../controllers/mailer.js";
import Auth, { localVariables } from "../middleware/auth.js";

/** POST Methods */
router.route("/register").post(controller.register); // register user
router.route("/registerMail").post(registerMail); // send the email
router
  .route("/authenticate")
  .post(controller.verifyUser, (req, res) => res.end()); // authenticate user
router.route("/login").post(controller.verifyUser, controller.login); // login in app

/** GET Methods */
router.route("/user/:username").get(controller.getUser); // user with username
router
  .route("/generateOTP")
  .get(controller.verifyUser, localVariables, controller.generateOTP); // generate random OTP
router.route("/verifyOTP").get(controller.verifyUser, controller.verifyOTP); // verify generated OTP
router.route("/createResetSession").get(controller.createResetSession); // reset all the variables

/** PUT Methods */
router.route("/updateuser").put(Auth, controller.updateUser); // is use to update the user profile
router
  .route("/resetPassword")
  .put(controller.verifyUser, controller.resetPassword); // use to reset password

// Other than login
// router
//   .route("/uploadcreatelisting_product")
//   .post(controller.uploadcreatelisting_product);
router.post('/uploadcreatelisting_product', upload.single('image'), uploadcreatelisting_product);

  router.route("/getcreatelisting_products").get(controller.getcreatelisting_products);

  router.post('/uploadcreatelisting_productioncontract', uploadcreatelisting_productioncontract);

  router.route("/getcreatelisting_productioncontracts").get(controller.getcreatelisting_productioncontracts);


export default router;
