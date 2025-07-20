import React from 'react'
import Image from 'next/image'
import eventImage from '../../../../public/event-planner/background.png'
import back from '../../../../public/event-planner/arrow.png'
import edit from '../../../../public/event-planner/edit.png'
import image from '../../../../public/event-planner/image1.png'

// type Props = {}
// { }: Props
function page() {
  type statusType = {
    stat: string,
    value: number
  }
  const status: statusType[] = [{ stat: 'going', value: 0 }, { stat: 'pending ', value: 0 }, { stat: 'Not going', value: 0 }]
  return (
    <div className='px-6'>
      <nav className='flex gap-2 text-gray-400 text-lg md:text-xl items-center my-6'>
        <Image src={back} alt='back-arrow' />
        <h1>Events / <span className='text-black font-semibold'>Oliver $ Emily&apos;s Wedding</span></h1>
      </nav>
      <header>
        <ul className='flex text-lg md:text-xl text-gray-400 gap-4 my-6 pb-4 border-b-2 border-black'>
          <li> Details </li>
          <li>Guests</li>
          <li>Tasks</li>
          <li>Budget</li>
        </ul>
      </header>
      <main>
        <section>
          <Image src={eventImage} alt='Event-Image' />
          <div className='flex flex-col md:flex-row my-4 gap-4 md:justify-between pb-4 border-b-2 border-gray-300'>
            <div className='flex gap-2 flex-col'>
              <h1 className='text-2xl text-black font-semibold'>Hosts</h1>
              <p className='text-gray-400'>Add event manager to see your event through.</p>
            </div>
            <button className='bg-gray-300 text-black font-semibold text-lg py-2 rounded-3xl w-[120px] sm:self-center'>+ Add host</button>
          </div>
          <div className='mb-4 flex justify-between flex-col md:flex-row md:items-center gap-3 text-gray-400 pb-4 border-b-2 border-gray-300'>
            <div className='flex gap-2 items-center'>
              <Image src={image} alt='Placeholder-image' />
              <div className='flex flex-col'>
                <h2 className='text-black font-bold'>Jerry Wilson (You)</h2>
                <p>Jerry@example.com</p>
              </div>
            </div>
            <div className='flex gap-3 items-center'>
              <h2 className='text-[#2B2BCF] font-semibold text-lg '> Creator</h2>
              <Image src={edit} alt='edit' height={20} width={20} />
            </div>
          </div>
          <div>
            <div className='flex  flex-col md:flex-row gap-2 text-lg font-semibold mb-4 md:items-center justify-between text-gray-400 pb-4 border-b-2 border-gray-300'>
              <div className='flex flex-col gap-3'>
                <h1 className='text-2xl font-bold text-black'>Guests</h1>
                <p>Add event managers to see your event through</p>
              </div>
              <p>View all {'>'} </p>
            </div>
            <div className='grid grid-cols-3 gap-4 md:justify-between'>
              {status.map((stats, index) => (
                <div key={index} className='flex flex-col gap-2'>
                  <p className='text-black text-lg font-semibold'>{stats.value}</p>
                  <h2 className='text-gray-400 font-semibold text-lg '>{stats.stat}</h2>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section>

        </section>
      </main>
    </div>
  )
}

export default page