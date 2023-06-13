import Image from 'next/image';
import { Layout } from './layout';
import { macCategiryList } from '@/util';

export const MacPage = () => {
  return (
    <Layout bgColorHeader={false}>
      <div className="w-[100%] text-black/70 text-base  bg-[#fbfbfd] h-fit flex  items-center p-4 flex-col-reverse">
        <div className="mt-8 flex items-center justify-center bg-[#f5f5f7] w-[110%] ">
          <p className="text-center max-w-[700px] text-sm ">
            Get 3% Daily Cash back with Apple Card. And pay for your new Mac over 12 months,
            <br /> interest‑free when you choose to check out with Apple Card Monthly Installments.* Learn more
          </p>
        </div>
        <div className="max-w-[1024px] w-[100%]">
          <nav className="mt-12 flex items-end justify-between relative cursor-pointer">
            {macCategiryList.map((item) => (
              <div key={item.id} className="flex flex-col">
                <div className="flex items-center justify-center ">
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="object-contain flex items-center"
                    width={60}
                    height={100}
                  />
                </div>
                <p className="font-light text-sm hover:text-blue-500">{item.title}</p>
                {item.new && <p className="absolute -bottom-4 translate-x-5 font-light text-xs text-red-700">New</p>}
              </div>
            ))}
          </nav>

          <section></section>
        </div>
      </div>
    </Layout>
  );
};
