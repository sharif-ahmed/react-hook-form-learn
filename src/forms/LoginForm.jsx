import React from 'react';
import FieldSet from '../components/FieldSet';
import Field from '../components/Field';

const LoginForm = () => {
    return (
        <div>
            <form>
                <FieldSet label="Login Form">
                    <Field label="Email">
                        <input
                            className='p-2 border box-border w-[300px] rounded-md border-gray-200'
                            type='email'
                            id='email'
                            name='email'
                            placeholder='Email address'
                        />
                    </Field>
                    <Field label="Password">
                        <input
                            className='p-2 border box-border w-[300px] rounded-md border-gray-200'
                            type='password'
                            id='password'
                            name='password'
                            placeholder='Password'
                        />
                    </Field>
                </FieldSet>
                <Field >
                    <button
                        className='text-md text-white cursor-pointer p-1 border rounded-lg bg-purple-500'
                    >
                        Login
                    </button>
                </Field>
            </form>
        </div>
    );
};

export default LoginForm;