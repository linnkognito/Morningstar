'use client';

import WrapperScreenGradient from '../ui/containers/WrapperScreenGradient';
import ContainerSimple from '../ui/containers/ContainerSimple';
import Form from '../ui/Form';
import FormElement from '../ui/FormElement';
import ActionButton from '../ui/buttons/ActionButton';
import AuthRedirect from '../ui/AuthRedirect';
import Link from 'next/link';

function Login() {
  return (
    <WrapperScreenGradient>
      <ContainerSimple
        width='w-fit max-w-[700px]'
        bg='bg-white/80'
        className='px-20 pb-10 pt-6 text-offblack z-100'
      >
        <h2 className='w-full border-b border-aura/30 pb-4 text-center font-bebas text-4xl'>
          Login
        </h2>

        <Form
          options={{
            action: 'login',
            className: 'flex flex-col gap-4',
          }}
        >
          <FormElement
            label='Email'
            input={{ type: 'text', placeholder: '123@email.com' }}
          />
          <div>
            <FormElement
              label='Password'
              input={{ type: 'password', placeholder: '●●●●●●●' }}
            />
            <div className='flex w-full pl-1 pt-1'>
              <p className='text-xs text-gray-400'>
                Forgot password?{' '}
                <Link
                  href='/user/login/restore-password'
                  className='text-aura hover:underline'
                >
                  Restore
                </Link>
              </p>
            </div>
          </div>

          <ActionButton type='submit' color='bg-aura/50'>
            Login
          </ActionButton>

          <AuthRedirect
            text='No account yet?'
            path='/user/signup'
            linkText='Sign up!'
          />
        </Form>
      </ContainerSimple>
    </WrapperScreenGradient>
  );
}

export default Login;
