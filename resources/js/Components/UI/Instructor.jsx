import InstructorItem from "./InstructorItem";

export default function Instructor({ instructors = [] }) {
    return (
        <section
            className="container max-w-7xl mx-auto px-4 pt-24 pb-16"
            id="instructors"
        >
            <div className="mb-4">
                <h2 className="text-4xl font-bold">Our Expert Instructor</h2>
                <p className="text-lg">
                    Kenalan dulu dong dengan instruktur expert kami yang siap
                    latih kamu untuk menjadi mahir stirin mobil
                </p>
            </div>

            <div className="flex flex-wrap justify-between">
                {instructors.map((item) => (
                    <InstructorItem key={item?.id} data={item} />
                ))}
            </div>
        </section>
    );
}
