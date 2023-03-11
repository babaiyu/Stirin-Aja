import { Head } from "@inertiajs/react";
import Navbar from "@/Components/UI/Navbar";
import Jumbotron from "@/Components/UI/Jumbotron";
import SteerSchedule from "@/Components/UI/SteerSchedule";
import HomeAbout from "@/Components/UI/HomeAbout";
import SteerPackage from "@/Components/UI/SteerPackage";
import Instructor from "@/Components/UI/Instructor";
import ListCar from "@/Components/UI/ListCar";
import Footer from "@/Components/UI/Footer";

export default function HomePage({schedules, packages, instructors, cars}) {
    return (
        <>
            <Head title="Stirin Aja" />
            <Navbar />
            <Jumbotron />
            <HomeAbout />
            <SteerSchedule schedules={schedules} />
            <SteerPackage packages={packages} />
            <Instructor instructors={instructors} />
            <ListCar cars={cars} />
            <Footer />
        </>
    );
}
