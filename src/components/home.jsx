import React, { useEffect } from 'react'
import YouTube from 'react-youtube';
import Competitions from './competitions';
import { MoreLinks } from './links';

const HomeComponent = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 0,
    },
  };
  return (
    <div className="container max-w-screen-lg mx-auto px-4 md:px-8 py-8 md:py-14 space-y-5 md:space-y-10">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl text-center font-semibold tracking-tight first:mt-0">
        SpeedCubers India <br />
        <span className='scroll-m-20 mb-10 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0'>WCA Regional Organisation</span>

      </h2>
      <div className='pb-5'>
        <YouTube opts={opts} videoId='yGpSOCBbPvk' />
      </div>
      <div className='space-y-10 pb-5'>
        <Competitions title={"Upcoming Competitions"} />
        <Competitions title={"Past Competitions"} />
      </div>
      <MoreLinks />
    </div>
  )
}

export default HomeComponent