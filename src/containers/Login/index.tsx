import Layout from 'components/Layout'
import Button from 'components/Button'
import Input from 'components/Input'

import { useComponentLogic } from './hooks'
import { REG_EXP } from 'constants/regexp'

import styles from './Login.module.css'

const Login = () => {
  const { register, handleSubmit, onSubmit, errors } = useComponentLogic()

  return (
    <Layout noFooter>
      <section className={styles.sectionLogin}>
        <div className={styles.formWrapper}>
          <p className='text-heading-5 font-label font-extrabold'>Masuk</p>
          <div className='flex mt-3'>
            <p className='text-heading-5 text-gray-50 font-semibold'>
              Belum punya akun?
            </p>
            <a
              href='#'
              className='text-heading-5 text-blue-100 font-semibold ml-2 hover:underline'
            >
              Daftar Disini
            </a>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='flex flex-col mt-8'
          >
            <Input
              register={register}
              errors={errors}
              required={{ value: true, message: 'Email tidak boleh kosong' }}
              pattern={{
                value: REG_EXP.email,
                message: 'Gunakan format email yang benar',
              }}
              label='Email'
              placeholder='Masukan alamat email'
              name='email'
              type='email'
              className='mb-6'
            />
            <Input
              register={register}
              errors={errors}
              required={{ value: true, message: 'Password tidak boleh kosong' }}
              label='Password'
              placeholder='Masukan password'
              name='password'
              type='password'
            />

            <a
              href='#'
              className='text-heading-5 text-blue-100 font-semibold mt-8 mb-4 hover:underline'
            >
              Lupa password?
            </a>

            <Button type='submit' fullWidth>
              Masuk
            </Button>
          </form>

          <p className='text-heading-5 text-gray-70 my-8'>Atau masuk dengan</p>
          <Button variant='google' className='mb-4'>
            Masuk dengan Google
          </Button>
          <Button variant='facebook'>Masuk dengan Facebook</Button>
        </div>
      </section>
    </Layout>
  )
}

export default Login
