export default function SteerSchedule({ schedules = [] }) {
    return (
        <section className="container max-w-7xl mx-auto px-4 pt-24 pb-16" id="schedules">
            <div className="mb-4">
                <h2 className="text-4xl font-bold">Jadwal Stirin Aja</h2>
                <p className="text-lg">
                    Tentukan jadwal belajar stir mobil kapanpun kamu senggang.
                </p>
            </div>

            <div className="flex justify-between">
                <div className="md:w-[47.5%] w-full">
                    <ol className="relative border-l border-gray-200 dark:border-gray-700">
                        {schedules.map((item) => (
                            <li className="mb-10 ml-4" key={item?.id}>
                                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                                    {item?.day}
                                </time>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    {item?.title}
                                </h3>
                                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                                    {item?.description}
                                </p>
                            </li>
                        ))}
                    </ol>
                </div>
                <div className="md:w-[50%] w-full md:block hidden">
                    <picture className="w-full h-96 object-cover">
                        <img
                            src="/svg/car_schedules.svg"
                            alt="Car Schedules"
                            className="w-full h-96"
                        />
                    </picture>
                </div>
            </div>

            <hr />
        </section>
    );
}
