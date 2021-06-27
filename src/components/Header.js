import Link from './Link'
//nav
export default function Header() {
    return (
        <div className="ui secondary pointing menu">
            <Link href="/" className="item">
                Accordion 
            </Link>
            <Link href="/list" className="item">
                Search 
            </Link>
            
            <Link href="/dropdown" className="item">
                DropDown 
            </Link>
            
            <Link href="/translate" className="item">
                Translate 
            </Link>
            
        </div>
    )
}
