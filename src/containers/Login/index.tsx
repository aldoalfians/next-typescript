import Layout from 'components/Layout'
import Button from 'components/Button'
import Input from 'components/Input'

import styles from './Login.module.css'

const Login = () => {
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
          <form className='flex flex-col mt-8'>
            <Input
              label='Email'
              placeholder='Masukan alamat email'
              name='email'
              type='email'
              className='mb-6'
            />
            <Input
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

            <Button>Masuk</Button>
          </form>
        </div>
      </section>
    </Layout>
  )
}

export default Login
