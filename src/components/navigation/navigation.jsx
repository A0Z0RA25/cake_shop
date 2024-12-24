
function Navigation(){

    const list = [
        {id: 1, name: "Home", link: "/#home-page"},
        {id: 2, name: "Products", link: "/#cake-container"},
        {id: 3, name: "Contact", link: "/#"}
    ];

    const dropDownList = [
        {name: "yes"},
        {name: "no"},
        {name: "okay"}
    ]

    return(
        <div className="fixed w-svw flex flex-wrap justify-evenly items-center gap-x-2">
            <div className="font-bold md:text-2xl">Cake's</div>
            { /*list*/ }
            <div className="md:w-1/2">
                <ul className="flex justify-evenly border border-black rounded gap-x-3 px-2">
                    {list.map((li) => (
                        <li key={li.id}><a href={li.link}>{li.name}</a></li>
                    ))}
                </ul>
            </div>
            {/* Cart */}
            <div>
                <h1>Cart</h1>
            </div>
            {/* Account */}
            <div>
                <h1>Account</h1>
            </div>  
        </div>
    ) 
}
export default Navigation;