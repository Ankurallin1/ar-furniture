import { Canvas } from "@react-three/fiber";
import { ARButton, XR } from "@react-three/xr";
import { useCallback, useState } from "react";
import { CharacterAnimationsProvider } from "../../contexts/ModelControl";
import XrGallery from "./XrGallery";
import { Environment } from "@react-three/drei";
import Interface from "./Interface";

const XrGalleryContainer = (props) => {
  
  const [overlayContent, setOverlayContent] = useState(null);
  let interfaceRef = useCallback((node) => {
    if (node !== null) {
      setOverlayContent(node);
    }
  });
  

  return (
    <CharacterAnimationsProvider>
    <Interface colapsed={close} arMode={true} ref={interfaceRef} />
      <ARButton
        className="ar-button"
        sessionInit={{
          requiredFeatures: ["hit-test"],
          optionalFeatures: ["dom-overlay","local-floor","plane-detection"],
          domOverlay: { root: overlayContent },
        }}
      />
      
      <Canvas>
        <ambientLight intensity={0.7} />
        <XR>
          <XrGallery Model={props.comp} />
        </XR>
        <Environment preset="sunset" />
      </Canvas>
    </CharacterAnimationsProvider>
  );
};

export default XrGalleryContainer;
