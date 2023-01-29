import React from "react";
import { useParams } from "react-router-dom";
import { API_key } from "../../secret/apikey";
const UserLocationMap: React.FC = () => {
  const { lat, lng } = useParams();

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "10px"
        }}
      >
        <img
          src={`https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=2
        &size=400x400&key=${API_key}`}
          alt="map "
          width={400}
          height={400}
        />
      </div>
    </>
  );
};

export default UserLocationMap;
