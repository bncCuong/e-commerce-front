import React, { ReactNode, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { NavbarLink } from './navbarLink';
import { useMediaQuery } from '@/hooks';
import { macFooter } from '@/util';
import { Menu } from 'antd';

type Props = {
  children?: ReactNode;
};

const homePage = (
  <p className="text-xs font-light">
    1. Trade-in values will vary based on the condition, year, and configuration of your eligible trade-in device. Not
    all devices are eligible for credit. You must be at least 18 years old to be eligible to trade in for credit or for
    an Apple Gift Card. Trade-in value may be applied toward qualifying new device purchase, or added to an Apple Gift
    Card. Actual value awarded is based on receipt of a qualifying device matching the description provided when
    estimate was made. Sales tax may be assessed on full value of a new device purchase. In-store trade-in requires
    presentation of a valid photo ID (local law may require saving this information). Offer may not be available in all
    stores, and may vary between in-store and online trade-in. Some stores may have additional requirements. Apple or
    its trade-in partners reserve the right to refuse or limit quantity of any trade-in transaction for any reason. More
    details are available from Apple’s trade-in partner for trade-in and recycling of eligible devices. Restrictions and
    limitations may apply. <br /> A subscription is required for Apple TV+. <br /> <br />
    To access and use all the features of Apple Card, you must add Apple Card to Wallet on an iPhone or iPad with the
    latest version of iOS or iPadOS. Update to the latest version by going to Settings - General - Software Update. Tap
    Download and Install. <br /> <br /> Available for qualifying applicants in the United States. <br /> <br />
    Apple Card is issued by Goldman Sachs Bank USA, Salt Lake City Branch. <br /> <br />
    Learn more about how Apple Card applications are evaluated at support.apple.com/kb/HT209218.
  </p>
);

export const Footer = ({ children }: Props) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const mediaQuery = useMediaQuery('(min-width: 834px)');
  const router = useRouter();
  if (router.pathname == '/') children = homePage;
  if (router.pathname == '/mac') children = macFooter;

  const showMenuHanler = () => {
    setShowMenu((prev) => !prev);
  };
  return (
    <footer className="w-[100%] text-black/70 text-base font-extrabold bg-[#f5f5f7] h-fit flex justify-center p-4">
      <div className="max-w-[1024px] w-[100%]">
        <div className="font-normal">{children}</div>
        <div className="border-t mt-6 border-black/50">
          <div className="mt-6 flex gap-4 justify-between">
            <div>
              {mediaQuery && <h1 onClick={showMenuHanler}>Shop and Learn</h1>}
              <div>
                {!mediaQuery ? (
                  <Menu>
                    <h1 onClick={showMenuHanler}>Shop and Learn</h1>
                  </Menu>
                ) : (
                  <NavbarLink inFooter={true} />
                )}
              </div>
              <div className="flex flex-col space-y-3 ">
                <h1>Apple wallet</h1>
                <Link href="/wallet">Wallet</Link>
                <Link href="/applecard">Apple Card</Link>
                <Link href="/appleplay">Apple play</Link>
                <Link href="/applecash">Apple Cash</Link>
              </div>
            </div>
            <div>
              <div className="flex flex-col space-y-3">
                <h1>Account</h1>
                <Link href="/">Manage Your Apple ID</Link>
                <Link href="/">Apple Store Account</Link>
                <Link href="/">Icloud.com</Link>
              </div>
              <div className="flex flex-col space-y-3">
                <h1>Entertaiment</h1>
                <Link href="/">Apple One</Link>
                <Link href="/">Apple TV+</Link>
                <Link href="/">Apple Music</Link>
                <Link href="/">Apple Arcade</Link>
                <Link href="/">Apple Fitness+</Link>
                <Link href="/">Apple New+</Link>
                <Link href="/">Apple Postcast</Link>
                <Link href="/">Apple Book</Link>
                <Link href="/">Apple Store</Link>
              </div>
            </div>

            <div className="flex flex-col space-y-3">
              <h1>Apple Store</h1>
              <Link href="/">Find a Store</Link>
              <Link href="/">Genius Bar</Link>
              <Link href="/">Today at Apple</Link>
              <Link href="/">Apple camp</Link>
              <Link href="/">Apple Store App</Link>
              <Link href="/">Certified Referbished</Link>
              <Link href="/">Apple Trade In</Link>
              <Link href="/">Financing</Link>
              <Link href="/">Order Status</Link>
              <Link href="/">Shopping Help</Link>
            </div>

            <div>
              <div className="flex flex-col space-y-3">
                <h1>For Business</h1>
                <Link href="#">Apple and Business</Link>
                <Link href="#">Shop for Business</Link>
              </div>
              <div className="flex flex-col space-y-3">
                <h1>For Education</h1>
                <Link href="#">Apple and Education</Link>
                <Link href="#">Shop for K-12</Link>
                <Link href="#">Shop for College</Link>
              </div>
              <div className="flex flex-col space-y-3">
                <h1>For Healthcare</h1>
                <Link href="#">Apple and Healthcare</Link>
                <Link href="#">Heal on Apple Watch</Link>
                <Link href="#">Heal Record on iPhone</Link>
              </div>
            </div>
            <div>
              <div className="flex flex-col space-y-3">
                <h1>Apple Values</h1>
                <Link href="#">Accessibillty</Link>
                <Link href="#">Education</Link>
                <Link href="#">Environment</Link>
                <Link href="#">Inclution and Diversity</Link>
                <Link href="#">Privacy</Link>
                <Link href="#">Racial Equity and Justice</Link>
                <Link href="#">Supplier Responsibillty</Link>
              </div>

              <div className="flex flex-col space-y-3">
                <h1>About Apple</h1>
                <Link href="#">Newsroom</Link>
                <Link href="#">Apple Leadership</Link>
                <Link href="#">Carrer Opportunities</Link>
                <Link href="#">Inverstor</Link>
                <Link href="#">Ethics & Compliance</Link>
                <Link href="#">Events</Link>
                <Link href="#">Contact Apple</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="my-4 font-light text-sx border-b border-black/50  pb-4">
          More ways to shop: Find an Apple Store or other retailer near you. Or call 1-800-MY-APPLE.
        </div>
      </div>
    </footer>
  );
};
