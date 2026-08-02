const HeroLights = () => {
  return (
    <>
      <spotLight
        position={[2, 5, 6]}
        angle={0.15}
        penumbra={0.2}
        color={"white"}
        intensity={100}
      />
      <spotLight
        position={[4, 5, 4]}
        angle={0.3}
        penumbra={40}
        color="#f5deb3"
        intensity={40}
      />
      <spotLight
        position={[-3, 5, 5]}
        angle={0.4}
        penumbra={1}
        color="#ffe4b5"
        intensity={60}
      />

      <rectAreaLight
        color="#fef6e4"
        width={3}
        height={2}
        position={[1, 3, 4]}
        intensity={15}
        rotation={[-Math.PI / 5, Math.PI / 4, 0]}
      />

      <pointLight position={[0, 1, 0]} intensity={12} color="#4cc9f0" />
      <pointLight position={[1, 2, -2]} intensity={10} color="#b5179e" />
    </>
  );
};

export default HeroLights;
