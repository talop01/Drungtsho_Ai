import React from "react";
import { useState } from "react";
import {
  InferenceContext,
  InferenceResult,
  PhotoCollector
} from "landingai-react";

const apiInfo = {
  endpoint: `https://predict.app.landing.ai/inference/v1/predict?endpoint_id=948a84ae-3196-4fdc-8479-0b2332bc6073`,
  key: "land_sk_slRRlIqbzxFagS9PbpbX5eCUEdYPrz9F1yBh0FW57VXMDRU2xJ"
};

export default function App() {
  const [image, setImage] = useState();

  return (
  <div style={{ 
      textAlign: "center", 
      marginBottom: 12, 
      maxHeight: "100vh"
    }}>
    <InferenceContext.Provider value={apiInfo}>
      <div style={{ textAlign: "center", marginBottom: 12 }}>
        <img
          src="https://th.bing.com/th?id=OIP.a63LyzsEhLF4cIq2Yda66gHaHa&w=249&h=249&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
          width={30}
        />
        <h1>Drungtsho AI</h1>
      </div>
      <PhotoCollector setImage={setImage} />
      <InferenceResult image={image} />
      <p style={{ textAlign: "center" }}>
        Powered by <b>NoMindBhutan</b>
      </p>
    </InferenceContext.Provider>
  </div>
  );
}
