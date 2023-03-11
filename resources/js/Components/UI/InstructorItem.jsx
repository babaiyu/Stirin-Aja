export default function InstructorItem({ data }) {
    return (
        <div
            className="w-full md:max-w-xs max-w-none mb-6 bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700"
            id="instructors"
        >
            <div className="flex justify-between p-4">
                <div className="w-1/2 flex justify-center">
                    <img
                        className="w-24 h-24 border-2 border-sky-500 p-1 rounded-full object-cover"
                        src={data?.img}
                        alt="Bonnie image"
                    />
                </div>
                <div className="w-1/2 flex flex-col items-start justify-center">
                    <h5 className="text-xl font-medium text-gray-900 dark:text-white">
                        {data?.fullname}
                    </h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                        Instruktur Expert
                    </span>
                </div>
            </div>
        </div>
    );
}
