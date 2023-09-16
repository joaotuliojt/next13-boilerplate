import Image from 'next/image';

const Main = () => (
  <main className='flex h-screen w-screen flex-col items-center justify-center bg-[#0A0A0C] text-[#E8E7EC]'>
    <div className='flex h-60 w-60 items-center justify-center rounded-full bg-[#4B0188]'>
      <Image src={'/images/me.png'} alt='' width={420} height={420} />
    </div>
    <div>
      <h1 className='mt-4 text-2xl'>Next 13 Boilerplate</h1>
      <p className='text-center text-[#8257E5]'>
        by{' '}
        <a target='_blank' href='https://joaotul.io' rel='noreferrer'>
          joaotul.io
        </a>
      </p>
    </div>
  </main>
);

export default Main;
