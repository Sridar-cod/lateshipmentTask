import React from "react";

const About = () => {
  return (
    <>
      <div className="container mt-4 mb-3">
        <div className="about row">
          <div className="about__left col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
            <h2>About Branch</h2>
            <p>
              Branch Furniture designs and sells ergonomic office furniture,
              specializing in chairs and standing desks aimed at improving
              posture and well-being for long-hour workers.{" "}
            </p>
            <p>
              They operate primarily in the US and Canada. Since its launch in
              2018, this brand has gotten a ton of praise, from both customers
              and publications.
            </p>
            <p>
              In fact, the Branch standing desk was named one of CNN Underscored
              top picks for 2022.
            </p>
          </div>
          <div className="about__right d-flex gap-5 col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 ">
            <div className="about__right__inner">
            <div className="about__right__box ">
              <p className="about__right__box__p">Company Specifics</p>
              <div className="">
                <p className="about__p__b m-0">Shipping Volume</p>
                <p className="about__p__l mt-1">20,000 shipments per month</p>
              </div>

              <div className="">
                <p className="about__p__b m-0">Industry</p>
                <p className="about__p__l m-1">Furniture</p>
              </div>
            </div>
            <div className="about__right__box">
              <p className="about__right__box__p">Carriers In Use</p>
              <div className="d-flex justify-content-around align-items-center mt-4">
                <svg
                  width="51"
                  height="61"
                  viewBox="0 0 51 61"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_6561_772)">
                    <path
                      d="M25.8409 58.6663C26.3455 58.414 39.4661 52.7369 43.6293 49.3306C47.9187 45.7981 50.1896 40.7517 50.1896 34.6961V6.31033L49.8111 6.18417C39.3399 0.507011 26.3455 0.885487 25.7147 0.885487C25.2101 0.885487 12.2157 0.507011 1.74451 6.18417L1.49219 6.31033V34.8223C1.49219 40.8779 3.76305 45.9243 8.05246 49.4567C12.2157 52.863 25.3362 58.5402 25.8409 58.6663Z"
                      fill="#341B14"
                    />
                    <path
                      d="M25.8299 59.2986C25.8299 59.2986 11.9524 53.243 7.66299 49.8367C3.12127 46.0519 0.976562 40.8794 0.976562 34.9499V5.42868C11.9524 -0.500795 25.8299 0.00384064 25.8299 0.00384064C25.8299 0.00384064 39.7074 -0.500795 50.6832 5.42868V34.8237C50.6832 40.7532 48.5385 45.9257 43.9968 49.7105C39.7074 53.243 25.8299 59.2986 25.8299 59.2986ZM2.99511 34.9499C2.99511 40.5009 5.01365 45.0426 8.92458 48.1966C12.457 51.0983 22.9282 55.7661 25.8299 57.0277C28.7316 55.7661 39.3289 50.9721 42.7352 48.1966C46.6461 45.0426 48.6647 40.3747 48.6647 34.9499V5.93332C34.0302 4.54557 16.6203 5.30252 2.99511 17.9184V34.9499Z"
                      fill="#FFB406"
                    />
                    <path
                      d="M39.8344 30.789C41.7267 31.9244 42.4837 32.6813 42.6099 34.0691C42.6099 35.583 41.6006 36.4661 39.9605 36.4661C38.5728 36.4661 36.9327 35.7092 35.7973 34.6999V38.737C37.185 39.4939 38.8251 40.1247 40.5913 40.1247C44.8807 40.1247 46.8993 37.0969 46.8993 34.3214C47.0254 31.7982 46.2685 29.7797 42.6099 27.635C40.9698 26.6257 39.7082 25.9949 39.7082 24.481C39.7082 22.9671 41.0959 22.3363 42.2314 22.3363C43.7453 22.3363 45.2592 23.2194 46.1423 24.1025V20.3178C45.3853 19.687 43.7453 18.8038 41.3483 18.93C38.4466 19.0562 35.4188 21.0747 35.4188 24.6072C35.5449 27.0042 36.3019 28.7704 39.8344 30.789ZM24.9476 39.8724C25.3261 39.9986 25.9569 40.1247 26.9661 40.1247C31.8863 40.1247 34.6618 35.7092 34.6618 29.4012C34.6618 22.9671 31.7602 19.0562 26.5877 19.0562C24.1906 19.0562 22.2983 19.5608 20.6582 20.5701V49.082H24.9476V39.8724ZM24.9476 22.7148C25.3261 22.5886 25.9569 22.3363 26.4615 22.3363C28.9847 22.3363 29.994 24.3548 29.994 29.275C29.994 34.0691 28.7324 36.3399 26.2092 36.3399C25.5784 36.3399 25.0737 36.2138 24.8214 36.0876V22.7148H24.9476ZM11.7009 40.1247C14.3502 40.1247 16.6211 39.4939 18.2612 38.3585V19.3085H13.8456V35.8353C13.341 36.2138 12.7102 36.3399 11.8271 36.3399C9.80851 36.3399 9.55619 34.4476 9.55619 33.3121V19.3085H5.14062V33.0598C5.14062 37.7277 7.41149 40.1247 11.7009 40.1247ZM41.0959 57.1562V60.0578H41.6006V58.9224H41.7267L42.4837 60.0578H43.1145C43.1145 60.0578 42.3575 58.9224 42.2314 58.7963C42.6099 58.6701 42.8622 58.4178 42.8622 58.0393C42.8622 57.6608 42.6099 57.1562 41.8529 57.1562H41.0959ZM41.8529 57.5347C42.2314 57.5347 42.3575 57.787 42.3575 57.9131C42.3575 58.1655 42.2314 58.4178 41.7267 58.4178H41.6006V57.5347H41.8529Z"
                      fill="#FFB406"
                    />
                    <path
                      d="M43.8755 58.5447C43.8755 59.554 42.9924 60.4371 41.9831 60.4371C40.9738 60.4371 40.0907 59.554 40.0907 58.5447C40.0907 57.5355 40.9738 56.6523 41.9831 56.6523C43.1185 56.6523 43.8755 57.5355 43.8755 58.5447ZM41.9831 56.1477C40.7215 56.1477 39.5861 57.157 39.5861 58.5447C39.5861 59.8063 40.5953 60.9417 41.9831 60.9417C43.2447 60.9417 44.3801 59.9325 44.3801 58.5447C44.3801 57.2831 43.2447 56.1477 41.9831 56.1477Z"
                      fill="#FFB406"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_6561_772">
                      <rect
                        width="49.7067"
                        height="60.9449"
                        fill="white"
                        transform="translate(0.976562)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <svg
                  width="141"
                  height="40"
                  viewBox="0 0 141 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_6561_777)">
                    <path
                      d="M139.266 34.5106C139.266 32.3664 137.746 30.7963 135.651 30.7963C133.56 30.7963 132.038 32.3664 132.038 34.5106C132.038 36.6514 133.56 38.2189 135.651 38.2189C137.746 38.2189 139.266 36.6488 139.266 34.5106ZM134.701 34.7011V37.1272H133.918V31.7775H135.865C137.007 31.7775 137.53 32.2759 137.53 33.2476C137.53 33.8461 137.126 34.3201 136.605 34.3889V34.4115C137.057 34.4837 137.223 34.8873 137.316 35.6258C137.388 36.1042 137.482 36.9341 137.653 37.1289H136.726C136.51 36.6262 136.532 35.9146 136.365 35.3187C136.228 34.8655 135.986 34.7003 135.467 34.7003H134.706V34.7029L134.701 34.7011ZM135.673 34.0096C136.434 34.0096 136.652 33.6042 136.652 33.2467C136.652 32.824 136.434 32.4899 135.673 32.4899H134.701V34.0113H135.673V34.0096ZM131.176 34.5106C131.176 31.8689 133.273 30.083 135.648 30.083C138.029 30.083 140.124 31.8689 140.124 34.5106C140.124 37.1472 138.03 38.9348 135.648 38.9348C133.273 38.9348 131.176 37.1472 131.176 34.5106Z"
                      fill="#FF5A00"
                    />
                    <path
                      d="M115.672 38.1651L110.517 32.383L105.406 38.1651H94.6529L105.163 26.3575L94.6529 14.5464H105.742L110.95 20.284L115.961 14.5464H126.662L116.205 26.3079L126.808 38.1651H115.672ZM74.0039 38.1651V0.95813H94.6529V9.25147H82.7504V14.5464H94.6529V22.5265H82.7504V29.8508H94.6529V38.1651H74.0039Z"
                      fill="#FF5A00"
                    />
                    <path
                      d="M65.2866 0.960205V16.1873H65.19C63.2615 13.9708 60.8511 13.1984 58.0562 13.1984C52.329 13.1984 48.0144 17.0945 46.5 22.2416C44.7724 16.5691 40.3178 13.0923 33.7138 13.0923C28.3493 13.0923 24.1147 15.4992 21.9027 19.4223V14.5476H10.8162V9.25441H22.9161V0.961947H0.933594V38.1671H10.8162V22.5286H20.6666C20.3632 23.7312 20.2115 24.967 20.2151 26.2073C20.2151 33.9648 26.1433 39.4163 33.712 39.4163C40.0742 39.4163 44.2705 36.4265 46.4878 30.9838H38.0179C36.8731 32.6217 36.0033 33.1054 33.7129 33.1054C31.058 33.1054 28.7668 30.788 28.7668 28.0445H46.0129C46.7609 34.2075 51.5626 39.5215 58.1527 39.5215C60.9955 39.5215 63.5981 38.1236 65.1891 35.7619H65.2848V38.1724H73.9983V0.961947H65.2866V0.960205ZM29.0417 22.64C29.5923 20.2757 31.4251 18.7308 33.7129 18.7308C36.232 18.7308 37.9718 20.2278 38.4285 22.64H29.0417ZM59.9986 32.5052C56.7879 32.5052 54.7924 29.5137 54.7924 26.3891C54.7924 23.0488 56.5287 19.8399 59.9986 19.8399C63.599 19.8399 65.0334 23.0505 65.0334 26.3891C65.0334 29.5537 63.5146 32.5052 59.9986 32.5052Z"
                      fill="#29007C"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_6561_777">
                      <rect
                        width="139.182"
                        height="38.5812"
                        fill="white"
                        transform="translate(0.933594 0.954346)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              </div>
            </div>
            <div className="about__right__inner">
            <div className="about__right__box ">
              <p className="about__right__box__p">Integrations</p>
              <div className="">
                <div className="d-flex justify-content-around align-items-center mb-4">
                  <svg
                    width="106"
                    height="38"
                    viewBox="0 0 106 38"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M29.48 8.04226C29.4676 7.96478 29.4297 7.89363 29.3724 7.84C29.3151 7.78637 29.2416 7.75331 29.1635 7.746C29.0371 7.72578 26.2616 7.53367 26.2616 7.53367L24.1454 5.41742C23.9553 5.20508 23.5326 5.26777 23.3729 5.31226C23.3527 5.31226 22.9502 5.43865 22.294 5.65199C21.655 3.8057 20.5246 2.11108 18.5347 2.11108H18.3648C17.7936 1.37297 17.0959 1.03223 16.5044 1.03223C11.8695 1.05245 9.65918 6.83398 8.96151 9.78845L5.72191 10.7824C4.72799 11.0988 4.69058 11.1221 4.55914 12.0695L1.82812 33.134L22.3011 36.9661L33.397 34.5738C33.397 34.5536 29.5012 8.24448 29.481 8.04428L29.48 8.04226ZM21.1585 6.0079C20.6429 6.17777 20.0463 6.34764 19.4235 6.53874V6.15755C19.4437 5.20508 19.2991 4.25666 19.0008 3.3507C20.0382 3.51046 20.7359 4.67526 21.1585 6.0079ZM17.7511 3.59539C18.0898 4.59336 18.2567 5.64492 18.2142 6.6995V6.88959L14.6349 8.00182C15.3356 5.38607 16.6267 4.09286 17.7491 3.60652L17.7511 3.59539ZM16.376 2.30825C16.5883 2.3133 16.7936 2.37903 16.9685 2.49834C15.4751 3.19398 13.8967 4.94927 13.2193 8.46389L10.3882 9.33142C11.187 6.66411 13.0504 2.30218 16.374 2.30218L16.376 2.30825Z"
                      fill="#95BF47"
                    />
                    <path
                      d="M29.1641 7.74526C29.0377 7.72504 26.2622 7.53293 26.2622 7.53293L24.1459 5.41667C24.0681 5.33578 23.9619 5.29129 23.8497 5.29028L22.3047 36.9623L33.4006 34.57L29.4816 8.06073C29.4553 7.89895 29.3279 7.76953 29.1651 7.74425L29.1641 7.74526Z"
                      fill="#5E8E3E"
                    />
                    <path
                      d="M18.5348 13.8848L17.1577 17.9494C16.3255 17.545 15.4145 17.3296 14.4903 17.3124C12.3296 17.3124 12.2255 18.6673 12.2255 19.007C12.2255 20.8574 17.0737 21.5692 17.0737 25.9311C17.0737 29.3608 14.8928 31.563 11.9706 31.563C8.45603 31.563 6.65625 29.3821 6.65625 29.3821L7.59052 26.2678C7.59052 26.2678 9.43074 27.8553 11 27.8553C11.1875 27.8627 11.3747 27.8319 11.55 27.7648C11.7253 27.6977 11.8851 27.5956 12.0197 27.4648C12.1544 27.3341 12.2611 27.1773 12.3333 27.004C12.4055 26.8307 12.4417 26.6446 12.4398 26.4569C12.4398 24.0201 8.45906 23.915 8.45906 19.9352C8.45906 16.5885 10.8716 13.3276 15.7209 13.3276C17.6268 13.3559 18.5378 13.8837 18.5378 13.8837L18.5348 13.8848Z"
                      fill="white"
                    />
                    <path
                      d="M43.035 19.9392C42.2433 19.5145 41.8338 19.1475 41.8338 18.6449C41.8338 18.0079 42.3899 17.5964 43.2929 17.5964C43.9631 17.6109 44.6241 17.7555 45.2392 18.0221L45.9693 15.8037C45.9693 15.8037 45.2999 15.286 43.3383 15.286C40.6023 15.286 38.7014 16.8532 38.7014 19.0554C38.7014 20.3011 39.5831 21.2597 40.7681 21.9432C41.7256 22.4993 42.0623 22.8673 42.0623 23.4477C42.0623 24.0281 41.5912 24.5124 40.6943 24.5124C39.3728 24.5124 38.1261 23.8289 38.1261 23.8289L37.3516 26.0473C37.3516 26.0473 38.5073 26.8218 40.4375 26.8218C43.2484 26.8218 45.2706 25.4386 45.2706 22.9391C45.2858 21.5863 44.2666 20.6439 43.0461 19.929L43.035 19.9392ZM54.2523 15.2729C52.8691 15.2729 51.7751 15.9271 50.9379 16.9372L50.8914 16.922L52.0926 10.6369H48.9632L45.9228 26.6428H49.0542L50.1027 21.1707C50.5132 19.104 51.5819 17.8259 52.5799 17.8259C53.2776 17.8259 53.5526 18.2971 53.5526 18.9816C53.5526 19.4467 53.5061 19.9088 53.4161 20.3648L52.2311 26.6277H55.3625L56.594 20.1565C56.7285 19.4862 56.8064 18.8057 56.8215 18.1242C56.8064 16.3608 55.8792 15.2971 54.2533 15.2971L54.2523 15.2729ZM63.8882 15.2729C60.1188 15.2729 57.6254 18.6783 57.6254 22.4518C57.6254 24.8845 59.1299 26.8299 61.9428 26.8299C65.6404 26.8299 68.145 23.5155 68.145 19.651C68.145 17.4013 66.8234 15.2729 63.8932 15.2729H63.8882ZM62.3513 24.4386C61.2866 24.4386 60.8316 23.5286 60.8316 22.4063C60.8316 20.6126 61.7557 17.6793 63.4625 17.6793C64.5717 17.6793 64.9418 18.6368 64.9418 19.565C64.9377 21.4912 64.0115 24.4386 62.3533 24.4386H62.3513ZM76.153 15.2729C74.0296 15.2729 72.8385 17.1212 72.8385 17.1212H72.792L72.9771 15.4569H70.2036L69.5666 19.6075L67.3927 31.0695H70.5099L71.3775 26.4325H71.4381C71.4381 26.4325 72.0751 26.843 73.2784 26.843C76.9568 26.843 79.3582 23.0736 79.3582 19.2637C79.3733 17.1657 78.434 15.282 76.1509 15.282L76.153 15.2729ZM73.158 24.4841C72.6855 24.4935 72.2257 24.3311 71.8638 24.0271L72.3815 21.0928C72.7516 19.1464 73.7647 17.8391 74.8587 17.8391C75.8163 17.8391 76.1044 18.7208 76.1044 19.558C76.1095 21.5974 74.9113 24.4851 73.1621 24.4851L73.158 24.4841ZM83.8455 10.7734C83.3662 10.7704 82.9052 10.9605 82.5685 11.3012C82.2318 11.642 82.0447 12.1041 82.0629 12.5833C82.0629 13.5075 82.6564 14.1505 83.5422 14.1505H83.5887C83.8303 14.1601 84.0713 14.1201 84.2968 14.033C84.5224 13.9458 84.7277 13.8133 84.9 13.6437C85.0724 13.4741 85.2081 13.271 85.2989 13.0469C85.3897 12.8227 85.4336 12.5824 85.4279 12.3407C85.4279 11.4307 84.8192 10.7734 83.8607 10.7734H83.8455ZM79.4714 26.6125H82.6028L84.7302 15.5206H81.5877M92.7099 15.5054H90.5229L90.63 14.9877C90.8151 13.923 91.4511 12.9655 92.4784 12.9655C92.8187 12.9657 93.1572 13.0168 93.4824 13.1172L94.087 10.6673C94.087 10.6673 93.5309 10.3943 92.3843 10.3943C91.2685 10.3665 90.1794 10.7384 89.3136 11.4428C88.2489 12.3528 87.7464 13.6612 87.4936 14.9847L87.3925 15.5024H85.9334L85.4764 17.8583H86.9354L85.2712 26.6145H88.4137L90.078 17.8583H92.2377L92.6624 15.5024L92.7099 15.5054ZM100.251 15.5206L97.4075 23.1515H97.361L96.5865 15.5206H93.2862L95.172 25.7045C95.2173 25.8786 95.1957 26.0633 95.1113 26.2222C94.7018 26.9775 94.1184 27.6236 93.4086 28.1079C92.8646 28.482 92.2711 28.7793 91.6452 28.9896L92.5127 31.6488C93.6598 31.3418 94.7128 30.755 95.5774 29.9411C97.0061 28.6024 98.3276 26.5356 99.6825 23.7227L103.513 15.5145H100.25L100.251 15.5206Z"
                      fill="black"
                    />
                  </svg>
                  <svg
                    width="89"
                    height="26"
                    viewBox="0 0 89 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_6561_761)">
                      <path
                        d="M50.2072 5.18468C50.6744 5.18468 51.1266 5.00381 51.4582 4.6873C51.7898 4.37079 51.9857 3.91862 52.0008 3.46646C52.0008 2.99922 51.8049 2.54706 51.4733 2.21548C51.1417 1.88389 50.6895 1.68795 50.2223 1.68795C49.7551 1.70302 49.318 1.88389 48.9864 2.23055C48.6548 2.56213 48.4739 3.0143 48.489 3.46646C48.489 3.91862 48.6699 4.35571 49.0014 4.6873C49.318 4.98874 49.7551 5.16961 50.2072 5.18468ZM62.3553 6.84261H66.6659V7.18927C66.4248 7.23448 66.1987 7.30984 65.9877 7.43042C65.5958 7.61129 64.8121 8.50054 64.1941 9.99268C63.1692 12.57 62.0991 15.6296 60.9687 19.1264L60.5467 20.4527C60.3658 21.0556 60.2 21.4475 60.1247 21.6736C60.0493 21.9147 59.9438 22.2764 59.7629 22.7135C59.6574 23.0451 59.5218 23.3767 59.356 23.6781C59.145 24.07 58.7531 24.8688 58.4366 25.11C57.9392 25.532 57.2007 25.9992 56.2813 25.9239C54.4877 25.9239 53.1463 24.5975 53.1312 23.03C53.1312 21.9599 53.8094 21.2515 54.8344 21.2515C55.5729 21.2515 56.221 21.6434 56.221 22.4724C56.221 23.0753 55.6181 23.6932 55.6181 24.0097C55.6181 24.8236 56.0853 25.2004 57.0047 25.2004C57.7433 25.2004 58.3461 24.7332 58.7983 23.7987C59.4012 22.7286 59.4615 21.553 58.949 20.2417L55.1659 10.2941C54.2918 8.00316 53.6437 7.24956 52.8298 7.15912V6.81247H58.7983V7.15912C58.0899 7.23448 57.7282 7.6565 57.7282 8.41011C57.7282 8.9527 57.9392 9.79674 58.3311 10.8669L59.0395 12.7961C59.8534 14.8911 60.5165 16.7148 60.8481 17.8603C61.6168 15.4789 62.3252 13.399 63.0034 11.5752C63.5008 10.2188 63.742 9.25414 63.742 8.68141C63.742 7.6565 63.1843 7.18927 62.3553 7.18927V6.84261ZM20.8618 19.5484C20.0932 19.4127 19.4451 18.7345 19.4451 17.3026V-0.00012207L15.1043 0.934348V1.29608C15.8428 1.22072 16.5814 1.86882 16.5814 3.25545V17.3026C16.5814 18.6591 15.8428 19.4429 15.1043 19.5484C15.0289 19.5635 14.9687 19.5635 14.8933 19.5785C14.5165 19.6087 14.1397 19.5333 13.793 19.3826C13.2052 19.1264 12.7229 18.6742 12.316 18.011L10.3114 14.8308C9.88936 14.1526 9.25633 13.6401 8.5178 13.3538C7.77927 13.0674 6.96538 13.0222 6.1967 13.2332L8.45751 10.7463C10.1607 8.86227 11.7432 7.67157 13.2354 7.1742V6.82754H8.26158V7.1742C9.5427 7.67157 9.46734 8.77184 7.99028 10.4901L4.82514 14.1676V-0.00012207L0.484375 0.934348V1.29608C1.22291 1.29608 1.96144 2.01954 1.96144 3.30067V17.2876C1.96144 18.84 1.23798 19.4429 0.484375 19.5484V19.895H6.24192V19.5484C5.29237 19.4127 4.82514 18.6893 4.82514 17.3026V14.7253L6.06105 13.3688L9.04533 18.2522C9.75371 19.4278 10.4169 19.895 11.4569 19.895H21.4647V19.6237C21.4798 19.6237 21.1934 19.6087 20.8618 19.5484ZM32.7989 17.9055V12.0576C32.7387 8.24431 31.1259 6.49595 27.4333 6.49595C26.2577 6.48088 25.1122 6.87275 24.1777 7.59621C23.198 8.33475 22.7308 9.16371 22.7308 10.1283C22.7308 11.0628 23.2583 11.7712 24.1174 11.7712C25.0368 11.7712 25.7 11.2437 25.7 10.5202C25.7 9.97761 25.3383 9.20893 25.3383 8.69648C25.3383 7.76201 26.0466 6.94811 27.2826 6.94811C28.8651 6.94811 29.9955 8.12374 29.9955 10.7312V12.2987L28.6843 12.6152C28.006 12.7509 27.4182 12.8865 26.9811 13.0071C26.529 13.1427 25.9562 13.3236 25.278 13.5798C23.9064 14.1074 23.1829 14.6047 22.5499 15.5392C22.2334 15.9914 22.0827 16.534 22.0827 17.0766C22.0827 19.2469 23.605 20.2417 25.7301 20.2417C27.4182 20.2417 29.1967 19.3524 30.0106 17.6794C30.0257 18.207 30.1463 18.7194 30.3874 19.2017C31.2767 20.9953 34.2308 19.9403 34.2308 19.9403V19.5936C32.9044 19.7895 32.7989 18.2673 32.7989 17.9055ZM29.9955 16.0969C29.9955 16.956 29.679 17.6644 29.046 18.1618C28.4431 18.6591 27.8101 18.9154 27.1469 18.9154C25.8658 18.9154 25.0217 18.0864 25.0217 16.534C25.0217 15.8105 25.4287 15.1323 25.7603 14.7404C26.0316 14.4691 26.333 14.243 26.6797 14.0923C27.1318 13.8511 27.3428 13.7306 27.6594 13.5949L28.8651 13.1578C29.468 12.9167 29.8297 12.7961 29.9955 12.7207V16.0969ZM88.0532 6.84261H77.8344V-0.00012207H88.0532L85.913 3.42124L88.0532 6.84261ZM67.2688 18.222C66.0028 16.9258 65.2944 15.1775 65.3245 13.3538C65.3095 12.4645 65.4753 11.5752 65.8068 10.7463C66.1384 9.91732 66.6358 9.16371 67.2688 8.51561C68.565 7.15912 70.1325 6.48088 71.9864 6.48088C73.795 6.48088 75.3776 7.15912 76.6738 8.51561C77.3068 9.14864 77.8193 9.90224 78.1509 10.7312C78.4975 11.5602 78.6633 12.4494 78.6483 13.3538C78.6633 14.2581 78.4975 15.1473 78.1509 15.9763C77.8042 16.8053 77.3068 17.5739 76.6738 18.207C75.3776 19.5333 73.8101 20.2266 71.9864 20.2266C70.1476 20.2417 68.565 19.5635 67.2688 18.222ZM74.3527 8.74169C73.8403 7.73186 73.1469 7.14405 72.3481 6.97826C70.7203 6.64667 69.2885 8.31967 68.7459 10.9573C68.5198 12.148 68.4595 13.3538 68.5801 14.5444C68.7007 15.7502 69.0323 16.9108 69.5749 17.996C70.1024 19.0058 70.7806 19.5936 71.5795 19.7594C73.2072 20.091 74.6843 18.3577 75.2269 15.6899C75.6791 13.4593 75.453 10.7463 74.3527 8.74169Z"
                        fill="black"
                      />
                      <path
                        d="M51.7246 17.3026V6.84259H42.4703V7.1591C43.7062 7.33997 44.294 8.27444 43.7364 9.76657C40.8425 17.5739 41.0234 17.2273 40.8425 17.8452C40.6617 17.2423 40.2397 15.7653 39.5614 13.9114C38.8832 12.0575 38.431 10.8367 38.2501 10.279C37.5417 8.10864 37.7829 7.30982 38.9284 7.17417V6.82751H32.9297V7.17417C33.8189 7.35504 34.6178 8.37994 35.2659 10.2037L36.1853 12.5851C37.1951 15.1473 38.3858 18.6893 38.7777 19.895H40.7672C41.4153 18.0412 43.9775 10.6257 44.3242 9.87208C44.701 9.01297 45.123 8.36487 45.5902 7.91271C45.8163 7.67155 46.0876 7.47561 46.4041 7.35504C46.7056 7.23446 47.0372 7.1591 47.3688 7.17417C47.3688 7.17417 48.8157 7.17417 48.8157 8.56081V17.3177C48.8157 18.7797 48.1073 19.4579 47.3688 19.5634V19.9101H53.0962V19.5634C52.3576 19.4429 51.7246 18.7646 51.7246 17.3026Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_6561_761">
                        <rect
                          width="87.5689"
                          height="25.924"
                          fill="white"
                          transform="translate(0.484375)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="d-flex justify-content-center">
                  <img src="/assets/about-spotify-img.svg" alt="" />
                </div>
              </div>
              </div>
              
            <div className="about__right__box">
              <p className="about__right__box__p">Product in Use</p>
              <div className="d-flex justify-content-center ">
                <img src="/assets/about-return-img.svg" alt="" width={'40px'}/>
                <span className="about__right__box__span">Returns Experience Management</span>
              </div>
              <div className="d-flex justify-content-center mt-3 mb-2">
              <img src="/assets/about-deli-img.svg" alt="" width={'40px'}/>
                <span className="about__right__box__span">Delivery Experience Management</span>
              </div>
              </div>
              </div>
          </div>
        </div>
      </div>

      <div className="about__border"></div>
    </>
  );
};

export default About;
