
const Card = ({data}) => {
  const {nombre, apellido, edad, color} = data;
  return (
    <div className="mx-10 mt-5 bg-emerald-100 w-1/3 rounded-xl p-10">
      <h3 className="text-center">Hola <span className="font-semibold">{nombre} {apellido}</span> sabemos que tu edad es <span className="font-semibold">{edad}</span> y tu color favorito es el <span className="font-semibold italic">{color}</span></h3>
    </div>
  )
}

export default Card