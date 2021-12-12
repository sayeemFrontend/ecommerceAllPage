import classes from "./LoginPage.module.css"
import { useHistory } from 'react-router';
import Button from "../../Components/Button/Button";
import LoginForm from "../../Components/LoginForm/LoginForm";

const LoginPage = () => {
   const history = useHistory()
   return (
      <div className={classes.loginPage}>
         <div className={"row " + classes}>
            <div className="col-12 col-md-6 px-md-5 ">
               <p className="fs-20 fw-500">Registered Customers</p>
               <p className=" mb-4 pe-md-5 fs-12 fw-400">If you have an account, sign in with your email address.</p>
               <LoginForm />
            </div>
            <div className="col-12 col-md-6 px-md-5 ">
               <p className="mb-3 fs-20 fw-500">New Customers</p>
               <p className="mb-3 fs-12 fw-400">
                  Creating an account has many benefits: check out faster, keep more than one address, track orders and more.
               </p>

               <div className={"py-2 bgPrimary-1 cWhite fs-14 brPrimary-1 " + classes.buttonWidth} >
                  <Button onClicked={() => history.push("/account/signup/")} title="Create An Account" />
               </div>

            </div>

         </div>

      </div>
   );
}

export default LoginPage;