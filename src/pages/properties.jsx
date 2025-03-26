import ContactUs from "../components/contactus.jsx";

const Properties = () => {
    // Dummy data for properties
    const properties = [
        {
            id: 1,
            title: "Luxury Villa in Istanbul",
            price: "$500,000",
            image: "/img/mockimage.jpg",
            description: "5-bed villa with a pool and garden view.",
        },
        {
            id: 2,
            title: "Modern Apartment in Antalya",
            price: "$300,000",
            image: "/img/mockimage.jpg",
            description: "3-bedroom apartment near the beach.",
        },
        {
            id: 3,
            title: "Cozy Cottage in Bodrum",
            price: "$250,000",
            image: "/img/mockimage.jpg",
            description: "2-bedroom cottage with a scenic view.",
        },
        {
            id: 4,
            title: "Penthouse in Izmir",
            price: "$750,000",
            image: "/img/mockimage.jpg",
            description: "Luxurious penthouse in the city center.",
        },
        {
            id: 5,
            title: "Seaside Villa in Alanya",
            price: "$600,000",
            image: "/img/mockimage.jpg",
            description: "4-bedroom villa right by the sea.",
        },
        {
            id: 6,
            title: "Country Home in Sapanca",
            price: "$400,000",
            image: "/img/mockimage.jpg",
            description: "3-bedroom home surrounded by nature.",
        },
        {
            id: 7,
            title: "Elegant Apartment in Bursa",
            price: "$350,000",
            image: "/img/mockimage.jpg",
            description: "2-bedroom apartment in a serene neighborhood.",
        },
        {
            id: 8,
            title: "Modern Villa in Ankara",
            price: "$550,000",
            image: "/img/mockimage.jpg",
            description: "4-bedroom villa with high-end amenities.",
        },
        {
            id: 9,
            title: "Luxury Apartment in Istanbul",
            price: "$450,000",
            image: "/img/mockimage.jpg",
            description: "3-bedroom apartment with a Bosphorus view.",
        },
        {
            id: 10,
            title: "Beach House in Cesme",
            price: "$800,000",
            image: "/img/mockimage.jpg",
            description: "4-bedroom house with private beach access.",
        },
        {
            id: 11,
            title: "Mountain Cabin in Trabzon",
            price: "$220,000",
            image: "/img/mockimage.jpg",
            description: "Cozy cabin with breathtaking mountain views.",
        },
        {
            id: 12,
            title: "Chic Condo in Izmir",
            price: "$370,000",
            image: "/img/mockimage.jpg",
            description: "2-bedroom condo with modern interiors.",
        },
        {
            id: 13,
            title: "Historic Mansion in Istanbul",
            price: "$2,000,000",
            image: "/img/mockimage.jpg",
            description: "A 6-bedroom mansion with historic charm.",
        },
        {
            id: 14,
            title: "Farmhouse in Urla",
            price: "$300,000",
            image: "/img/mockimage.jpg",
            description: "3-bedroom farmhouse with open fields.",
        },
        {
            id: 15,
            title: "City Apartment in Ankara",
            price: "$280,000",
            image: "/img/main-bg.jpg",
            description: "2-bedroom apartment close to the metro.",
        },
        {
            id: 16,
            title: "Luxury Estate in Bodrum",
            price: "$1,500,000",
            image: "/img/main-bg.jpg",
            description: "6-bedroom estate with a private marina.",
        },
        {
            id: 17,
            title: "Suburban Home in Istanbul",
            price: "$450,000",
            image: "/img/main-bg.jpg",
            description: "4-bedroom family home with a garden.",
        },
        {
            id: 18,
            title: "Lakeview Villa in Sapanca",
            price: "$600,000",
            image: "/img/main-bg.jpg",
            description: "3-bedroom villa with stunning lake views.",
        },
        {
            id: 19,
            title: "Eco-Friendly House in Antalya",
            price: "$550,000",
            image: "/img/main-bg.jpg",
            description: "4-bedroom eco-home with solar panels.",
        },
        {
            id: 20,
            title: "Modern Duplex in Bursa",
            price: "$320,000",
            image: "/img/main-bg.jpg",
            description: "2-bedroom duplex with sleek interiors.",
        },
    ];

    return (
        <div className="w-full">
            {/* Hero Section */}
            <div
                className="relative h-96 bg-cover bg-center flex items-center justify-center"
                style={{
                    backgroundImage: "url('/img/main-bg.jpg')",
                }}
            >
                <div className="text-center text-white bg-black bg-opacity-70 p-8 rounded-md max-w-2xl">
                    <h1 className="text-5xl font-extrabold tracking-tight">Our Properties</h1>
                    <p className="text-xl mt-4">
                        Explore the finest properties in Turkey. Your dream home awaits.
                    </p>
                </div>
            </div>

            {/* Properties Section */}
            <section className="py-10 bg-gray-50">
                <div className="container mx-auto px-6 lg:px-20">
                    <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
                        Properties for Sale
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {properties.map((property) => (
                            <div
                                key={property.id}
                                className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                            >
                                <img
                                    src={property.image}
                                    alt={property.title}
                                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                                <div className="p-6">
                                    <h3 className="text-2xl font-semibold text-gray-800">
                                        {property.title}
                                    </h3>
                                    <p className="text-lg text-gray-600 mt-2">{property.price}</p>
                                    <p className="text-gray-700 mt-4">{property.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <ContactUs/>
        </div>
    );
};

export default Properties;
