

export default function CardProjects( {img, logo, description}) {
  return (
    <div>
        <div>
            <img src={img} alt='project image' />
            <img src={logo} alt='logo tech' />
            <p>{description}</p>
        </div>
    </div>
  )
}