export const AppRoute = {
  ROOT: `/`,
  CONVERTER: `/converter`,
  QUESTIONS: `/questions`,
};

export const MENU_TYPE = {
  SERVICES: `services`,
  LOAN: `loan`,
  CONVERTER: `converter`,
  CONTACT: `contact`,
  QUESTIONS: `questions`,
};

export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

export const KeyName = {
  ESC: `Escape`,
};

export const Validations = {
  IS_EMPTY: { isEmpty: true },
};

export const Validators = {
  IS_EMPTY: `isEmpty`,
};

export const SWIPE_SENS = 75;

export const TABS_MENU = [
  {
    icon: (
      <svg
        className="tabs-menu__icon"
        width="34"
        height="33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M4.207 26.063h25.585V4.366H4.207v21.697zm8.661-14.267a3.445 3.445 0 013.338 2.576h7.521v1.684h-7.521a3.445 3.445 0 01-3.338 2.577c-1.899 0-3.443-1.534-3.443-3.419s1.544-3.418 3.443-3.418z"
          fill="#2C36F2"
        />
        <path
          d="M0 0v30.429h2.48V33h2.968v-2.571h23.104V33h2.968v-2.571H34V0H0zm2.512 27.747V2.682h28.976v25.065H2.512z"
          fill="#2C36F2"
        />
      </svg>
    ),
    name: `Вклады`,
  },
  {
    icon: (
      <svg
        className="tabs-menu__icon"
        width="34"
        height="30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M32.702 4.397L11.88.035a1.642 1.642 0 00-1.94 1.25l-.396 2.517 24.026 5.033.396-2.517a1.626 1.626 0 00-1.263-1.92zM23.945 9.368a1.66 1.66 0 00-2.034-1.139l-3.953 1.087-9.32-1.953-1.024 4.794-6.404 1.759a1.639 1.639 0 00-1.15 2.013l3.609 12.873a1.66 1.66 0 002.034 1.139l20.7-5.687a1.639 1.639 0 001.15-2.013l-.619-2.21 2.322.486a1.641 1.641 0 001.94-1.25l1.47-6.87-8.363-1.752-.358-1.277zm2.39 6.543l.513-2.395a.676.676 0 01.798-.514l2.42.507a.669.669 0 01.52.79l-.513 2.395a.676.676 0 01-.798.514l-2.42-.507a.67.67 0 01-.52-.79zM1.572 15.2l20.7-5.686a.312.312 0 01.376.21l.705 2.517L2.064 18.09l-.706-2.517a.306.306 0 01.213-.372zm24.685 7.396a.295.295 0 01-.03.229.296.296 0 01-.183.143l-20.7 5.687a.312.312 0 01-.376-.21l-2.105-7.51 21.289-5.847 2.105 7.508z"
          fill="#565EF5"
        />
        <path
          d="M8.688 23.11a.677.677 0 00-.83-.464l-2.417.665a.668.668 0 00-.469.82l.671 2.393c.1.354.472.563.83.464l2.417-.664a.668.668 0 00.47-.82l-.672-2.393z"
          fill="#565EF5"
        />
      </svg>
    ),
    name: `Кредиты`,
  },
  {
    icon: (
      <svg
        className="tabs-menu__icon"
        width="28"
        height="34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M27.923 5.312C22.155 5.312 17.736 3.655 14 0 10.262 3.655 5.843 5.312.076 5.312.077 14.83-1.881 28.463 13.999 34c15.882-5.537 13.924-19.17 13.924-28.688zM12.846 22.06l-4.639-4.666 2.077-2.089 2.562 2.577 4.87-4.897 2.076 2.089-6.946 6.986z"
          fill="#565EF5"
        />
      </svg>
    ),
    name: `Страхование`,
  },
  {
    icon: (
      <svg
        className="tabs-menu__icon"
        width="20"
        height="34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M17.675 0H2.325C1.047 0 0 1.033 0 2.296v29.407C0 32.966 1.047 34 2.325 34h15.35C18.953 34 20 32.968 20 31.703V2.296C20 1.033 18.953 0 17.675 0zM7.545 1.655h4.91a.28.28 0 01.282.28.28.28 0 01-.282.277h-4.91a.28.28 0 01-.282-.278.28.28 0 01.282-.279zM10 32.852a1.155 1.155 0 01-1.163-1.15c0-.635.52-1.148 1.163-1.148.642 0 1.163.513 1.163 1.149 0 .635-.52 1.149-1.163 1.149zm8.382-3.102H1.618V3.642h16.764V29.75z"
          fill="#565EF5"
        />
      </svg>
    ),
    name: `Онлайн-сервисы`,
  },
];

export const PlacemarkCords = [
  [55.7499, 37.629],
  [55.7961, 49.1066],
  [57.153, 65.5441],
  [51.5355, 46.0252],
  [54.9929, 73.3719],
];

export const LoanPurpose = {
  MORTGAGE: `mortgage`,
  AUTO: `auto`
};

export const PurposeValue = {
  mortgage: `Ипотечное кредитование`,
  auto: `Автомобильное кредитование`
};