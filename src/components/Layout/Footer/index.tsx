import Image from 'next/image'
import Container from 'components/Container'
import FooterInfo from './FooterInfo'
import style from './Footer.module.css'
import traveloLogo from 'public/assets/travelo-logo-footer.png'

const Footer = () => {
  return (
    <footer className={style.footer}>
      <Container size='lg'>
        <div className='flex bg-white p-16'>
          <figure>
            <Image
              src={traveloLogo}
              alt='Travelo Logo'
              placeholder='blur'
              height='98'
              width='136'
            />
          </figure>
          <div className='flex flex-1 justify-between ml-[106px]'>
            <FooterInfo
              title='Info'
              content={[
                {
                  label: 'Tentang Kami',
                  href: '/',
                },
                {
                  label: 'Testimonial',
                  href: '/',
                },
                {
                  label: 'Kontak',
                  href: '/',
                },
              ]}
            />
            <FooterInfo
              title='Perusahaan'
              content={[
                {
                  label: 'Syarat & Kentetuan',
                  href: '/',
                },
                {
                  label: 'Kebijakan privasi',
                  href: '/',
                },
                {
                  label: 'Blog',
                  href: '/',
                },
                {
                  label: 'Bantuan Pelayanan',
                  href: '/',
                },
              ]}
            />
            <FooterInfo
              title='Kontak'
              content={[
                'Puri Bintaro Hijau',
                'Pondok Aren, Tangsel',
                'Indonesia',
                '(002)00000022',
                'samin@samin.com',
              ]}
            />
          </div>
        </div>
      </Container>
      <div className='bg-blue-100 p-3'>
        <p className='text-heading-5 text-white font-bold text-center'>
          © 2020 Travelo. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
