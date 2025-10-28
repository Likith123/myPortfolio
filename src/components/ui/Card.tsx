function Card({ count, rotate} : { count: number , rotate?: string }) {
  return (
    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 content-center bg-sky-400 rounded-lg h-[300px] w-[200px] z-${count} ${rotate}`}><span> Card {count}</span></div>
  )
}

export default Card