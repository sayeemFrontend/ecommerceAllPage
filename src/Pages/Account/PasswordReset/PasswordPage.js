
import ResetPassword from "../../../Components/ResetPassword/ResetPassword";
import classes from "./PasswordPage.module.css"


const PasswordPage = () => {
   return (
      <div className={"mt-md-5 px-2 bg-white w-100 d-flex justify-content-center " + classes.pageContainer}>
         <div className={classes.content}>
            <p className=" mb-3 cBlack-1 fw-500 fs-20">Forget Password</p>
            <ResetPassword />
         </div>

      </div>
   );
}

export default PasswordPage;