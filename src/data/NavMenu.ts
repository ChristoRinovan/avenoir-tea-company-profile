export type NavMenu = {
  name: string;
  path?: string;
  children?: NavMenu[];
};

export const navMenus: NavMenu[] = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Products", path: "/products" },
  { name: "Teams", path: "/teams" },
  {
    name: "Articles",
    children: [
      { name: "Blog List", path: "/blog" },
      { name: "Create Blog", path: "/create-blog" },
    ],
  },
  
];