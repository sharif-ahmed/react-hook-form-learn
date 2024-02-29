import React from 'react';
import FieldSet from '../components/FieldSet';
import Field from '../components/Field';
import { useForm } from 'react-hook-form';

const LoginForm = () => {
    const { register, handleSubmit, formState: { errors },setError } = useForm();
    const submitForm = (formData) => {
        console.log(formData);
        const user = { email: "abc@gmail.com", password: "12345678" };
        const found = formData.email === user.email && formData.password === user.password;
        if (!found) {
            setError("root.random", {
                message: `User with email ${formData.email} is not found.`,
                type: "random"
            });
        }
    }
    return (
        <div className='flex flex-col items-center justify-center'>
            <form onSubmit={handleSubmit(submitForm)} >
                <FieldSet label="Login Form">
                    <Field label="Email" error={errors.email}>
                        <input
                            {...register(
                                "email",
                                {
                                    required: "Email is required.",
                                }
                            )}
                            className={`p-2 border box-border w-[300px] rounded-md
                             ${errors.email ? "border-red-500" : "border-gray-200"} `}
                            type='email'
                            id='email'
                            name='email'
                            placeholder='Email address'
                        />
                    </Field>
                    <Field label="Password" error={errors.password}>
                        <input
                            {...register(
                                "password",
                                {
                                    required: "Password is required.",
                                    minLength: {
                                        value: 8,
                                        message: "Your password at least 8 character"
                                    }
                                }
                            )}
                            className={`p-2 border box-border w-[300px] rounded-md
                             ${errors.password ? "border-red-500" : "border-gray-200"} `}
                            type='password'
                            id='password'
                            name='password'
                            placeholder='Password'
                        />
                    </Field>
                </FieldSet>
                <div>{errors?.root?.random?.message}</div>
                <Field >
                    <button
                        className='text-md text-white cursor-pointer p-1 
                        border rounded-lg bg-purple-500 m-auto'>
                        Login
                    </button>
                </Field>
            </form>
        </div>
    );
};

export default LoginForm;