

const Badge=({text})=>{
    return(
        <div className="bg-gray-300 rounded-2xl py-1 px-2 flex justify-center items-center me-1">
             <p className="text-zinc-900 text-sm">{text}</p>
        </div>
    )
}

export default Badge;