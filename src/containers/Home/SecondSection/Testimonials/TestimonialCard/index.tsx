import Image from 'next/image'
import Rating from './Rating'

const TestimonialCard = () => {
  return (
    <article className='flex flex-col rounded-xl shadow bg-white w-[288px] h-[281px] p-4'>
      <div className='flex mb-'>
        <figure className='relative rounded-full overflow-hidden h-16 w-16 mr-3'>
          <Image
            src='/assets/home/my-photo.png'
            alt='profile'
            layout='fill'
            objectFit='cover'
            objectPosition='center'
          />
        </figure>
        <div className='flex flex-col'>
          <p className='text-heading-4 text-gray-100 font-label font-bold mb-1'>
            Aldo Alfiansyah
          </p>
          <p className='text-heading-5 text-gray-50 font-bold'>
            Jakarta, Indonesia
          </p>
        </div>
      </div>
      <Rating />
      <p className='text-heading-5 text-gray-70 my-4'>
        Nyari Makan halal gampang banget udah ada tour guidenya. Tour guide juga
        rama enak diajak ngobrol, dan penginapannya pun nyaman.
      </p>
      <p className='text-heading-5 text-gray-100 font-bold'>
        Nusa Penida, Bali
      </p>
      <p className='text-heading-6 text-gray-50'>23-09-2021</p>
    </article>
  )
}

export default TestimonialCard
