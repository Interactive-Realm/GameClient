import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "basepatternutilities";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { ClientFunctions, Score, UserTypes } from "databaseutilities";

type Props = {
    onSignUp: () => void;
    score: number;
};
  
const Input = ({ onSignUp, score }: Props) => {
    const { register, handleSubmit, formState: { errors } } = useForm<UserTypes.UserHighscoreNumber>();
    const userInfo = useContext(UserContext)
    

    //var [score, setScore] = useState<number>();
    const onSubmit = async (values: UserTypes.UserHighscoreNumber) => {

        try {
            const { data, error } = await ClientFunctions.CheckUserData(
                values.phonenumber,
                "sdsusers"
            );
            console.log(data);

            if (error) return;
            

            else if (!data) {
                userInfo.userInfo = values.phonenumber
                localStorage.setItem('userinfo', JSON.stringify(userInfo.userInfo));

                await ClientFunctions.InsertUser(values.first_name, userInfo.userInfo, score);
                onSignUp();
                
                console.log("Data submitted successfully!");
                 
            } else if (data){
                
                userInfo.userInfo = values.phonenumber
                localStorage.setItem('userinfo', JSON.stringify(userInfo.userInfo));
                await Score.UpdateScore(values.phonenumber, score)
                onSignUp();
            }

            // Call insertUserData function from dbUtility to insert user data

            // Optionally, you can perform additional actions after successful submission
           
        } catch (error) {
            console.error("Error submitting data:", error);
        }
    };

    return (
        <div id="inputform">
            <h2 id="subtitle2"> SIGN UP</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name" >
                   Display Name
                </label>
                <input {...register("first_name", {pattern: /^[A-Za-z]{3,15}$/i})} />
                {errors.first_name && (
                <p id="highscore_element">You must submit a valid name </p>
                )}
    
                <label htmlFor="e-mail">
                    Phone Number
                </label>

          
                <input {...register("phonenumber", {pattern: /^\b[0-9]{8}\b/})} />
                {errors.phonenumber && (
                <p id="highscore_element">You Must submit a Danish phone number</p>
                )}
                <input type="submit" value="Proceed" className="buttonwhitesmall"/>
            </form>   
            </div>            
    );
};

export default Input;
