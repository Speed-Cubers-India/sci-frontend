import { useEffect } from "react";
import { ImagesComponent } from "./images";

export default function AboutComponent() {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <div className="container max-w-screen-lg mx-auto px-4 md:px-8 py-8 md:py-14">
            <div className="text-left">
                <h1 className="scroll-m-20 mb-6 border-b md:text-center pb-2 text-3xl font-semibold tracking-tight first:mt-0">About Us</h1>
                <p className="text-lg md:text-xl font-semibold">Who We Are</p>
                <p className="mb-4">
                    SpeedCubers India (SCI) is the official regional organization dedicated to advancing the art and sport of speedcubing across India. Just as Cubing China and Cubing USA serve their respective countries, SCI aims to unify and support the Indian cubing community, ensuring it thrives at both grassroots and competitive levels.
                </p>
                <p className="text-lg md:text-xl font-semibold">Our Mission</p>
                <p className="mb-4">
                    Our mission is to bring structure, organization, and resources to the cubing community in India. We recognize that cubing in India is an unorganized sector with significant potential for growth. Through SCI, we aim to address these gaps by channeling resources—financial, logistical, and otherwise—where they are most needed, helping the community grow in every possible way.
                </p>
                <p className="text-lg md:text-xl font-semibold">What We Do</p>
                <p className="mb-4">
                    SCI will oversee and support sub-regional organizations (sub-ROs) within each state, centralizing funds and resources to ensure effective distribution across the country. This centralization will allow us to extend cubing into regions that have yet to be discovered, promoting inclusivity and widespread participation.
                </p>
                <p className="text-lg md:text-xl font-semibold"> Our Goals</p>
                <p className="mb-4">
                    <span className="font-semibold">Infrastructure Support</span>: We provide essential infrastructure, such as payment gateways, website development, and marketing support, to help sub-ROs organize competitions and events efficiently. <br />
                    <span className="font-semibold">Competitions and Eligibility</span>: By organizing and standardizing cubing activities, SCI makes Indian cubers eligible to apply for prestigious international competitions, such as the Asian Championships and World Championships. <br />
                    <span className="font-semibold">Community Building</span>: Our short-term goal includes launching a comprehensive website that will host state rankings, while our long-term vision includes creating an interactive platform featuring cubing news, blogs by cubers, and an engaging community space.
                </p>
                <p className="text-lg md:text-xl font-semibold">Why Choose SpeedCubers India?</p>
                <p>
                    By choosing to be a part of SpeedCubers India, you are contributing to a larger movement that aims to elevate the cubing community in India. Together, we can ensure that every cuber in India has access to the resources, support, and opportunities they need to excel.
                </p>
            </div>
            <div/>
            <ImagesComponent />
        </div>
    )
}