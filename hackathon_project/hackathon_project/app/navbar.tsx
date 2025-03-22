export function Navbar() {
    return(
    <nav className="flex w-full items-center justify-between px-[20px] py-[16px]">
        <div>
        <a href="home.tsx" className="button-class">Home</a>
        </div>

        <div>
        <a href="addsub.tsx" className="button-class">Add/Sub</a>
        </div>

        <div>
        <a href="stocks.tsx" className="button-class">Stocks</a>
        </div>

        <div>
        <a href="budgetmain.tsx" className="button-class">Budgeting</a>
        </div>
    </nav>
    )
}