import React from "react";
import Form from "../components/UserPages/Form/Form";

const Register = (props) => {
    return (
        <Form
            title={"ثبت نام در سیستم"}
            linkText={"ثبت نام"}
            text={"قبلا عضو شده اید ؟ "}
            linkText2={"وارد"}
            text2={" شوید"}
            login={false}
        >
            <div>
                <label htmlFor={"name"}>نام</label>
                <input
                    type={"text"}
                    className="form-control mb-3"
                    id={"name"}
                    placeholder={"نام خود را وارد نمایید"}
                />
            </div>
            <div>
                <label htmlFor={"fName"}>نام خانوادگی</label>
                <input
                    type={"text"}
                    className="form-control mb-3"
                    id={"fName"}
                    placeholder={"نام خانوادگی خود را وارد نمایید"}
                />
            </div>
            <div>
                <label htmlFor={"phone"}>شماره موبایل</label>
                <input
                    type={"tel"}
                    className="form-control mb-3"
                    id={"phone"}
                    placeholder={"شماره موبایل خود را وارد نمایید"}
                />
            </div>

            <div>
                <label htmlFor={"email"}>ایمیل</label>
                <input
                    type={"email"}
                    className="form-control mb-3"
                    id={"email"}
                    placeholder={"ایمیل خود را وارد نمایید"}
                />
            </div>
            <div>
                <label htmlFor={"pass"}>رمز عبور</label>
                <input
                    type={"password"}
                    className="form-control mb-3"
                    id={"pass"}
                    placeholder={"رمز عبور خود را وارد نمایید"}
                />
            </div>
            <div>
                <label htmlFor={"pass2"}>تکرار رمز عبور</label>
                <input
                    type={"text"}
                    className="form-control mb-3"
                    id={"pass2"}
                    placeholder={"رمز عبور خود را وارد نمایید"}
                />
            </div>
        </Form>
    );
}



export default Register;