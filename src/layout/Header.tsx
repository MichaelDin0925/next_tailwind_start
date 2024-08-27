// next
import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import SearchInput from "../components/input/SearchInput";
import headerNavLinks from "@/data/headerNavLinks";
import CustomLink from "@/components/Link";
import Divider from '@mui/material/Divider';

const Header = function () {
  return (
    <header className="bg-white">
      <nav className="flex max-w-full px-24 py-4" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="mr-8 content-center">
            <span className="sr-only">NFT</span>
            <Image className="h-8 w-auto" width={32} height={32} src="/images/logo_connect.png" alt=""/>
          </Link>
          <div className="hidden lg:flex lg:gap-x-6">
            {headerNavLinks
              .filter((link) => link.href !== '/')
              .map((link) => (
                <CustomLink
                  key={link.title}
                  href={link.href}
                  className="text-base font-semibold leading-8 content-center text-gray-900">
                  {link.title}
                </CustomLink>
              ))}
          </div>
          <Link href="#" className="lg:ml-6 lg:content-center lg:mr-12">
            <span className="sr-only">NFT</span>
            <Image className="h-8 w-auto" src="/images/logo.png" width={87} height={36} alt=""/>
          </Link>
          <SearchInput/>
          <button className="rounded-lg font-bold px-8 bg-black text-white ml-8 mr-4">Connect</button>
          <button className="rounded-lg font-bold px-8 bg-black text-white flex items-center mr-4">
            <svg className="h-5 w-5 mr-3" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.2953 7.54314H12.8052C12.633 7.54314 12.4678 7.46963 12.3519 7.34012L11.7474 6.66102C11.656 6.55951 11.5295 6.5 11.3924 6.5C11.2554 6.5 11.1289 6.55951 11.0375 6.66102L10.5174 7.2456C10.3487 7.43463 10.1027 7.54665 9.84964 7.54665H1.69281C1.46086 8.20124 1.30974 8.89783 1.25 9.62243H8.94996C9.08702 9.62243 9.21354 9.56642 9.30843 9.46841L10.0254 8.72281C10.1132 8.62829 10.2397 8.57579 10.3663 8.57579H10.3944C10.5314 8.57579 10.6579 8.6353 10.7493 8.73681L11.3538 9.4159C11.4698 9.54542 11.6349 9.61893 11.8071 9.61893H18.0908C18.0311 8.89783 17.88 8.19773 17.648 7.53964L14.2953 7.54314Z" fill="white"/>
              <path d="M5.9093 13.9915C6.04636 13.9915 6.17288 13.9355 6.26777 13.8375L6.9847 13.0919C7.07607 12.9974 7.19907 12.9449 7.3291 12.9449H7.35722C7.49428 12.9449 7.62431 13.0044 7.71217 13.1024L8.31664 13.7815C8.43261 13.911 8.59779 13.9845 8.76999 13.9845H17.2888C17.6086 13.3264 17.8406 12.6228 17.9811 11.8842H9.80321C9.63101 11.8842 9.46583 11.8107 9.34986 11.6812L8.74539 11.0091C8.65402 10.9076 8.5275 10.8516 8.39044 10.8516C8.25338 10.8516 8.12335 10.9111 8.03549 11.0091L7.51536 11.5937C7.34667 11.7862 7.10067 11.8947 6.84412 11.8947H1.36523C1.50581 12.6333 1.73776 13.3369 2.05756 13.995L5.9093 13.9915Z" fill="white"/>
              <path d="M11.951 5.27119C12.0881 5.27119 12.2146 5.21518 12.3095 5.11717L13.0264 4.37157C13.1143 4.27705 13.2408 4.22455 13.3708 4.22455H13.399C13.536 4.22455 13.6625 4.28405 13.7539 4.38557L14.3584 5.06816C14.4744 5.19768 14.6395 5.27119 14.8117 5.27119H16.4319C14.889 3.22691 12.436 1.90723 9.67374 1.90723C6.91145 1.90723 4.45491 3.22691 2.91211 5.27119H11.951Z" fill="white"/>
              <path d="M8.70047 16.0738H6.48642C6.31422 16.0738 6.14904 16.0003 6.03307 15.8708L5.4286 15.1917C5.33723 15.0902 5.21071 15.0342 5.07365 15.0342C4.93659 15.0342 4.80656 15.0937 4.7187 15.1917L4.19857 15.7763C4.02988 15.9688 3.78388 16.0773 3.52733 16.0773H3.49219C5.03499 17.7226 7.23147 18.7552 9.67395 18.7552C12.1164 18.7552 14.3094 17.7226 15.8557 16.0773L8.70047 16.0738Z" fill="white"/>
            </svg>
            <span>x902...2938</span>
          </button>
          <button className="items-center mr-4">
            <svg  width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.5" y="0.5" width="37" height="37" rx="5.5" stroke="#989898"/>
              <path d="M26.4795 24.7658C25.5155 23.0739 24.0102 21.7555 22.2059 21.023C23.1032 20.3501 23.7659 19.4119 24.1004 18.3414C24.4348 17.2708 24.4239 16.1222 24.0692 15.0582C23.7145 13.9942 23.0341 13.0688 22.1242 12.413C21.2144 11.7572 20.1212 11.4043 18.9997 11.4043C17.8781 11.4043 16.785 11.7572 15.8751 12.413C14.9653 13.0688 14.2848 13.9942 13.9302 15.0582C13.5755 16.1222 13.5646 17.2708 13.899 18.3414C14.2334 19.4119 14.8962 20.3501 15.7934 21.023C13.9892 21.7555 12.4839 23.0739 11.5198 24.7658C11.4601 24.8618 11.4203 24.9689 11.4028 25.0807C11.3852 25.1924 11.3904 25.3065 11.4178 25.4162C11.4453 25.526 11.4945 25.629 11.5626 25.7194C11.6307 25.8097 11.7163 25.8854 11.8142 25.942C11.9122 25.9985 12.0205 26.0349 12.1327 26.0487C12.245 26.0626 12.3589 26.0538 12.4677 26.0228C12.5764 25.9918 12.6779 25.9392 12.7659 25.8682C12.854 25.7972 12.9269 25.7093 12.9802 25.6095C14.2543 23.4073 16.5043 22.0939 18.9997 22.0939C21.4951 22.0939 23.7451 23.408 25.0191 25.6095C25.1348 25.7955 25.3183 25.9293 25.5308 25.9824C25.7432 26.0356 25.9681 26.0041 26.1577 25.8945C26.3474 25.7849 26.487 25.6059 26.547 25.3953C26.6071 25.1846 26.5829 24.9589 26.4795 24.7658ZM15.3434 16.7502C15.3434 16.027 15.5579 15.3201 15.9596 14.7189C16.3614 14.1176 16.9324 13.649 17.6005 13.3722C18.2686 13.0955 19.0037 13.0231 19.713 13.1642C20.4222 13.3052 21.0737 13.6535 21.585 14.1648C22.0964 14.6761 22.4446 15.3276 22.5857 16.0369C22.7268 16.7461 22.6543 17.4812 22.3776 18.1493C22.1009 18.8174 21.6322 19.3885 21.031 19.7902C20.4297 20.192 19.7228 20.4064 18.9997 20.4064C18.0303 20.4053 17.101 20.0197 16.4156 19.3343C15.7301 18.6488 15.3445 17.7195 15.3434 16.7502Z" fill="#989898"/>
            </svg>
          </button>
          <button className="items-center">
            <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.5" y="0.5" width="37" height="37" rx="5.5" stroke="#989898"/>
              <path d="M17.3125 25.1875C17.3125 25.41 17.2465 25.6275 17.1229 25.8125C16.9993 25.9975 16.8236 26.1417 16.618 26.2269C16.4125 26.312 16.1863 26.3343 15.968 26.2909C15.7498 26.2475 15.5493 26.1403 15.392 25.983C15.2347 25.8257 15.1275 25.6252 15.0841 25.407C15.0407 25.1887 15.063 24.9625 15.1481 24.757C15.2333 24.5514 15.3775 24.3757 15.5625 24.2521C15.7475 24.1285 15.965 24.0625 16.1875 24.0625C16.4859 24.0625 16.772 24.181 16.983 24.392C17.194 24.603 17.3125 24.8891 17.3125 25.1875ZM23.5 24.0625C23.2775 24.0625 23.06 24.1285 22.875 24.2521C22.69 24.3757 22.5458 24.5514 22.4606 24.757C22.3755 24.9625 22.3532 25.1887 22.3966 25.407C22.44 25.6252 22.5472 25.8257 22.7045 25.983C22.8618 26.1403 23.0623 26.2475 23.2805 26.2909C23.4988 26.3343 23.725 26.312 23.9305 26.2269C24.1361 26.1417 24.3118 25.9975 24.4354 25.8125C24.559 25.6275 24.625 25.41 24.625 25.1875C24.625 24.8891 24.5065 24.603 24.2955 24.392C24.0845 24.181 23.7984 24.0625 23.5 24.0625ZM26.8546 15.213L25.0518 21.7014C24.9527 22.0558 24.7407 22.3683 24.4479 22.5914C24.1552 22.8144 23.7977 22.936 23.4297 22.9375H16.48C16.1109 22.9373 15.7519 22.8164 15.4579 22.5933C15.1639 22.3701 14.951 22.0569 14.8516 21.7014L12.385 12.8125H11.125C10.9758 12.8125 10.8327 12.7532 10.7273 12.6477C10.6218 12.5423 10.5625 12.3992 10.5625 12.25C10.5625 12.1008 10.6218 11.9577 10.7273 11.8523C10.8327 11.7468 10.9758 11.6875 11.125 11.6875H12.8125C12.9355 11.6875 13.0551 11.7278 13.153 11.8022C13.2509 11.8766 13.3217 11.981 13.3546 12.0995L14.0212 14.5H26.3125C26.3992 14.5 26.4848 14.52 26.5625 14.5585C26.6402 14.5971 26.7079 14.653 26.7604 14.722C26.8129 14.7911 26.8487 14.8713 26.865 14.9565C26.8814 15.0416 26.8778 15.1294 26.8546 15.213ZM25.5721 15.625H14.3341L15.9379 21.4005C15.9708 21.519 16.0416 21.6234 16.1395 21.6978C16.2374 21.7722 16.357 21.8125 16.48 21.8125H23.4297C23.5527 21.8125 23.6723 21.7722 23.7702 21.6978C23.8681 21.6234 23.9389 21.519 23.9718 21.4005L25.5721 15.625Z" fill="#989898"/>
            </svg>
          </button>
        </div>
        {/* <div className="lg:flex pl-8 lg:justify-end">
          
        </div> */}
      </nav>
      <Divider sx={{ borderColor: '#BDBDBD', borderWidth: 1 }}/>
    </header>
    
  );
};

export default Header;
