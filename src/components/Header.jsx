import { RiArrowDownSLine } from "react-icons/ri";

export function Header () {
    return (
        <header className="p-4">
          <nav className="flex items-center justify-center md:justify-end font-medium">
            <ul>
              <li>
                <a href="#" className="flex items-center gap-1">Kelvin Guerrero <RiArrowDownSLine /> </a>
              </li>
            </ul>
          </nav>
        </header>
    )
}