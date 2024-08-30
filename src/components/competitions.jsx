import React from 'react'
import CardComponent from './card';
import comp1 from "../assets/sci-kumaraguru.jpg"
import comp2 from "../assets/sci-tamilnadu.jpg"
import comp3 from "../assets/sci-selam.jpg"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const Competitions = ({ title }) => {

    const competitionsArray = [
        {
            compImg: comp1,
            name: "Kumaraguru Open 2024"
        },
        {
            compImg: comp2,
            name: "TamilNadu Cube Challenge 2024"
        },
        {
            compImg: comp3,
            name: "Selam Summer Open 2024"
        },
        {
            compImg: comp1,
            name: "Kumaraguru Open 2023"
        },
        {
            compImg: comp2,
            name: "TamilNadu Cube Challenge 2023"
        },
        {
            compImg: comp3,
            name: "Selam Summer Open 2023"
        }
    ]

    return (
        <div className='space-y-5 pb-5'>
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight border-b pb-2">
                {title}
            </h4>
            <Carousel>
                <CarouselContent>
                    {
                        competitionsArray.map((competition) => (
                            <CarouselItem key={competition.name} className="basis-1/2 md:basis-1/3">
                                <CardComponent compImg={competition.compImg} name={competition.name} />
                            </CarouselItem>
                        ))
                    }
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}

export default Competitions