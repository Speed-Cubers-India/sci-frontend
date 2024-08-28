import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

export default function CardComponent({ compImg, name }) {
    return (
        <Card shadow="none" className="py-4 border">
            <CardBody className="overflow-visible py-2 flex items-center">
                <Image
                    alt="Card background"
                    className="object-cover md:h-[300px] rounded-xl"
                    src={compImg}
                />
            </CardBody>
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-tiny uppercase font-bold">{name}</p>
            </CardHeader>
        </Card>
    );
}
