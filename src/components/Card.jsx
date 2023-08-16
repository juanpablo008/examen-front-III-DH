
const Card = ({data}) => {
  const {nombre, apellido, edad, color} = data;
  return (
    <div className="mx-10 mt-5 bg-emerald-100 w-1/3 rounded-xl p-10">
      <h3>{`Hola ${nombre} ${apellido} sabemos que tu edad es ${edad} y tu color favorito es el `} <p className={`text-[#${color}] font-semibold`}>#{color}</p></h3>
    </div>
  )
}

export default Card