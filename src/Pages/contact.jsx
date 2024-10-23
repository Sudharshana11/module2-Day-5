import React from "react";
import {userform} from "react-hook-form"

function Contact() {
    const{ register, handleSubmit }= useform()
return (
    <div>
        <form onSubmit={handleSubmit(OutPut)}>
            <label htmlFor="">Please enter your name</label>
            <input {...register('fullname')}type="text"/><br/>
            <label htmlFor="">Please enter your outlookid</label>
            <input {...register('email')}type="text"/><br/>
            <label htmlFor="">Please enter your msg</label>
            <input {...register('msg')}type="text"/><br/>
        </form>
    </div>
)
}
export default Contact