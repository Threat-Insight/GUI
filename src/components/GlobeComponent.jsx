import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import ThreeGlobe from "three-globe";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import bump from "../img/earth-topology.jpg"; // Ensure you import the CSS file
import "../css/components-css/Hero.css";

const Globe = React.memo(() => {
  const globeRef = useRef();

  useEffect(() => {
    const globe = new ThreeGlobe().globeImageUrl(bump);
    const renderer = new THREE.WebGLRenderer({ alpha: true }); // Set alpha to true for transparent background
    renderer.setSize(
      globeRef.current.clientWidth,
      globeRef.current.clientHeight
    );
    renderer.setClearColor(0x000000, 0); // Set clear color and opacity
    globeRef.current.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    scene.add(globe);
    scene.add(new THREE.AmbientLight(0xcccccc, Math.PI));
    scene.add(new THREE.DirectionalLight(0xffffff, 0.6 * Math.PI));
    const camera = new THREE.PerspectiveCamera();
    camera.aspect =
      globeRef.current.clientWidth / globeRef.current.clientHeight;
    camera.updateProjectionMatrix();
    camera.position.z = 100;
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.minDistance = 500;
    controls.maxDistance = 2000;
    controls.enableZoom = false;
    const animate = () => {
      globe.rotation.y += 0.001;
      controls.update();
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();
    const onWindowResize = () => {
      camera.aspect =
        globeRef.current.clientWidth / globeRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(
        globeRef.current.clientWidth,
        globeRef.current.clientHeight
      );
    };
    window.addEventListener("resize", onWindowResize, false);
    return () => {
      controls.dispose();
      renderer.dispose();
      window.removeEventListener("resize", onWindowResize);
    };
  }, []);

  return <div ref={globeRef} className="globe" />;
});

export default Globe;
