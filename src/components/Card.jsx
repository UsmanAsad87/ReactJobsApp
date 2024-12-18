
const Card = ({children,bg='by-gray-100'}) => {
  return (
    <div className={`${bg} p-6 rounded-lg shadow-md`}>
      {children}
    </div>
  )
}

export default Card
