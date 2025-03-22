export function Navbar() {
    return(
    <nav className="flex w-full items-center justify-between px-[20px] py-[16px]">
        <div>
        <a href="#home">Home</a>
        </div>

        <div>
        <a href="#add/sub">Add/Sub</a>
        </div>

        <div>
        <a href="#stocks">Stocks</a>
        </div>

        <div>
        <a href="#budget">Budgeting</a>
        </div>
    </nav>
    )
}