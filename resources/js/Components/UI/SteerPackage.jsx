import SteerPackageItem from "./SteerPackageItem";

export default function SteerPackage({ packages = [] }) {
    return (
        <section
            className="container max-w-7xl mx-auto px-4 pt-24 pb-16"
            id="package"
        >
            <div className="mb-4 text-center">
                <h2 className="text-4xl font-bold">Paket Stirin Aja</h2>
                <p className="text-lg">
                    Pilih paket yang kamu mau dan tentunya sesuai untuk kamu
                </p>
            </div>

            <div className="flex flex-wrap justify-between mt-8">
                {packages.map((item) => (
                    <SteerPackageItem key={item?.id} data={item} />
                ))}
            </div>
        </section>
    );
}
