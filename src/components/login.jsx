import React, { useEffect } from 'react'

const LoginComponent = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container max-w-screen-lg mx-auto px-4 md:px-8 py-8 md:py-14">
      LoginComponent
    </div>
  )
}

export default LoginComponent