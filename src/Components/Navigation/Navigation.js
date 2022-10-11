import React from "react";
import { Navbar, Dropdown, Button, Menu } from "react-daisyui";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="pb-20 flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
      <Navbar className="container mx-auto border-b-4 border-slate-400 text-accent-content ">
        <Navbar.Start>
          <Dropdown>
            <Button color="ghost" tabIndex={0} className="lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </Button>
            <Dropdown.Menu tabIndex={0} className="w-52 menu-compact mt-3">
              <Dropdown.Item>Item 1</Dropdown.Item>
              <li tabIndex={0}>
                <a className="justify-between">
                  Parent
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </a>
                <ul className="p-2 bg-base-100">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <Dropdown.Item>Item 3</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </Navbar.Start>
        <Navbar.Center className="hidden lg:flex">
          <Menu horizontal className="p-0">
            <Menu.Item className="hover:bg-accent-focus rounded-lg ">
              <Link className="active:bg-accent-focus" to={"/"}>
                Topics
              </Link>
            </Menu.Item>

            <Menu.Item className="hover:bg-accent-focus rounded-lg">
              <Link className="active:bg-accent-focus" to={"/statistics"}>
                Statistics
              </Link>
            </Menu.Item>
            <Menu.Item className="hover:bg-accent-focus rounded-lg">
              <Link className="active:bg-accent-focus" to={"/blog"}>
                Blog
              </Link>
            </Menu.Item>
            <Menu.Item
              className="hover:bg-accent-focus rounded-lg"
              tabIndex={0}
            >
              <a className="active:bg-accent-focus">
                Mode
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <Menu className="p-2 bg-base-100">
                <Menu.Item>
                  <a>Submenu 1</a>
                </Menu.Item>
              </Menu>
            </Menu.Item>
          </Menu>
        </Navbar.Center>
        <Navbar.End>
          <Button>Get started</Button>
        </Navbar.End>
      </Navbar>
    </div>
  );
};

export default Navigation;
