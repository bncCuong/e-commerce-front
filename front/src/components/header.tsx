import Link from 'next/link';
import { useMediaQuery } from '@/hooks';
import {
  AppleFilled,
  BarsOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons';
import { useState } from 'react';
import { NavbarLink } from './navbarLink';
import { Drawer } from 'antd';
type Props = {
  bgColor?: boolean

};

export const Header = ({bgColor}: Props) => {
  const mediaQuery = useMediaQuery('(min-width:834px)');
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const showMenuHanler = () => {
    setShowMenu((prev) => !prev);
  };
  return (
    <header
      className={`fixed top-0 z-50 left-0 w-full h-[45px] px-4 ${bgColor ? "bg-[#434344] text-[#dadada]" : "bg-white text-black"} flex justify-center `}
    >
      <div
        className={`max-w-[1024px] w-full flex children-center justify-between `}
      >
        <Link className="mb-1" href="/">
          <AppleFilled style={{ fontSize: '20px' }} />
        </Link>
        {mediaQuery && <NavbarLink inHeader={true} />}
        <div className="flex children-center pb-1.5 space-x-4 cursor-pointer">
          <p>
            <SearchOutlined style={{ fontSize: '20px' }} />
          </p>
          <p>
            <ShoppingCartOutlined style={{ fontSize: '20px' }} />
          </p>
          {!mediaQuery && (
            <p onClick={showMenuHanler}>
              {showMenu ? (
                <Drawer placement="top" open={showMenu} size={'large'}>
                  <NavbarLink inMenu={true} />
                </Drawer>
              ) : (
                <BarsOutlined style={{ fontSize: '20px' }} />
              )}
            </p>
          )}
        </div>
      </div>
    </header>
  );
};
