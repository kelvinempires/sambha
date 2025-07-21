import React from 'react'
import Image, { StaticImageData } from 'next/image'
import eventImage from '../../../../public/event-planner/background.png'
import back from '../../../../public/event-planner/arrow.png'
import editImage from '../../../../public/event-planner/edit.png'
import image from '../../../../public/event-planner/image1.png'
import placeholder from '../../../../public/event-planner/placeholder.png'
import location from '../../../../public/event-planner/location.png'
import time from '../../../../public/event-planner/time.png'
import date from '../../../../public/event-planner/date.png'
import sitting from '../../../../public/event-planner/sitting.png'
import map from '../../../../public/event-planner/Full Map.png'

// type Props = {}
// { }: Props
function page() {
  type statusType = {
    stat: string,
    value: number
  }
  type editType = {
    imageUrl: StaticImageData,
    tag: string
  }

  const edits: editType[] = [
    { imageUrl: placeholder, tag: 'Edit' },
    { imageUrl: placeholder, tag: 'Theme' },
    { imageUrl: placeholder, tag: 'Messages' },
    { imageUrl: placeholder, tag: 'Guests' },

  ]
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
      <main className='flex flex-col lg:flex-row gap-4 '>
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
              <Image src={editImage} alt='edit' height={20} width={20} />
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
        <section className='mt-4 md:mt-0 '>
          <div>
            <h1 className='text-2xl font-semibold mb-2'>Oliver & Emily&apos;s Wedding</h1>
            <div className='flex flex-col md:flex-row gap-4 my-4'>
              <div className='flex items-center gap-2'>
                <Image src={location} alt='location' />
                <h2 className='flex flex-row gap-4 '>The Grand Hall. Rosewood Estate</h2>
              </div>
              <div className='flex items-center gap-2'>
                <Image src={date} alt='date' />
                <h2>Sat, Aug 20</h2>
              </div>
              <div className='flex items-center gap-2'>
                <Image src={time} alt='time' />
                <h2>
                  3:00 PM - 10:00PM
                </h2>
              </div>
            </div>
            <div className='grid grid-cols-4 items-center'>
              {
                edits.map((edit, index) => (
                  <div key={index} className='flex flex-col items-center text-gray-400'>
                    <Image src={edit.imageUrl} alt={edit.tag} />
                    <h2>{edit.tag}</h2>
                  </div>
                ))
              }
            </div>
          </div>
          <div className='flex flex-col p-4 bg-purple-700 items-center my-4 rounded-lg text-white-base text-md'>
            <div className='flex gap-2 items-center justify-center'>
              <Image src={sitting} alt='sitting' width={15} height={15} /> <h2>Create sitting chart</h2>
            </div>
            <p>Assign seats to guests and notify them</p>
          </div>
          <div>
            <h1 className='text-black text-2xl  pb-4 border-b-2 border-gray-300 font-semibold my-4'>About</h1>
            <p className='text-justify mb-4'>Celebrate the union of Oliver and Emily at the beautiful Rosewood Estate. Enjoy a romantic ceremony, followed by a gourmet dinner and lively dance. Join us for an evening of love, joy, and unforgettable memories as the couple begins their journey together.</p>
          </div>
          <div>
            <h1 className='text-black text-2xl  pb-4 border-b-2 border-gray-300 font-semibold my-4'>Location</h1>
            <h2 className='text-black font-semibold'>The Grand Hall, Rosewood Estate </h2>
            <p className='text=gray-400 mb-4 '>123 Broadway Avenue, NY 10001</p>
            <Image src={map} alt='map' />
          </div>
        </section>
      </main>
    </div>
  )
}

export default page