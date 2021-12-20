import Button from 'components/Button'
import Container from 'components/Container'
import InfoItem from './infoItem'

import styles from './TopSection.module.css'

const TopSection = () => {
  return (
    <section className={styles.section}>
      <Container>
        <div className='flex flex-col pt-[112px] pb-[58px]'>
          <div className='flex flex-col mb-[174px]'>
            <h1 className='text-heading-2 font-bold font-label text-gray-100 mb-8 w-[500px]'>
              Jelajahi Dunia Yang Indah Bersamaku
            </h1>
            <p className='text-heading-3 text-gray-70 mb-7 w-[526px]'>
              Jelajahi dunia yang indah bersamaku dengan pesan tiket di Travelo
              kamu akan mendapatkan pelayanan terbaik untuk wisata liburanmu
              bersamaku.
            </p>
            <Button className='w-[190px]'>Lihat Paket</Button>
          </div>
          <div className='flex gap-40 mx-auto'>
            <InfoItem label='+30' subLabel='Negara' />
            <InfoItem label='+1500' subLabel='Penginapan' />
            <InfoItem label='+100' subLabel='Tempat Wisata' />
            <InfoItem label='+60.000' subLabel='Pelanggan' />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default TopSection
