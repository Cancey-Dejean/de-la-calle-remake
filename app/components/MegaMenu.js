import Link from "next/link"

const MegaMenu = ({ categories }) => {
  return (
    <nav className="mega-menu">
      <ul className="mega-menu__categories">
        {categories.map((category) => (
          <li key={category.id}>
            <Link href={`/category/${category.slug}`}>{category.name}</Link>
            {category.children && (
              <ul className="mega-menu__subcategories">
                {category.children.map((subcategory) => (
                  <li key={subcategory.id}>
                    <Link href={`/category/${subcategory.slug}`}>
                      {subcategory.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default MegaMenu
