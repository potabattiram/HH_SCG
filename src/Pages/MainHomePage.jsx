import React from "react";
import HomePage from "../Components/HomePage";
import Carousel from "../Components/subcompos/Carousel";
import DiscoverNewJourneys from "../Components/DiscoverNewJourneys";
import BestKirtanVideos from "../Components/BestKirtanVideos";
import SubscriptionForm from "../Components/SubscriptionForm ";

export default function MainHomePage(){
    return(
        <>
            <HomePage/>
            <Carousel/>
            <DiscoverNewJourneys/>
            <BestKirtanVideos/>
            <SubscriptionForm/>
        </>
    )
}