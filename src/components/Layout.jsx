export default function Layout(props) {
    const {children} = props

    const header = (
        <header>
            <div>
                <h1 className="text-gradient">KOFFEERAM</h1>
                <p>For Coffee Insatiates</p>
            </div>
            <button>
                <p>Sign up free</p>
                <i className="fa-solid fa-mug-hot"></i>
            </button>
        </header>
    )

    const footer = (
        <footer>
            <p><span className="text-gradient">KoffeeRam</span> was made by Dennis Montford Jr. </p>
        </footer>
    )

    return (
       <>
         {header}
         <main>
             {children}
         </main>
         {footer}
       </>
    )
}
