import barbervid from './videos/barbervid.mp4'

function VideoBanner() {

  return (
    <div className='relative px-4 h-[75vh] bg-neutral-900 flex flex-col gap-4 justify-center items-center'>
   
    <video className='absolute opacity-60 top-0 left-0 w-full h-full object-cover' src={barbervid} muted loop autoPlay></video>
  
    </div>
  )
}

export default VideoBanner