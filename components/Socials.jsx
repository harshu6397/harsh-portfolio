import Link from "next/link"
import socialsIcons from "../data/socialsIcons"

const Socials = ({containerStyles, iconStyles}) => {
  return <div className={containerStyles}>
    {socialsIcons.map(({name, path, icon}) => (
      <Link
        key={name}
        href={path}
        className="group"
      >
        <span
          className={iconStyles}
        >
          {icon}
        </span>
      </Link>
    ))}
  </div>
}

export default Socials