"use client";
import { useEffect } from "react";
import Banner from "@/components/GymCoaching/Banner";
import DigitalFitnessCoaching from "@/components/GymCoaching/DigitalFitnessCoaching";
import DownloadTheApp from "@/components/GymCoaching/DownloadTheApp";
import Features from "@/components/GymCoaching/Features";
import FeedbackSlider from "@/components/GymCoaching/FeedbackSlider";
import FunFacts from "@/components/GymCoaching/FunFacts";
import Instructor from "@/components/GymCoaching/Instructor";
import LatestBlogPost from "@/components/GymCoaching/LatestBlogPost";
import TopSellingCourses from "@/components/GymCoaching/TopSellingCourses";
import WhyChooseUs from "@/components/GymCoaching/WhyChooseUs";
import AudioPlayer from "@/components/AudioPlayer";
import { getHomepageCourses } from "@/actions/getCourses";
import IntroVideo from "@/components/SuccessStory/IntroVideo";
import OurStory from "@/components/SuccessStory/OurStory";
import PageBanner from "@/components/Shared/PageBanner";

const Page = async () => {
	//const { courses } = await getHomepageCourses();


	return (
		<>
			<AudioPlayer audioName="voz/vozWelcome.mp3" />
			<Banner />
			<Features />
			<PageBanner
				pageTitle="Success Story"
				homePageUrl=""
				homePageText=""
				activePageText=""
			/>
			<IntroVideo />
			<OurStory />
			{/*<WhyChooseUs />
			<TopSellingCourses courses={[]} />
			<FunFacts />*/}
			<FeedbackSlider />
			<Instructor />
			{/*<DownloadTheApp />
			<LatestBlogPost />
			<DigitalFitnessCoaching />*/}
		</>
	);
};

export default Page;
