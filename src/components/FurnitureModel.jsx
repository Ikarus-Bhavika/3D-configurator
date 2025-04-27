import React, { useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { applyWoodTexture } from "../utils/applyWoodTexture";

const LegModel = ({
  modelPath,
  woodFinish,
  selectedSize,
  furnitureOptions,
  flipVertical = false, // Add the flipVertical prop
}) => {
  const { scene } = useGLTF(modelPath);

  // Apply same wood finish as the furniture to the legs
  useEffect(() => {
    if (woodFinish && selectedSize && furnitureOptions) {
      // Pass the flipVertical parameter to applyWoodTexture
      applyWoodTexture(
        scene,
        woodFinish,
        selectedSize,
        furnitureOptions,
        flipVertical
      );
    }
  }, [scene, woodFinish, selectedSize, furnitureOptions, flipVertical]);

  if (!scene) return null;
  return <primitive object={scene} />;
};

export default LegModel;
