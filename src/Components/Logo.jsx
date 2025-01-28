export default function Logo({colorChange="blue"}) {
  return (
    <img src="/Logo.png" alt="logo" className={`img-fluid w-24  ${colorChange === 'blue' ?'filter grayscale': 'filter hue-rotate-180'  }`}/>
  )
}

