import React, { useEffect } from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const LoginComponent = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container max-w-screen-lg mx-auto px-4 md:px-8 py-8 md:py-14">
      LoginComponent
      {/* <Card className="max-w-[400px]">
        <CardHeader>
          <span className="text-2xl font-semibold text-center">Login</span>
          <CardDescription>Login using your WCA account</CardDescription>
        </CardHeader>
        <CardFooter>
          <Button type="submit" className="w-full">
            Sign in
          </Button>
        </CardFooter>
      </Card> */}
    </div>
  )
}

export default LoginComponent