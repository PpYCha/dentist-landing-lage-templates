import React from "react";
import TextLabelSubHeader from "./TextLabelSubHeader";
import TextLabelHeader from "./TextLabelHeader";
import AddToCartButton from "./AddToCartButton";
import LoveIcon from "../assets/images/Love.png";

const SeeResultsCategory = () => {
  return (
    <div className="mt-10 px-5 w-[90%] mx-auto pb-10">
      <div className="text-center flex flex-col gap-5 mb-10 ">
        <TextLabelSubHeader text="SEE RESULTS IN JUST MINUTES" />
        <TextLabelHeader text="Whiter teeth, but faster, healthier and on a budget." />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-3 gap-y-4">
        <CardCategory
          icon={
            <svg
              width="55"
              height="55"
              viewBox="0 0 55 55"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M43.2717 11.3867C43.2717 7.64887 40.8257 1.71875 34.2622 1.71875C31.5655 1.71875 29.2971 2.99009 27.5 5.50312C25.703 2.99009 23.4344 1.71875 20.7378 1.71875C14.1742 1.71875 11.7283 7.64887 11.7283 11.3867C11.7283 17.8313 16.758 21.8625 23.6293 27.7382C24.6389 28.6014 25.683 29.4942 26.7961 30.4599C26.998 30.6351 27.249 30.7227 27.5 30.7227C27.7511 30.7227 28.002 30.6351 28.2039 30.4599C29.3171 29.4942 30.3611 28.6014 31.3707 27.7382C38.5644 21.5869 43.2717 17.6951 43.2717 11.3867ZM27.5 28.2279C26.6416 27.4871 25.8229 26.787 25.0255 26.1051C17.8367 19.9581 13.8768 16.572 13.8768 11.3867C13.8768 7.8694 16.1779 3.86719 20.7378 3.86719C23.1175 3.86719 25.0211 5.23359 26.5575 8.04439C26.7458 8.389 27.1073 8.60342 27.5 8.60342C27.8927 8.60342 28.2542 8.389 28.4425 8.04439C29.9789 5.23359 31.8825 3.86719 34.2622 3.86719C38.7585 3.86719 41.1233 7.81 41.1233 11.3867C41.1233 16.572 37.1634 19.9581 29.9745 26.1052C29.1771 26.787 28.3584 27.4871 27.5 28.2279Z"
                fill="white"
              />
              <path
                d="M7.71912 43.8404L12.8906 46.4257V52.207C12.8906 52.8002 13.3717 53.2812 13.9648 53.2812H25.3516C25.9447 53.2812 26.4258 52.8002 26.4258 52.207V38.1831C26.4258 34.8919 23.9569 32.1626 20.6911 31.8352L20.6032 31.8258C18.7129 31.6363 15.3658 30.3433 14.0442 29.0218L11.6317 26.6103C10.82 25.7987 9.74112 25.3516 8.59375 25.3516V16.7578C8.59375 14.3885 6.66617 12.4609 4.29688 12.4609C1.92758 12.4609 0 14.3885 0 16.7578V31.35C0 36.6367 2.98611 41.4733 7.71912 43.8404ZM2.14844 16.7578C2.14844 15.5732 3.11223 14.6094 4.29688 14.6094C5.48152 14.6094 6.44531 15.5732 6.44531 16.7578V25.9275C5.1352 26.685 4.29688 28.0974 4.29688 29.6484C4.29688 30.7958 4.74397 31.8746 5.55575 32.6863L11.0568 38.1885C11.4762 38.6081 12.1564 38.6081 12.576 38.1886C12.9955 37.7692 12.9956 37.089 12.5761 36.6694L7.07502 31.1672C6.66886 30.7612 6.44531 30.2219 6.44531 29.6484C6.44531 28.7392 7.02077 27.925 7.87746 27.6224L7.87789 27.6221C7.87811 27.622 7.87843 27.622 7.87864 27.6219C8.61964 27.359 9.49856 27.5156 10.1127 28.1298L12.5252 30.5413C15.0159 33.032 20.4575 33.9692 20.4684 33.9722C22.6398 34.1898 24.2772 36.0002 24.2772 38.1831V51.1328H15.039V45.7617C15.039 45.3548 14.809 44.9828 14.4451 44.8009L8.6799 41.9188C4.65126 39.9039 2.14844 35.8542 2.14844 31.35V16.7578Z"
                fill="white"
              />
              <path
                d="M49.3066 42.3242C49.8999 42.3242 50.3809 41.8433 50.3809 41.25C50.3809 40.6567 49.8999 40.1758 49.3066 40.1758C48.7134 40.1758 48.2324 40.6567 48.2324 41.25C48.2324 41.8433 48.7134 42.3242 49.3066 42.3242Z"
                fill="white"
              />
              <path
                d="M50.7031 12.4609C48.3338 12.4609 46.4062 14.3885 46.4062 16.7578V25.3516C45.2589 25.3516 44.18 25.7987 43.3685 26.6103L40.9556 29.0221C39.6342 30.3435 36.2871 31.6364 34.3884 31.8266L34.3173 31.8344C31.0431 32.1626 28.5742 34.892 28.5742 38.1831V52.207C28.5742 52.8002 29.0553 53.2812 29.6484 53.2812H41.0352C41.6283 53.2812 42.1094 52.8002 42.1094 52.207V46.4257L45.6253 44.6681C46.1559 44.4027 46.371 43.7576 46.1058 43.2269C45.8405 42.6963 45.1952 42.4809 44.6646 42.7464L40.5548 44.8009C40.1909 44.9828 39.9609 45.3548 39.9609 45.7617V51.1328H30.7227V38.1831C30.7227 36.0002 32.3601 34.1898 34.5399 33.9713L34.611 33.9636C36.9411 33.7299 40.7991 32.2168 42.4745 30.5414L44.8874 28.1297C45.5033 27.5136 46.3839 27.3604 47.1213 27.6219C47.1215 27.622 47.1218 27.622 47.122 27.6221C47.1221 27.6221 47.1223 27.6222 47.1224 27.6224C47.9792 27.925 48.5547 28.7392 48.5547 29.6484C48.5547 30.2219 48.3311 30.7612 47.9251 31.1674L42.424 36.6695C42.0045 37.089 42.0046 37.7692 42.4241 38.1887C42.8434 38.6082 43.5238 38.6082 43.9433 38.1886L49.4444 32.6865C50.256 31.8746 50.7031 30.7958 50.7031 29.6484C50.7031 28.0974 49.8648 26.685 48.5547 25.9275V16.7578C48.5547 15.5732 49.5185 14.6094 50.7031 14.6094C51.8878 14.6094 52.8516 15.5732 52.8516 16.7578V31.35C52.8516 33.3154 52.3556 35.2666 51.4172 36.9927C51.1337 37.514 51.3265 38.1661 51.8478 38.4495C52.3689 38.7329 53.0214 38.5403 53.3047 38.0189C54.4138 35.9788 55 33.6728 55 31.35V16.7578C55 14.3885 53.0724 12.4609 50.7031 12.4609Z"
                fill="white"
              />
            </svg>
          }
          title="Made with love"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        />
        <CardCategory
          icon={
            <svg
              width="68"
              height="68"
              viewBox="0 0 68 68"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.32812 61.903H12.75C13.4834 61.903 14.0781 61.3084 14.0781 60.5749V59.2769C18.3716 59.4732 21.2155 60.6104 24.2099 61.8081C27.5914 63.1608 31.088 64.5593 36.6562 64.5593C39.1023 64.5593 42.7326 63.7368 47.4466 62.1146C48.1403 61.8759 48.509 61.1202 48.2703 60.4267C48.0315 59.733 47.2755 59.3642 46.5823 59.603C42.147 61.1291 38.8074 61.903 36.6562 61.903C31.5995 61.903 28.4893 60.659 25.1964 59.3417C22.0922 58.1001 18.8898 56.8204 14.0781 56.6188V43.1249C14.9295 42.9045 15.7872 42.5143 16.6773 42.108C19.2953 40.9132 22.2626 39.5587 26.3297 41.8463L32.7411 45.4533C33.3359 45.7884 34.012 45.9655 34.6959 45.9655H43.2969C44.7615 45.9655 45.9531 47.1571 45.9531 48.6218C45.9531 49.7095 45.2725 50.7043 44.255 51.0985C43.9508 51.2176 43.6285 51.278 43.2969 51.278H29.7952C29.0618 51.278 28.467 51.8726 28.467 52.6062C28.467 53.3397 29.0618 53.9343 29.7952 53.9343H43.2969C43.9427 53.9343 44.5731 53.8181 45.1677 53.5924C45.1783 53.5888 45.1891 53.5863 45.1997 53.5823C45.1997 53.5823 61.7193 47.4757 61.7262 47.473C62.0326 47.354 62.356 47.2935 62.6875 47.2935C64.1522 47.2935 65.3438 48.4851 65.3438 49.9498C65.3438 50.9716 64.7468 51.9149 63.8258 52.3513C63.5986 52.4609 63.371 52.5712 62.9315 52.7805L62.5472 52.0121C62.2192 51.356 61.4209 51.0901 60.7654 51.4181C60.1093 51.7462 59.8435 52.544 60.1714 53.2001L60.5241 53.9057C59.6547 54.3047 58.6665 54.7508 57.5859 55.2263C56.9145 55.5218 56.6097 56.3055 56.9054 56.9769C57.2013 57.6493 57.9855 57.9524 58.656 57.6575C61.2687 56.5077 62.9976 55.6921 64.9602 54.7533C66.8068 53.8782 68 51.9928 68 49.9499C68 47.0206 65.6168 44.6374 62.6875 44.6374C62.0295 44.6374 61.3862 44.7569 60.7751 44.9929L48.5308 49.5191C48.5819 49.2254 48.6094 48.9255 48.6094 48.6218C48.6094 45.6925 46.2262 43.3093 43.2969 43.3093H34.6959C34.4678 43.3093 34.2426 43.2504 34.0442 43.1386L27.632 39.5313C22.3881 36.5818 18.4499 38.3793 15.5745 39.6915C14.444 40.2074 13.4679 40.653 12.75 40.653H1.32812C0.594734 40.653 0 41.2476 0 41.9812V60.5749C0 61.3084 0.594734 61.903 1.32812 61.903ZM2.65625 43.3093H11.4219V59.2468H2.65625V43.3093Z"
                fill="#024F6C"
              />
              <path
                d="M43.9105 37.7783C44.1322 37.924 44.3863 37.9969 44.6406 37.9969C44.8948 37.9969 45.1491 37.924 45.3705 37.7783C64.8524 24.9604 65.4943 15.4762 64.1428 10.9636C62.6638 6.02456 57.888 3.44043 53.9348 3.44043C49.2653 3.44043 46.1791 6.10903 44.6407 7.88779C43.1025 6.10903 40.0166 3.44043 35.3478 3.44043C31.3991 3.44043 26.6263 6.02895 25.1447 10.9765C23.794 15.486 24.4361 24.9646 43.9105 37.7783ZM27.6891 11.7386C28.7865 8.07413 32.4541 6.09681 35.3477 6.09681C40.6447 6.09681 43.3757 10.5782 43.496 10.7802C43.7347 11.1857 44.17 11.4345 44.6406 11.4345C45.1125 11.4345 45.5488 11.1842 45.787 10.777C45.8144 10.7301 48.5866 6.09681 53.9348 6.09681C56.8327 6.09681 60.5033 8.06961 61.5982 11.7257C62.5035 14.7488 62.625 23.0224 44.6406 35.0748C26.6635 23.0267 26.7845 14.7592 27.6891 11.7386Z"
                fill="#024F6C"
              />
              <path
                d="M39.3125 22.0596H43.2969V26.0439C43.2969 26.7775 43.8916 27.3721 44.625 27.3721C45.3584 27.3721 45.9531 26.7775 45.9531 26.0439V22.0596H49.9375C50.6709 22.0596 51.2656 21.465 51.2656 20.7314C51.2656 19.9979 50.6709 19.4033 49.9375 19.4033H45.9531V15.4189C45.9531 14.6854 45.3584 14.0908 44.625 14.0908C43.8916 14.0908 43.2969 14.6854 43.2969 15.4189V19.4033H39.3125C38.5791 19.4033 37.9844 19.9979 37.9844 20.7314C37.9844 21.465 38.5791 22.0596 39.3125 22.0596Z"
                fill="#024F6C"
              />
              <path
                d="M52.5938 60.0439C53.3273 60.0439 53.9219 59.4493 53.9219 58.7158C53.9219 57.9823 53.3273 57.3877 52.5938 57.3877C51.8602 57.3877 51.2656 57.9823 51.2656 58.7158C51.2656 59.4493 51.8602 60.0439 52.5938 60.0439Z"
                fill="#024F6C"
              />
            </svg>
          }
          title="Focused on health"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        />
        <CardCategory
          icon={
            <svg
              width="68"
              height="68"
              viewBox="0 0 68 68"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M63.975 12.4337C62.1638 6.7912 58.3027 2.6501 53.3816 1.07202C44.3089 -1.83737 36.8484 1.90343 34.0003 3.69427C31.1517 1.9033 23.6911 -1.83737 14.619 1.07202C9.69639 2.6505 5.83487 6.79319 4.02424 12.4379C1.64331 19.8605 3.18088 28.269 8.13771 34.9303C10.2927 37.8268 11.7498 41.0199 12.4683 44.4211C12.7875 45.9322 13.0649 47.5948 13.2928 49.3628C13.9772 54.6722 14.9851 58.9337 16.2888 62.0286C17.8504 65.736 19.865 67.7382 22.2767 67.9794C22.414 67.9931 22.5496 67.9998 22.6844 67.9998C25.058 67.9997 27.0418 65.8694 28.5851 61.6588C29.7261 58.5461 30.6255 54.3751 31.1179 49.914C31.393 47.4195 32.0368 45.3997 32.9792 44.0729C33.3167 43.5979 33.8058 43.5467 34.0004 43.5467C34.195 43.5467 34.6841 43.5979 35.0216 44.073C35.9641 45.3997 36.6078 47.4195 36.883 49.9141C37.3753 54.3751 38.2747 58.5462 39.4157 61.659C40.959 65.8697 42.9426 68.0001 45.3164 68C45.4511 68 45.5871 67.9931 45.7242 67.9795C48.1358 67.7383 50.1504 65.7362 51.712 62.0287C53.0156 58.9338 54.0236 54.6724 54.708 49.3629C54.9359 47.5947 55.2134 45.9322 55.5324 44.422C56.2504 41.0235 57.7096 37.8272 59.8695 34.9219C64.822 28.2606 66.3567 19.8537 63.975 12.4337ZM56.68 32.5507C54.1756 35.9195 52.4811 39.6372 51.6438 43.6006C51.3028 45.214 51.0076 46.9819 50.7661 48.8549C49.3731 59.6623 46.7772 63.834 45.3536 64.0218C45.0547 63.916 44.032 62.9329 42.9326 59.6805C42.0008 56.9243 41.2554 53.3011 40.8335 49.4781C40.4793 46.2676 39.614 43.6747 38.2617 41.7712C37.2835 40.3942 35.6905 39.5721 34.0003 39.5721C32.3101 39.5721 30.717 40.3941 29.7387 41.7714C28.3864 43.675 27.5213 46.2679 27.1669 49.4782C26.745 53.3012 25.9997 56.9245 25.068 59.6806C23.9686 62.933 22.9458 63.9161 22.6468 64.022C21.2233 63.8342 18.6274 59.6624 17.2343 48.855C16.9928 46.9824 16.6976 45.2143 16.3565 43.5999C15.5186 39.6333 13.8261 35.9184 11.326 32.5581C7.13351 26.9236 5.8188 19.8558 7.80873 13.652C9.22252 9.24438 12.1471 6.03868 15.8325 4.85692C19.7231 3.60914 23.7349 3.6891 27.7565 5.09425C30.8282 6.16764 32.7557 7.65235 32.77 7.66351L33.9974 8.62308L35.2256 7.66723C35.2447 7.65235 37.1722 6.16764 40.2439 5.09425C44.2655 3.68896 48.2772 3.60914 52.168 4.85692H52.1681C55.8523 6.03828 58.7766 9.24278 60.1908 13.6486C62.1812 19.85 60.8689 26.9163 56.68 32.5507Z"
                fill="#024F6C"
              />
            </svg>
          }
          title="Like brand new teeth"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        />
        <CardCategory
          icon={
            <svg
              width="55"
              height="55"
              viewBox="0 0 55 55"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M43.2717 11.3867C43.2717 7.64887 40.8257 1.71875 34.2622 1.71875C31.5655 1.71875 29.2971 2.99009 27.5 5.50312C25.703 2.99009 23.4344 1.71875 20.7378 1.71875C14.1742 1.71875 11.7283 7.64887 11.7283 11.3867C11.7283 17.8313 16.758 21.8625 23.6293 27.7382C24.6389 28.6014 25.683 29.4942 26.7961 30.4599C26.998 30.6351 27.249 30.7227 27.5 30.7227C27.7511 30.7227 28.002 30.6351 28.2039 30.4599C29.3171 29.4942 30.3611 28.6014 31.3707 27.7382C38.5644 21.5869 43.2717 17.6951 43.2717 11.3867ZM27.5 28.2279C26.6416 27.4871 25.8229 26.787 25.0255 26.1051C17.8367 19.9581 13.8768 16.572 13.8768 11.3867C13.8768 7.8694 16.1779 3.86719 20.7378 3.86719C23.1175 3.86719 25.0211 5.23359 26.5575 8.04439C26.7458 8.389 27.1073 8.60342 27.5 8.60342C27.8927 8.60342 28.2542 8.389 28.4425 8.04439C29.9789 5.23359 31.8825 3.86719 34.2622 3.86719C38.7585 3.86719 41.1233 7.81 41.1233 11.3867C41.1233 16.572 37.1634 19.9581 29.9745 26.1052C29.1771 26.787 28.3584 27.4871 27.5 28.2279Z"
                fill="white"
              />
              <path
                d="M7.71912 43.8404L12.8906 46.4257V52.207C12.8906 52.8002 13.3717 53.2812 13.9648 53.2812H25.3516C25.9447 53.2812 26.4258 52.8002 26.4258 52.207V38.1831C26.4258 34.8919 23.9569 32.1626 20.6911 31.8352L20.6032 31.8258C18.7129 31.6363 15.3658 30.3433 14.0442 29.0218L11.6317 26.6103C10.82 25.7987 9.74112 25.3516 8.59375 25.3516V16.7578C8.59375 14.3885 6.66617 12.4609 4.29688 12.4609C1.92758 12.4609 0 14.3885 0 16.7578V31.35C0 36.6367 2.98611 41.4733 7.71912 43.8404ZM2.14844 16.7578C2.14844 15.5732 3.11223 14.6094 4.29688 14.6094C5.48152 14.6094 6.44531 15.5732 6.44531 16.7578V25.9275C5.1352 26.685 4.29688 28.0974 4.29688 29.6484C4.29688 30.7958 4.74397 31.8746 5.55575 32.6863L11.0568 38.1885C11.4762 38.6081 12.1564 38.6081 12.576 38.1886C12.9955 37.7692 12.9956 37.089 12.5761 36.6694L7.07502 31.1672C6.66886 30.7612 6.44531 30.2219 6.44531 29.6484C6.44531 28.7392 7.02077 27.925 7.87746 27.6224L7.87789 27.6221C7.87811 27.622 7.87843 27.622 7.87864 27.6219C8.61964 27.359 9.49856 27.5156 10.1127 28.1298L12.5252 30.5413C15.0159 33.032 20.4575 33.9692 20.4684 33.9722C22.6398 34.1898 24.2772 36.0002 24.2772 38.1831V51.1328H15.039V45.7617C15.039 45.3548 14.809 44.9828 14.4451 44.8009L8.6799 41.9188C4.65126 39.9039 2.14844 35.8542 2.14844 31.35V16.7578Z"
                fill="white"
              />
              <path
                d="M49.3066 42.3242C49.8999 42.3242 50.3809 41.8433 50.3809 41.25C50.3809 40.6567 49.8999 40.1758 49.3066 40.1758C48.7134 40.1758 48.2324 40.6567 48.2324 41.25C48.2324 41.8433 48.7134 42.3242 49.3066 42.3242Z"
                fill="white"
              />
              <path
                d="M50.7031 12.4609C48.3338 12.4609 46.4062 14.3885 46.4062 16.7578V25.3516C45.2589 25.3516 44.18 25.7987 43.3685 26.6103L40.9556 29.0221C39.6342 30.3435 36.2871 31.6364 34.3884 31.8266L34.3173 31.8344C31.0431 32.1626 28.5742 34.892 28.5742 38.1831V52.207C28.5742 52.8002 29.0553 53.2812 29.6484 53.2812H41.0352C41.6283 53.2812 42.1094 52.8002 42.1094 52.207V46.4257L45.6253 44.6681C46.1559 44.4027 46.371 43.7576 46.1058 43.2269C45.8405 42.6963 45.1952 42.4809 44.6646 42.7464L40.5548 44.8009C40.1909 44.9828 39.9609 45.3548 39.9609 45.7617V51.1328H30.7227V38.1831C30.7227 36.0002 32.3601 34.1898 34.5399 33.9713L34.611 33.9636C36.9411 33.7299 40.7991 32.2168 42.4745 30.5414L44.8874 28.1297C45.5033 27.5136 46.3839 27.3604 47.1213 27.6219C47.1215 27.622 47.1218 27.622 47.122 27.6221C47.1221 27.6221 47.1223 27.6222 47.1224 27.6224C47.9792 27.925 48.5547 28.7392 48.5547 29.6484C48.5547 30.2219 48.3311 30.7612 47.9251 31.1674L42.424 36.6695C42.0045 37.089 42.0046 37.7692 42.4241 38.1887C42.8434 38.6082 43.5238 38.6082 43.9433 38.1886L49.4444 32.6865C50.256 31.8746 50.7031 30.7958 50.7031 29.6484C50.7031 28.0974 49.8648 26.685 48.5547 25.9275V16.7578C48.5547 15.5732 49.5185 14.6094 50.7031 14.6094C51.8878 14.6094 52.8516 15.5732 52.8516 16.7578V31.35C52.8516 33.3154 52.3556 35.2666 51.4172 36.9927C51.1337 37.514 51.3265 38.1661 51.8478 38.4495C52.3689 38.7329 53.0214 38.5403 53.3047 38.0189C54.4138 35.9788 55 33.6728 55 31.35V16.7578C55 14.3885 53.0724 12.4609 50.7031 12.4609Z"
                fill="white"
              />
            </svg>
          }
          title="Made with love"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        />
        <CardCategory
          icon={
            <svg
              width="68"
              height="68"
              viewBox="0 0 68 68"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.32812 61.903H12.75C13.4834 61.903 14.0781 61.3084 14.0781 60.5749V59.2769C18.3716 59.4732 21.2155 60.6104 24.2099 61.8081C27.5914 63.1608 31.088 64.5593 36.6562 64.5593C39.1023 64.5593 42.7326 63.7368 47.4466 62.1146C48.1403 61.8759 48.509 61.1202 48.2703 60.4267C48.0315 59.733 47.2755 59.3642 46.5823 59.603C42.147 61.1291 38.8074 61.903 36.6562 61.903C31.5995 61.903 28.4893 60.659 25.1964 59.3417C22.0922 58.1001 18.8898 56.8204 14.0781 56.6188V43.1249C14.9295 42.9045 15.7872 42.5143 16.6773 42.108C19.2953 40.9132 22.2626 39.5587 26.3297 41.8463L32.7411 45.4533C33.3359 45.7884 34.012 45.9655 34.6959 45.9655H43.2969C44.7615 45.9655 45.9531 47.1571 45.9531 48.6218C45.9531 49.7095 45.2725 50.7043 44.255 51.0985C43.9508 51.2176 43.6285 51.278 43.2969 51.278H29.7952C29.0618 51.278 28.467 51.8726 28.467 52.6062C28.467 53.3397 29.0618 53.9343 29.7952 53.9343H43.2969C43.9427 53.9343 44.5731 53.8181 45.1677 53.5924C45.1783 53.5888 45.1891 53.5863 45.1997 53.5823C45.1997 53.5823 61.7193 47.4757 61.7262 47.473C62.0326 47.354 62.356 47.2935 62.6875 47.2935C64.1522 47.2935 65.3438 48.4851 65.3438 49.9498C65.3438 50.9716 64.7468 51.9149 63.8258 52.3513C63.5986 52.4609 63.371 52.5712 62.9315 52.7805L62.5472 52.0121C62.2192 51.356 61.4209 51.0901 60.7654 51.4181C60.1093 51.7462 59.8435 52.544 60.1714 53.2001L60.5241 53.9057C59.6547 54.3047 58.6665 54.7508 57.5859 55.2263C56.9145 55.5218 56.6097 56.3055 56.9054 56.9769C57.2013 57.6493 57.9855 57.9524 58.656 57.6575C61.2687 56.5077 62.9976 55.6921 64.9602 54.7533C66.8068 53.8782 68 51.9928 68 49.9499C68 47.0206 65.6168 44.6374 62.6875 44.6374C62.0295 44.6374 61.3862 44.7569 60.7751 44.9929L48.5308 49.5191C48.5819 49.2254 48.6094 48.9255 48.6094 48.6218C48.6094 45.6925 46.2262 43.3093 43.2969 43.3093H34.6959C34.4678 43.3093 34.2426 43.2504 34.0442 43.1386L27.632 39.5313C22.3881 36.5818 18.4499 38.3793 15.5745 39.6915C14.444 40.2074 13.4679 40.653 12.75 40.653H1.32812C0.594734 40.653 0 41.2476 0 41.9812V60.5749C0 61.3084 0.594734 61.903 1.32812 61.903ZM2.65625 43.3093H11.4219V59.2468H2.65625V43.3093Z"
                fill="#024F6C"
              />
              <path
                d="M43.9105 37.7783C44.1322 37.924 44.3863 37.9969 44.6406 37.9969C44.8948 37.9969 45.1491 37.924 45.3705 37.7783C64.8524 24.9604 65.4943 15.4762 64.1428 10.9636C62.6638 6.02456 57.888 3.44043 53.9348 3.44043C49.2653 3.44043 46.1791 6.10903 44.6407 7.88779C43.1025 6.10903 40.0166 3.44043 35.3478 3.44043C31.3991 3.44043 26.6263 6.02895 25.1447 10.9765C23.794 15.486 24.4361 24.9646 43.9105 37.7783ZM27.6891 11.7386C28.7865 8.07413 32.4541 6.09681 35.3477 6.09681C40.6447 6.09681 43.3757 10.5782 43.496 10.7802C43.7347 11.1857 44.17 11.4345 44.6406 11.4345C45.1125 11.4345 45.5488 11.1842 45.787 10.777C45.8144 10.7301 48.5866 6.09681 53.9348 6.09681C56.8327 6.09681 60.5033 8.06961 61.5982 11.7257C62.5035 14.7488 62.625 23.0224 44.6406 35.0748C26.6635 23.0267 26.7845 14.7592 27.6891 11.7386Z"
                fill="#024F6C"
              />
              <path
                d="M39.3125 22.0596H43.2969V26.0439C43.2969 26.7775 43.8916 27.3721 44.625 27.3721C45.3584 27.3721 45.9531 26.7775 45.9531 26.0439V22.0596H49.9375C50.6709 22.0596 51.2656 21.465 51.2656 20.7314C51.2656 19.9979 50.6709 19.4033 49.9375 19.4033H45.9531V15.4189C45.9531 14.6854 45.3584 14.0908 44.625 14.0908C43.8916 14.0908 43.2969 14.6854 43.2969 15.4189V19.4033H39.3125C38.5791 19.4033 37.9844 19.9979 37.9844 20.7314C37.9844 21.465 38.5791 22.0596 39.3125 22.0596Z"
                fill="#024F6C"
              />
              <path
                d="M52.5938 60.0439C53.3273 60.0439 53.9219 59.4493 53.9219 58.7158C53.9219 57.9823 53.3273 57.3877 52.5938 57.3877C51.8602 57.3877 51.2656 57.9823 51.2656 58.7158C51.2656 59.4493 51.8602 60.0439 52.5938 60.0439Z"
                fill="#024F6C"
              />
            </svg>
          }
          title="Focused on health"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        />
        <CardCategory
          icon={
            <svg
              width="68"
              height="68"
              viewBox="0 0 68 68"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M63.975 12.4337C62.1638 6.7912 58.3027 2.6501 53.3816 1.07202C44.3089 -1.83737 36.8484 1.90343 34.0003 3.69427C31.1517 1.9033 23.6911 -1.83737 14.619 1.07202C9.69639 2.6505 5.83487 6.79319 4.02424 12.4379C1.64331 19.8605 3.18088 28.269 8.13771 34.9303C10.2927 37.8268 11.7498 41.0199 12.4683 44.4211C12.7875 45.9322 13.0649 47.5948 13.2928 49.3628C13.9772 54.6722 14.9851 58.9337 16.2888 62.0286C17.8504 65.736 19.865 67.7382 22.2767 67.9794C22.414 67.9931 22.5496 67.9998 22.6844 67.9998C25.058 67.9997 27.0418 65.8694 28.5851 61.6588C29.7261 58.5461 30.6255 54.3751 31.1179 49.914C31.393 47.4195 32.0368 45.3997 32.9792 44.0729C33.3167 43.5979 33.8058 43.5467 34.0004 43.5467C34.195 43.5467 34.6841 43.5979 35.0216 44.073C35.9641 45.3997 36.6078 47.4195 36.883 49.9141C37.3753 54.3751 38.2747 58.5462 39.4157 61.659C40.959 65.8697 42.9426 68.0001 45.3164 68C45.4511 68 45.5871 67.9931 45.7242 67.9795C48.1358 67.7383 50.1504 65.7362 51.712 62.0287C53.0156 58.9338 54.0236 54.6724 54.708 49.3629C54.9359 47.5947 55.2134 45.9322 55.5324 44.422C56.2504 41.0235 57.7096 37.8272 59.8695 34.9219C64.822 28.2606 66.3567 19.8537 63.975 12.4337ZM56.68 32.5507C54.1756 35.9195 52.4811 39.6372 51.6438 43.6006C51.3028 45.214 51.0076 46.9819 50.7661 48.8549C49.3731 59.6623 46.7772 63.834 45.3536 64.0218C45.0547 63.916 44.032 62.9329 42.9326 59.6805C42.0008 56.9243 41.2554 53.3011 40.8335 49.4781C40.4793 46.2676 39.614 43.6747 38.2617 41.7712C37.2835 40.3942 35.6905 39.5721 34.0003 39.5721C32.3101 39.5721 30.717 40.3941 29.7387 41.7714C28.3864 43.675 27.5213 46.2679 27.1669 49.4782C26.745 53.3012 25.9997 56.9245 25.068 59.6806C23.9686 62.933 22.9458 63.9161 22.6468 64.022C21.2233 63.8342 18.6274 59.6624 17.2343 48.855C16.9928 46.9824 16.6976 45.2143 16.3565 43.5999C15.5186 39.6333 13.8261 35.9184 11.326 32.5581C7.13351 26.9236 5.8188 19.8558 7.80873 13.652C9.22252 9.24438 12.1471 6.03868 15.8325 4.85692C19.7231 3.60914 23.7349 3.6891 27.7565 5.09425C30.8282 6.16764 32.7557 7.65235 32.77 7.66351L33.9974 8.62308L35.2256 7.66723C35.2447 7.65235 37.1722 6.16764 40.2439 5.09425C44.2655 3.68896 48.2772 3.60914 52.168 4.85692H52.1681C55.8523 6.03828 58.7766 9.24278 60.1908 13.6486C62.1812 19.85 60.8689 26.9163 56.68 32.5507Z"
                fill="#024F6C"
              />
            </svg>
          }
          title="Like brand new teeth"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        />
      </div>
      <div className=" flex justify-center items-center text-center">
        <AddToCartButton />
      </div>
    </div>
  );
};

const CardCategory = ({ icon, title, text }) => {
  return (
    <div className=" border p-5 text-center flex flex-col justify-center items-center gap-4">
      <div className="fill-[#024F6C]">{icon}</div>
      <p>{title}</p>
      <p>{text}</p>
    </div>
  );
};

export default SeeResultsCategory;
