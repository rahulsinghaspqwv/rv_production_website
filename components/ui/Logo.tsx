export default function Logo(){
    return (
        <div className="flex items-center gap-3 select-none">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 via-red-500 to-orange-500 shadow-lg shadow-red-600/30">
                <span className="text-lg font-black text-white">RV</span>
            </div>
            <div className="leading-none">
                <h2 className="text-lg font-bold tracking-wide text-white">
                    Ranish Vashud
                </h2>
                <p className="text-xs tracking-[0.3em] uppercaes text-zinc-400">
                    Developer * Creator  
                </p>
            </div>         
        </div>
    );
}