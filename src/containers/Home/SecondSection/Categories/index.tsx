import CategoryCard from './CategoryCard'

const Categories = () => {
  return (
    <>
      <h3 className='text-heading-3 text-gray-100 font-label font-bold mb-8 pt-14'>
        Kategori Tempat
      </h3>
      <div className='flex justify-between'>
        {Array.from({ length: 6 }).map((_, index) => (
          <CategoryCard key={index} />
        ))}
      </div>
    </>
  )
}

export default Categories
