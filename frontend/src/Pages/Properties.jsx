import React, { useState } from "react";
import { useTheme } from "../Context/ThemeContext";
// import { NavLink } from "react-router-dom";

import { Link } from "react-router-dom";

function Properties() {
    const { theme } = useTheme();

    const [searchInput, setSearchInput] = useState("");
    const [search, setSearch] = useState("");
    const [typeInput, setTypeInput] = useState("all");
    const [type, setType] = useState("all");
    const [sort, setSort] = useState("default");

    const properties = [
        {
            id: 1,
            title: "Luxury Villa",
            location: "Mumbai",
            price: 12000000,
            type: "buy",
            beds: 4,
            baths: 3,
            image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa"
        },
        {
            id: 2,
            title: "Modern Apartment",
            location: "Pune",
            price: 4500000,
            type: "buy",
            beds: 3,
            baths: 2,
            image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
        },
        {
            id: 3,
            title: "City Flat",
            location: "Thane",
            price: 15000,
            type: "rent",
            beds: 2,
            baths: 1,
            image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716"
        },
        {
            id: 4,
            title: "Beachside Villa",
            location: "Goa",
            price: 18000000,
            type: "buy",
            beds: 5,
            baths: 4,
            image: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6"
        },
        {
            id: 5,
            title: "Studio Apartment",
            location: "Bangalore",
            price: 12000,
            type: "rent",
            beds: 1,
            baths: 1,
            image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb"
        },
        {
            id: 6,
            title: "Penthouse Suite",
            location: "Delhi",
            price: 25000000,
            type: "buy",
            beds: 4,
            baths: 4,
            image: "https://images.unsplash.com/photo-1613977257363-707ba9348227"
        },
        {
            id: 7,
            title: "Family House",
            location: "Nagpur",
            price: 3500000,
            type: "buy",
            beds: 3,
            baths: 2,
            image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be"
        },
        {
            id: 8,
            title: "Luxury Condo",
            location: "Hyderabad",
            price: 7000000,
            type: "buy",
            beds: 3,
            baths: 2,
            image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
        },
        {
            id: 9,
            title: "Affordable Flat",
            location: "Indore",
            price: 9000,
            type: "rent",
            beds: 2,
            baths: 1,
            image: "https://images.unsplash.com/photo-1599423300746-b62533397364"
        },
        {
            id: 10,
            title: "Lake View Villa",
            location: "Udaipur",
            price: 15000000,
            type: "buy",
            beds: 4,
            baths: 3,
            image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6"
        },
        {
            id: 11,
            title: "Compact Studio",
            location: "Chennai",
            price: 11000,
            type: "rent",
            beds: 1,
            baths: 1,
            image: "https://images.unsplash.com/photo-1597047084897-51e81819a499"
        },
        {
            id: 12,
            title: "Luxury Bungalow",
            location: "Ahmedabad",
            price: 9000000,
            type: "buy",
            beds: 4,
            baths: 3,
            image: "https://images.unsplash.com/photo-1605146769289-440113cc3d00"
        }
    ];
    const handleSearch = () => {
        setSearch(searchInput);
        setType(typeInput);
    };

    const handleReset = () => {
        setSearch("");
        setSearchInput("");
        setType("all");
        setTypeInput("all");
        setSort("default");
    };

    let filteredProperties = properties.filter((property) => {
        return (
            property.location.toLowerCase().includes(search.toLowerCase()) &&
            (type === "all" || property.type === type)
        );
    });

    if (sort === "low") filteredProperties.sort((a, b) => a.price - b.price);
    if (sort === "high") filteredProperties.sort((a, b) => b.price - a.price);

    return (
        <div className={`py-5 ${theme === "dark" ? "bg-dark text-light" : "bg-light"}`}>
            <div className="container-fluid">

                {/* Page Header */}
                <div className="d-flex justify-content-between align-items-center mb-4 px-3">
                    <h2 className="fw-bold">Find Your Dream Property</h2>

                    <select
                        className="form-select w-auto"
                        value={sort}
                        onChange={(e) => setSort(e.target.value)}
                    >
                        <option value="default">Sort</option>
                        <option value="low">Price Low → High</option>
                        <option value="high">Price High → Low</option>
                    </select>
                </div>

                <div className="row">

                    {/* Sidebar Filters */}
                    <div className="col-lg-3 mb-4">
                        <div
                            className={`card shadow-sm p-4 position-sticky top-0 ${theme === "dark" ? "bg-secondary text-light" : ""
                                }`}
                        >
                            <h5 className="fw-bold mb-3">Search Filters</h5>

                            <label className="fw-semibold">City</label>
                            <input
                                type="text"
                                className="form-control mb-3"
                                placeholder="Search city"
                                value={searchInput}
                                onChange={(e) => setSearchInput(e.target.value)}
                            />

                            <label className="fw-semibold">Property Type</label>
                            <select
                                className="form-select mb-3"
                                value={typeInput}
                                onChange={(e) => setTypeInput(e.target.value)}
                            >
                                <option value="all">All</option>
                                <option value="buy">Buy</option>
                                <option value="rent">Rent</option>
                            </select>

                            <div className="d-grid gap-2 mt-3">
                                <button className="btn btn-primary" onClick={handleSearch}>
                                    Search
                                </button>

                                <button className="btn btn-outline-secondary" onClick={handleReset}>
                                    Reset Filters
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Property Cards */}
                    <div className="col-lg-9">
                        <div className="row g-4">

                            {filteredProperties.map((property) => (
                                <div className="col-md-6 col-lg-4" key={property.id}>
                                    <div
                                        className={`card shadow-sm border-0 h-100 ${theme === "dark" ? "bg-secondary text-light" : ""
                                            }`}
                                    >

                                        <div className="position-relative">
                                            <img
                                                src={property.image}
                                                className="card-img-top"
                                                style={{ height: "220px", objectFit: "cover" }}
                                                alt="property"
                                            />

                                            <span
                                                className={`badge position-absolute top-0 start-0 m-2 ${property.type === "buy" ? "bg-success" : "bg-warning"
                                                    }`}
                                            >
                                                {property.type === "buy" ? "For Sale" : "For Rent"}
                                            </span>

                                            <button
                                                className="btn btn-light position-absolute top-0 end-0 m-2"
                                                title="Add to Wishlist"
                                            >
                                                ❤️
                                            </button>
                                        </div>

                                        <div className="card-body">
                                            <h5 className="fw-bold">{property.title}</h5>

                                            <p className="text-muted">📍 {property.location}</p>

                                            <h6 className="text-success fw-bold">
                                                ₹{property.price.toLocaleString()}
                                                {property.type === "rent" ? "/month" : ""}
                                            </h6>

                                            <div className="d-flex justify-content-between mt-3">
                                                <span>🛏 {property.beds} Beds</span>
                                                <span>🛁 {property.baths} Baths</span>
                                            </div>
                                            <Link
                                                to={`/property/${property.id}`}
                                                className="btn btn-outline-primary w-100 mt-3"
                                            >
                                                View Details
                                            </Link>
                                        </div>

                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Properties;