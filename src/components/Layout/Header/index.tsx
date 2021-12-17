import Image from 'next/image'
import Container from 'components/Container'
import Button from 'components/Button'
import Search from './Search'
import Nav from './Nav'

import traveloLogo from 'public/assets/travelo-logo-header.png'

const Header = () => {
  return (
    <header className='h-[85px] bg-white shadow-lg p-4'>
      <Container>
        <div className='flex justify-between items-center'>
          <div className='flex'>
            <Image
              src={traveloLogo}
              alt='travelo-logo'
              placeholder='blur'
              width='182'
              height='48'
            />
            <Search />
          </div>
          <div className='flex gap-5'>
            <Nav />
            <Button className='w-[190px]'>Masuk</Button>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header
