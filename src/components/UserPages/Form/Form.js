import React from "react";

const Form = (props) => {
    const items = props.inputs;
    return (
        <>
            <form className="w-100 px-3" action="">
                {
                    items.map((item) => {
                        return (
                            <div key={item.id} className="">
                                <label>{item.label}</label>
                                <input type={item.type} className="form-control mb-3" name={item.id} id={item.id}
                                       placeholder={item.placeHolder}/>
                            </div>
                        );
                    })
                }
            </form>
        </>
    );
}

export default Form;