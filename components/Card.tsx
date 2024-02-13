import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card"

const CardComp = () => {
  return (
    <div className="p-5 mt-5 flex flex-row justify-center">
        <Card className="">
            <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
            <p>Card Content</p>
            </CardContent>
            <CardFooter>
            <p>Card Footer</p>
            </CardFooter>
        </Card>

        <Card className="ml-5">
            <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
            <p>Card Content</p>
            </CardContent>
            <CardFooter>
            <p>Card Footer</p>
            </CardFooter>
        </Card>

    </div>
  )
}

export default CardComp;