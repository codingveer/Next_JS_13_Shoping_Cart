import Link from "next/link"


const links = [
  { name: "Home", path: "/" },
  { name: "Blogs", path: "/blogs" },
  { name: "Products", path: "/products" },
  { name: "Product List", path: "/productList" },
  { name: "Dashboard", path: "/dashboard" },
  { name: "Shop", path: "/shop" },
]

export default function Navigation() {
  return (
    <div className="nav">
      <div>
        <h3>
          Shopping Site
        </h3>
      </div>
        { 
        links.map(link => 
            <Link key={link.name} href={link.path}>{link.name}{` `}</Link>
    )}
    </div>
  )
}