import Link from 'next/link';

export default function NotFound() {
  return (
    <main className='bg-[#5DC9A8] min-h-screen flex flex-col items-center justify-center px-4 py-12 relative overflow-hidden'>
      {/* Decorative background circles */}
      <div className='absolute top-[-80px] left-[-80px] w-[300px] h-[300px] rounded-full bg-[#2C9676]/30 blur-2xl' />
      <div className='absolute bottom-[-120px] right-[-60px] w-[400px] h-[400px] rounded-full bg-[#2C9676]/20 blur-3xl' />
      <div className='absolute top-1/3 right-[10%] w-[200px] h-[200px] rounded-full bg-white/10 blur-2xl' />

      <div className='relative z-10 text-center max-w-lg'>
        {/* Large 404 display */}
        <div className='relative mb-6'>
          <h1 className='text-[150px] sm:text-[200px] font-extrabold leading-none text-black/10 select-none'>
            404
          </h1>
          <div className='absolute inset-0 flex items-center justify-center'>
            <div className='bg-white/20 backdrop-blur-sm rounded-2xl px-8 py-4 shadow-lg border border-white/30'>
              <p className='text-2xl sm:text-3xl font-semibold text-black'>
                Page not found
              </p>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className='text-lg sm:text-xl text-black/70 font-medium max-w-md mx-auto mb-10 leading-relaxed'>
          Looks like this page took an unplanned expense. The page you&apos;re
          looking for doesn&apos;t exist or has been moved.
        </p>

        {/* Quick links */}
        <div className='bg-white/20 backdrop-blur-sm rounded-xl p-6 shadow-md border border-white/30 mb-8'>
          <h2 className='text-lg font-semibold text-black mb-4'>
            Here are some helpful links:
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-3'>
            <Link
              href='/'
              className='flex items-center justify-center gap-2 bg-black text-white py-3 px-5 rounded-lg font-medium hover:bg-gray-800 transition-colors'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='18'
                height='18'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path d='M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' />
                <polyline points='9 22 9 12 15 12 15 22' />
              </svg>
              Home
            </Link>
            <Link
              href='/app/dashboard'
              className='flex items-center justify-center gap-2 bg-black/50 text-white py-3 px-5 rounded-lg font-medium hover:bg-black/70 transition-colors'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='18'
                height='18'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <rect x='3' y='3' width='7' height='9' />
                <rect x='14' y='3' width='7' height='5' />
                <rect x='14' y='12' width='7' height='9' />
                <rect x='3' y='16' width='7' height='5' />
              </svg>
              Dashboard
            </Link>
            <Link
              href='/app/account'
              className='flex items-center justify-center gap-2 bg-black/50 text-white py-3 px-5 rounded-lg font-medium hover:bg-black/70 transition-colors'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='18'
                height='18'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2' />
                <circle cx='12' cy='7' r='4' />
              </svg>
              Account
            </Link>
          </div>
        </div>

        {/* Back button */}
        <p className='text-black/50 text-sm font-medium'>
          Or go back to the{' '}
          <Link
            href='/'
            className='underline hover:text-black transition-colors'
          >
            previous page
          </Link>
        </p>
      </div>
    </main>
  );
}
