import React, { useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";
import { FaSearchLocation } from "react-icons/fa";
const Coverage = () => {
  const position = [23.685, 90.3563];
  const serviceCenters = useLoaderData();
  const mapRef = useRef(null);

  const handleSearch = (e) => {
    e.preventDefault();

    const location = e.target.location.value;

    const district = serviceCenters.find((c) =>
      c.district.toLowerCase().includes(location.toLowerCase()),
    );

    if (district) {
      const cood = [district.latitude, district.longitude];

      mapRef.current.flyTo(cood, 10);
    }
  };
  return (
    <div>
      <div>
        <div className="max-w-2xl mx-auto flex flex-col items-center    py-8 gap-6">
          <h1 className="text-4xl font-bold text-secondary">
            We are available in 64 districts
          </h1>

          {/* search */}
          <form onSubmit={handleSearch}>
            <div>
              <label className="input input-warning w-full">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </g>
                </svg>
                <input
                  type="search"
                  name="location"
                  className="grow w-[400px]"
                  placeholder="Search"
                />
              </label>
            </div>
          </form>
        </div>
        <div className="w-full border-b-2 my-6 border-dashed max-w-5xl mx-auto"></div>
        {/* maps */}
        <div className="max-w-6xl h-[800px] mx-auto border-2 border-primary rounded-4xl mb-12">
          <MapContainer
            className="max-w-6xl h-[800px] mx-auto  rounded-4xl"
            center={position}
            ref={mapRef}
            zoom={7}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {serviceCenters.map((center, index) => (
              <Marker
                key={index}
                position={[center.latitude, center.longitude]}
              >
                <Popup>
                  <strong className="text-2xl text-red-500">District:</strong>{" "}
                  <div className="text-xl text-secondary">
                    {center.district}
                  </div>{" "}
                  <br></br>
                  <strong className="text-2xl text-red-500">
                    Covered area:
                  </strong>{" "}
                  <div className="text-[16px] text-secondary ">
                    {" "}
                    {center.covered_area.join(", ")}
                    <br></br>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
          ,
        </div>
      </div>
    </div>
  );
};

export default Coverage;
