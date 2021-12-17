import PackageCard from './PackageCard'

const Packages = () => {
  return (
    <>
      <h3 className='text-heading-3 text-white font-label font-bold pt-14 mb-1'>
        Paket Liburan Populer
      </h3>
      <p className='text-heading-4 text-white mb-4'>
        Paket terbaik yang sering dipilih oleh para traveler
      </p>
      <div className='flex justify-between gap-4'>
        <PackageCard />
        <PackageCard />
        <PackageCard />
        <PackageCard />
      </div>
    </>
  )
}

export default Packages
