export default function Logo({ colorChange = "blue", width = "w-24" }) {
  return (
    <img
      src="/Logo.png"
      alt="logo"
      className={`img-fluid ${width}  ${
        colorChange === "blue"
          ? "filter grayscale"
          : "filter brightness-0 invert"
      }`}
    />
  );
}
