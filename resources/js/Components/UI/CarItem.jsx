export default function CarItem({ data }) {
    return (
        <div className="flex flex-col items-center">
            <img
                src={data?.img}
                alt="Car Good"
                loading="lazy"
                className="w-full max-w-3xl h-96 object-cover"
            />
            <h2 className="text-4xl font-bold mt-2">{data?.name} ({data?.type})</h2>
            <p className="text-center">{data?.description}</p>
        </div>
    );
}
