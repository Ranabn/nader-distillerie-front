"use client";
import React, {useRef} from "react";
import {useFrame} from "@react-three/fiber";
import {shaderMaterial} from "@react-three/drei";
import {extend} from "@react-three/fiber";
import * as THREE from "three";
import {motion} from "framer-motion-3d";

const ImageShaderMaterial = shaderMaterial(
    {
        uTexture: new THREE.Texture(),
        uTime: 0,
        uDistortion: 0.0,
        uDistortFactor: 0.2, // Maximum distortion factor
    },
    // Vertex Shader
    `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
    // Fragment Shader
    `
    uniform sampler2D uTexture;
    uniform float uTime;
    uniform float uDistortion;
    uniform float uDistortFactor;
    varying vec2 vUv;

    void main() {
      vec2 uv = vUv;
      // Apply distortion based on a sine wave and distortion factor
      uv.y += sin(uv.x * 10.0 + uTime) * uDistortFactor * uDistortion;
      gl_FragColor = texture2D(uTexture, uv);
    }
  `
);

extend({ImageShaderMaterial});

export const ImagePlane = ({texture, active, transitionProgress}) => {
    const ImagePlane = ({texture, transitionProgress}) => {
        const ref = useRef();

        useFrame(({clock}) => {
            if (ref.current && ref.current.material) {
                ref.current.material.uniforms.uTime.value = clock.getElapsedTime();
                ref.current.material.uniforms.uDistortion.value = 1 - transitionProgress;
            }
        });

        return (
            <mesh ref={ref} scale={[2, 2, 2]} position={[0, 0, 0]}>
                <planeGeometry args={[2, 2]}/>
                <imageShaderMaterial
                    attach="material"
                    uTexture={texture}
                    transparent
                    opacity={transitionProgress}
                />
            </mesh>
        );
    }
}