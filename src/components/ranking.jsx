import React, { useEffect } from 'react'

const RankingComponent = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <div className='container max-w-screen-lg mx-auto px-4 md:px-8 py-8 md:py-14'>
            RankingComponent
        </div>
    )
}

export default RankingComponent