const Icon = ({ name, size, ...props }) => {
    const iconMap = {
        App: (
            <svg
                {...props}
                width={size ? size : "20"}
                height={size ? size : "20"}
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 2.5C0 1.11929 1.11929 0 2.5 0H5.5C6.88071 0 8 1.11929 8 2.5V5.5C8 6.88071 6.88071 8 5.5 8H2.5C1.11929 8 0 6.88071 0 5.5V2.5ZM2.5 2H5.5C5.77614 2 6 2.22386 6 2.5V5.5C6 5.77614 5.77614 6 5.5 6H2.5C2.22386 6 2 5.77614 2 5.5V2.5C2 2.22386 2.22386 2 2.5 2Z" fill="currentColor" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10 2.5C10 1.11929 11.1193 0 12.5 0H15.5C16.8807 0 18 1.11929 18 2.5V5.5C18 6.88071 16.8807 8 15.5 8H12.5C11.1193 8 10 6.88071 10 5.5V2.5ZM12.5 2H15.5C15.7761 2 16 2.22386 16 2.5V5.5C16 5.77614 15.7761 6 15.5 6H12.5C12.2239 6 12 5.77614 12 5.5V2.5C12 2.22386 12.2239 2 12.5 2Z" fill="currentColor" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 10C11.1193 10 10 11.1193 10 12.5V15.5C10 16.8807 11.1193 18 12.5 18H15.5C16.8807 18 18 16.8807 18 15.5V12.5C18 11.1193 16.8807 10 15.5 10H12.5ZM15.5 12H12.5C12.2239 12 12 12.2239 12 12.5V15.5C12 15.7761 12.2239 16 12.5 16H15.5C15.7761 16 16 15.7761 16 15.5V12.5C16 12.2239 15.7761 12 15.5 12Z" fill="currentColor" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 12.5C0 11.1193 1.11929 10 2.5 10H5.5C6.88071 10 8 11.1193 8 12.5V15.5C8 16.8807 6.88071 18 5.5 18H2.5C1.11929 18 0 16.8807 0 15.5V12.5ZM2.5 12H5.5C5.77614 12 6 12.2239 6 12.5V15.5C6 15.7761 5.77614 16 5.5 16H2.5C2.22386 16 2 15.7761 2 15.5V12.5C2 12.2239 2.22386 12 2.5 12Z" fill="currentColor" />
            </svg>
        ),
        Briefcase: (
            <svg
                {...props}
                width={size ? size : "20"}
                height={size ? size : "20"}
                viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.66685 18.3333H13.3335C16.6835 18.3333 17.2835 16.9917 17.4585 15.3583L18.0835 8.69167C18.3085 6.65833 17.7252 5 14.1668 5H5.83351C2.27518 5 1.69185 6.65833 1.91685 8.69167L2.54185 15.3583C2.71685 16.9917 3.31685 18.3333 6.66685 18.3333Z" stroke="currentColor" stroke-width="1.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M6.6665 5.00033V4.33366C6.6665 2.85866 6.6665 1.66699 9.33317 1.66699H10.6665C13.3332 1.66699 13.3332 2.85866 13.3332 4.33366V5.00033" stroke="currentColor" stroke-width="1.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M11.6668 10.8333V11.6667C11.6668 11.675 11.6668 11.675 11.6668 11.6833C11.6668 12.5917 11.6585 13.3333 10.0002 13.3333C8.35016 13.3333 8.3335 12.6 8.3335 11.6917V10.8333C8.3335 10 8.3335 10 9.16683 10H10.8335C11.6668 10 11.6668 10 11.6668 10.8333Z" stroke="currentColor" stroke-width="1.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M18.0415 9.16699C16.1165 10.567 13.9165 11.4003 11.6665 11.6837" stroke="currentColor" stroke-width="1.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M2.18311 9.3916C4.05811 10.6749 6.17477 11.4499 8.33311 11.6916" stroke="currentColor" stroke-width="1.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        ),
        BriefcaseTick: (
            <svg
                {...props}
                width={size ? size : "20"}
                height={size ? size : "20"}
                viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 36.4004C28.4183 36.4004 32 32.8187 32 28.4004C32 23.9821 28.4183 20.4004 24 20.4004C19.5817 20.4004 16 23.9821 16 28.4004C16 32.8187 19.5817 36.4004 24 36.4004Z" stroke="currentColor" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M20.8799 28.5996L22.1799 29.8996C22.5599 30.2796 23.1799 30.2796 23.5599 29.9196L27.1199 26.6396" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M15.9999 44H31.9999C40.0399 44 41.4799 40.78 41.8999 36.86L43.3999 20.86C43.9399 15.98 42.5399 12 33.9999 12H13.9999C5.4599 12 4.0599 15.98 4.5999 20.86L6.0999 36.86C6.5199 40.78 7.9599 44 15.9999 44Z" stroke="currentColor" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M16 12V10.4C16 6.86 16 4 22.4 4H25.6C32 4 32 6.86 32 10.4V12" stroke="currentColor" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M43.3 22C39.84 24.52 36 26.28 32.02 27.28" stroke="currentColor" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M5.23999 22.54C8.57999 24.82 12.22 26.44 16 27.36" stroke="currentColor" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        ),
        Bell1: (
            <svg  {...props}
                width={size ? size : "20"}
                height={size ? size : "20"}
                viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.0005 6.99902V9.9985" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" />
                <path d="M12.0186 3C8.70385 3 6.01963 5.68422 6.01963 8.99896V10.8905C6.01963 11.503 5.76742 12.4218 5.45216 12.9442L4.30822 14.8538C3.60564 16.0338 4.09204 17.3489 5.38911 17.7812C9.69467 19.2134 14.3515 19.2134 18.6571 17.7812C19.8731 17.3759 20.3955 15.9527 19.738 14.8538L18.594 12.9442C18.2788 12.4218 18.0266 11.494 18.0266 10.8905V8.99896C18.0175 5.70223 15.3153 3 12.0186 3Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" />
                <path d="M15 18.1504C15 19.7988 13.6489 21.1499 12.0005 21.1499C11.1808 21.1499 10.4242 20.8076 9.88377 20.2671C9.34332 19.7267 9.00104 18.9701 9.00104 18.1504" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" />
            </svg>
        ),
        Bell2: (
            <svg
                {...props}
                width={size ? size : "16"}
                height={size ? size : "20"}
                viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9 1C9 0.447715 8.55229 0 8 0C7.44772 0 7 0.447715 7 1V1.57088C3.60769 2.0561 0.999966 4.97352 0.999966 8.5V13.5L0.282371 14.7558C-0.289049 15.7558 0.433002 17 1.58474 17H4.12602C4.57006 18.7252 6.13616 20 8 20C9.86384 20 11.4299 18.7252 11.874 17H14.4152C15.5669 17 16.289 15.7558 15.7176 14.7558L15 13.5V8.5C15 4.97354 12.3923 2.05614 9 1.57089V1ZM2.99997 14.0311L2.44633 15H13.5536L13 14.0311V8.5C13 5.73858 10.7614 3.5 7.99997 3.5C5.23854 3.5 2.99997 5.73858 2.99997 8.5V14.0311ZM8 18C7.25972 18 6.61337 17.5978 6.26756 17H9.73244C9.38663 17.5978 8.74028 18 8 18Z" fill="currentColor" />
            </svg>
        ),
        Bell3: (
            <svg
                {...props}
                width={size ? size : "24"}
                height={size ? size : "24"}
                viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.0196 2.91003C8.7096 2.91003 6.0196 5.60003 6.0196 8.91003V11.8C6.0196 12.41 5.7596 13.34 5.4496 13.86L4.2996 15.77C3.5896 16.95 4.0796 18.26 5.3796 18.7C9.6896 20.14 14.3396 20.14 18.6496 18.7C19.8596 18.3 20.3896 16.87 19.7296 15.77L18.5796 13.86C18.2796 13.34 18.0196 12.41 18.0196 11.8V8.91003C18.0196 5.61003 15.3196 2.91003 12.0196 2.91003Z" stroke="currentColor" stroke-width="1.6" stroke-miterlimit="10" stroke-linecap="round" />
                <path d="M13.8699 3.19994C13.5599 3.10994 13.2399 3.03994 12.9099 2.99994C11.9499 2.87994 11.0299 2.94994 10.1699 3.19994C10.4599 2.45994 11.1799 1.93994 12.0199 1.93994C12.8599 1.93994 13.5799 2.45994 13.8699 3.19994Z" stroke="currentColor" stroke-width="1.6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M15.0195 19.0601C15.0195 20.7101 13.6695 22.0601 12.0195 22.0601C11.1995 22.0601 10.4395 21.7201 9.89953 21.1801C9.35953 20.6401 9.01953 19.8801 9.01953 19.0601" stroke="currentColor" stroke-width="1.6" stroke-miterlimit="10" />
            </svg>
        ),
        Book: (
            <svg
                {...props}
                width={size ? size : "16"}
                height={size ? size : "18"}
                viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 13.9412V4.88236C1 1.58824 1.82353 0.764709 5.11765 0.764709H10.8824C14.1765 0.764709 15 1.58824 15 4.88236V13.1177C15 13.2329 15 13.3482 14.9918 13.4635" stroke="currentColor" stroke-width="1.42857" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M3.34706 11.4706H15V14.3529C15 15.9423 13.7071 17.2353 12.1176 17.2353H3.88235C2.29294 17.2353 1 15.9423 1 14.3529V13.8176C1 12.5247 2.05412 11.4706 3.34706 11.4706Z" stroke="currentColor" stroke-width="1.42857" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M4.70587 4.88235H11.2941" stroke="currentColor" stroke-width="1.42857" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M4.70587 7.76471H8.82352" stroke="currentColor" stroke-width="1.42857" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        ),
        BurgerMenu: (
            <svg
                {...props}
                width={size ? size : "18"}
                height={size ? size : "16"}
                viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 1C0 0.447715 0.447715 0 1 0H17C17.5523 0 18 0.447715 18 1C18 1.55228 17.5523 2 17 2H1C0.447715 2 0 1.55228 0 1Z" fill="currentColor" />
                <path d="M0 6C0 5.44772 0.447715 5 1 5H17C17.5523 5 18 5.44772 18 6C18 6.55228 17.5523 7 17 7H1C0.447715 7 0 6.55228 0 6Z" fill="currentColor" />
                <path d="M1 10C0.447715 10 0 10.4477 0 11C0 11.5523 0.447715 12 1 12H17C17.5523 12 18 11.5523 18 11C18 10.4477 17.5523 10 17 10H1Z" fill="currentColor" />
            </svg>
        ),
        Calender1: (
            <svg
                {...props}
                width={size ? size : "18"}
                height={size ? size : "16"}
                viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.6665 1.66699V4.16699" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M13.3335 1.66699V4.16699" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M2.9165 7.5752H17.0832" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M17.5 7.08366V14.167C17.5 16.667 16.25 18.3337 13.3333 18.3337H6.66667C3.75 18.3337 2.5 16.667 2.5 14.167V7.08366C2.5 4.58366 3.75 2.91699 6.66667 2.91699H13.3333C16.25 2.91699 17.5 4.58366 17.5 7.08366Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M9.99607 11.4167H10.0036" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M6.91209 11.4167H6.91957" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M6.91209 13.9167H6.91957" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        ),
        Calender2: (
            <svg
                {...props}
                width={size ? size : "18"}
                height={size ? size : "16"}
                viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.2832 3.12354V6.74821" stroke="currentColor" stroke-width="1.81234" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M19.9487 3.12354V6.74821" stroke="currentColor" stroke-width="1.81234" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M4.84619 11.6898H25.386" stroke="currentColor" stroke-width="1.81234" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M25.9898 10.9769V21.2468C25.9898 24.8715 24.1774 27.288 19.9486 27.288H10.2828C6.05404 27.288 4.2417 24.8715 4.2417 21.2468V10.9769C4.2417 7.35224 6.05404 4.93579 10.2828 4.93579H19.9486C24.1774 4.93579 25.9898 7.35224 25.9898 10.9769Z" stroke="currentColor" stroke-width="1.81234" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M19.5799 17.2596H19.5908" stroke="currentColor" stroke-width="2.41645" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M19.5799 20.8844H19.5908" stroke="currentColor" stroke-width="2.41645" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M15.1107 17.2596H15.1215" stroke="currentColor" stroke-width="2.41645" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M15.1107 20.8844H15.1215" stroke="currentColor" stroke-width="2.41645" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M10.6385 17.2596H10.6493" stroke="currentColor" stroke-width="2.41645" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M10.6385 20.8844H10.6493" stroke="currentColor" stroke-width="2.41645" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        ), 
        Cross: (
            <svg
                {...props}
                width={size ? size : "18"}
                height={size ? size : "16"}
                viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.8747 9.99361C11.2001 10.319 11.2001 10.8467 10.8747 11.1721C10.5492 11.4975 10.0216 11.4975 9.69615 11.1721L5.7021 7.17812L1.70816 11.1721C1.38273 11.4976 0.855089 11.4976 0.529649 11.1721C0.204209 10.8467 0.204204 10.3191 0.529639 9.99362L4.52357 5.99962L0.52948 2.00559C0.20404 1.68015 0.204041 1.15252 0.529481 0.827084C0.85492 0.50165 1.38256 0.501649 1.708 0.827083L5.70208 4.8211L9.696 0.827098C10.0214 0.501658 10.5491 0.501655 10.8745 0.827089C11.2 1.15252 11.2 1.68016 10.8745 2.0056L6.8806 5.9996L10.8747 9.99361Z" fill="#858D9D" />
            </svg>
        ),
        Card: (
            <svg
                {...props}
                width={size ? size : "22"}
                height={size ? size : "22"}
                viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.83325 7.79614H20.1666" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M5.5 15.1296H7.33333" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M9.625 15.1296H13.2917" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M5.90325 3.21289H16.0874C19.3508 3.21289 20.1666 4.01956 20.1666 7.23706V14.7629C20.1666 17.9804 19.3508 18.7871 16.0966 18.7871H5.90325C2.64909 18.7962 1.83325 17.9896 1.83325 14.7721V7.23706C1.83325 4.01956 2.64909 3.21289 5.90325 3.21289Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        ),
        ChevronLeft: (
            <svg
                {...props}
                width={size ? size : "18"}
                height={size ? size : "16"}
                viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.67257 0.41107C6.99801 0.736507 6.99801 1.26414 6.67257 1.58958L2.26183 6.00033L6.67257 10.4111C6.99801 10.7365 6.99801 11.2641 6.67257 11.5896C6.34713 11.915 5.8195 11.915 5.49406 11.5896L0.199432 6.29495C0.0367131 6.13223 0.0367129 5.86842 0.199431 5.7057L5.49406 0.41107C5.8195 0.0856329 6.34713 0.0856329 6.67257 0.41107Z" fill="url(#paint0_linear_2452_28216)" />
                <defs>
                    <linearGradient id="paint0_linear_2452_28216" x1="0.0773926" y1="6.00033" x2="6.91665" y2="6.00033" gradientUnits="userSpaceOnUse">
                        <stop offset="0.109423" stop-color="currentColor" />
                        <stop offset="1" stop-color="#7312F7" />
                    </linearGradient>
                </defs>
            </svg>

        ),
        ChevronRight: (
            <svg
                {...props}
                width={size ? size : "18"}
                height={size ? size : "16"}
                viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.327329 0.41107C0.00189281 0.736507 0.00189281 1.26414 0.327329 1.58958L4.73807 6.00033L0.327329 10.4111C0.00189281 10.7365 0.00189281 11.2641 0.327329 11.5896C0.652766 11.915 1.1804 11.915 1.50584 11.5896L6.80047 6.29495C6.96319 6.13223 6.96319 5.86842 6.80047 5.7057L1.50584 0.41107C1.1804 0.0856329 0.652766 0.0856329 0.327329 0.41107Z" fill="currentColor" />
            </svg>


        ),
        Chat1: (
            <svg
                {...props}
                width={size ? size : "18"}
                height={size ? size : "16"}
                viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.3 4.82494V9.41492C19.3 10.5579 18.922 11.5209 18.247 12.1869C17.581 12.8619 16.618 13.2399 15.475 13.2399V14.8689C15.475 15.4809 14.791 15.8499 14.287 15.5079L13.414 14.9319C13.495 14.6529 13.531 14.3469 13.531 14.0229V10.36C13.531 8.52396 12.307 7.29994 10.471 7.29994H4.35999C4.23399 7.29994 4.117 7.30896 4 7.31796V4.82494C4 2.52994 5.53 0.999939 7.825 0.999939H15.475C17.77 0.999939 19.3 2.52994 19.3 4.82494Z" stroke="currentColor" stroke-width="1.35" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M13.231 10.36V14.023C13.231 14.347 13.195 14.653 13.114 14.932C12.781 16.255 11.683 17.083 10.171 17.083H7.723L5.005 18.892C4.6 19.171 4.05999 18.874 4.05999 18.388V17.083C3.14199 17.083 2.377 16.777 1.846 16.246C1.306 15.706 1 14.941 1 14.023V10.36C1 8.65001 2.062 7.47101 3.7 7.31801C3.817 7.30901 3.93399 7.29999 4.05999 7.29999H10.171C12.007 7.29999 13.231 8.52401 13.231 10.36Z" stroke="currentColor" stroke-width="1.35" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        ),
        Document1: (
            <svg
                {...props}
                width={size ? size : "18"}
                height={size ? size : "18"}
                viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 7.4H13.8C11.4 7.4 10.6 6.6 10.6 4.2V1L17 7.4Z" stroke="currentColor" stroke-width="1.42857" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M5 10H9.8" stroke="currentColor" stroke-width="1.42857" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M5 13H8.2" stroke="currentColor" stroke-width="1.42857" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M17 7.4V11.4C17 15.4 15.4 17 11.4 17H6.6C2.6 17 1 15.4 1 11.4V6.6C1 2.6 2.6 1 6.6 1H10.6" stroke="currentColor" stroke-width="1.42857" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        ),
        DocumentText: (<svg
            {...props}
            width={size ? size : "18"}
            height={size ? size : "18"}
            viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.5 5.83341V14.1667C17.5 16.6667 16.25 18.3334 13.3333 18.3334H6.66667C3.75 18.3334 2.5 16.6667 2.5 14.1667V5.83341C2.5 3.33341 3.75 1.66675 6.66667 1.66675H13.3333C16.25 1.66675 17.5 3.33341 17.5 5.83341Z" stroke="currentColor" stroke-width="1.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M12.0833 3.75V5.41667C12.0833 6.33333 12.8333 7.08333 13.7499 7.08333H15.4166" stroke="currentColor" stroke-width="1.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M6.66675 10.8333H10.0001" stroke="currentColor" stroke-width="1.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M6.66675 14.1667H13.3334" stroke="currentColor" stroke-width="1.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

        ),
        Edit: (
            <svg
                {...props}
                width={size ? size : "20"}
                height={size ? size : "20"}
                viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.3047 5.81991C16.281 4.8436 16.281 3.26069 15.3047 2.28438L14.7155 1.69512C13.7391 0.718813 12.1562 0.718813 11.1799 1.69512L1.69097 11.1841C1.34624 11.5288 1.10982 11.9668 1.01082 12.4442L0.341106 15.6735C0.219324 16.2607 0.739063 16.7805 1.32629 16.6587L4.55565 15.989C5.03302 15.89 5.47103 15.6536 5.81577 15.3089L15.3047 5.81991ZM14.1262 3.46289L13.5369 2.87363C13.2115 2.5482 12.6839 2.5482 12.3584 2.87363L11.4745 3.75755L13.2423 5.52531L14.1262 4.6414C14.4516 4.31596 14.4516 3.78833 14.1262 3.46289ZM12.0638 6.70382L10.296 4.93606L2.86948 12.3626C2.75457 12.4775 2.67577 12.6235 2.64277 12.7826L2.23082 14.769L4.21721 14.3571C4.37634 14.3241 4.52234 14.2453 4.63726 14.1303L12.0638 6.70382Z" fill="currentColor" />
            </svg>

        ),
        Envelope: (
            <svg
                {...props}
                width={size ? size : "18"}
                height={size ? size : "16"}
                viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 6L10.496 7.60514C9.672 8.13162 8.32 8.13162 7.496 7.60514L5 6" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M13 15H5C2.6 15 1 13.7647 1 10.8824V5.11765C1 2.23529 2.6 1 5 1H13C15.4 1 17 2.23529 17 5.11765V10.8824C17 13.7647 15.4 15 13 15Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        ),
        Graph: (
            <svg
                {...props}
                width={size ? size : "22"}
                height={size ? size : "22"}
                viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.7933 10.5417C19.1767 10.5417 20.1667 9.66319 19.2867 6.7818C18.6908 4.84037 16.9492 3.17128 14.9233 2.60027C11.9167 1.75694 11 2.70569 11 4.98971V7.51971C11 9.66319 11.9167 10.5417 13.75 10.5417H16.7933Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M18.3333 12.9136C17.4808 16.9809 13.4108 19.9326 8.78164 19.2122C5.30748 18.6764 2.51164 15.997 1.94331 12.6676C1.20081 8.24889 4.26248 4.34847 8.48831 3.52271" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        ),
        Home: (
            <svg
                {...props}
                width={size ? size : "24"}
                height={size ? size : "24"}
                viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.02 2.84004L3.63 7.04004C2.73 7.74004 2 9.23004 2 10.36V17.77C2 20.09 3.89 21.99 6.21 21.99H17.79C20.11 21.99 22 20.09 22 17.78V10.5C22 9.29004 21.19 7.74004 20.2 7.05004L14.02 2.72004C12.62 1.74004 10.37 1.79004 9.02 2.84004Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12 17.99V14.99" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

        ),
        Keyboard: (
            <svg
                {...props}
                width={size ? size : "22"}
                height={size ? size : "22"}
                viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.87502 3.66699H15.125C15.6934 3.66699 16.1975 3.68533 16.6467 3.74949C19.0575 4.01533 19.7084 5.15199 19.7084 8.25033V13.7503C19.7084 16.8487 19.0575 17.9853 16.6467 18.2512C16.1975 18.3153 15.6934 18.3337 15.125 18.3337H6.87502C6.30669 18.3337 5.80252 18.3153 5.35335 18.2512C2.94252 17.9853 2.29169 16.8487 2.29169 13.7503V8.25033C2.29169 5.15199 2.94252 4.01533 5.35335 3.74949C5.80252 3.68533 6.30669 3.66699 6.87502 3.66699Z" stroke="currentColor" stroke-width="1.42857" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12.375 9.16699H15.5833" stroke="currentColor" stroke-width="1.42857" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M6.41669 14.208H6.43502H15.5834" stroke="currentColor" stroke-width="1.42857" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M9.25341 9.16634H9.26164" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M6.50341 9.16634H6.51164" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        ),
        Logout: (
            <svg
                {...props}
                width={size ? size : "18"}
                height={size ? size : "16"}
                viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.90002 7.56023C9.21002 3.96023 11.06 2.49023 15.11 2.49023H15.24C19.71 2.49023 21.5 4.28023 21.5 8.75023V15.2702C21.5 19.7402 19.71 21.5302 15.24 21.5302H15.11C11.09 21.5302 9.24002 20.0802 8.91002 16.5402" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M15 12H3.62" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M5.85 8.65039L2.5 12.0004L5.85 15.3504" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

        ),
        Login: (
            <svg
                {...props}
                className="transform scale-x-[-1]"
                width={size ? size : "24"}
                height={size ? size : "24"}
                viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.90002 7.56023C9.21002 3.96023 11.06 2.49023 15.11 2.49023H15.24C19.71 2.49023 21.5 4.28023 21.5 8.75023V15.2702C21.5 19.7402 19.71 21.5302 15.24 21.5302H15.11C11.09 21.5302 9.24002 20.0802 8.91002 16.5402" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M15 12H3.62" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M5.85 8.65039L2.5 12.0004L5.85 15.3504" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

        ),
        LineCard: (
            <svg
                {...props}
                width={size ? size : "26"}
                height={size ? size : "26"}
                viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.19656 9.75757H24.1914" stroke="white" stroke-width="1.79958" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M6.59553 18.5554H8.79501" stroke="white" stroke-width="1.79958" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M11.5444 18.5554H15.9433" stroke="white" stroke-width="1.79958" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M7.07942 4.25891H19.2976C23.2126 4.25891 24.1914 5.22668 24.1914 9.08678V18.1157C24.1914 21.9758 23.2126 22.9435 19.3086 22.9435H7.07942C3.17533 22.9545 2.19656 21.9868 2.19656 18.1267V9.08678C2.19656 5.22668 3.17533 4.25891 7.07942 4.25891Z" stroke="white" stroke-width="1.79958" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        ),
        Message: (
            <svg
                {...props}
                width={size ? size : "20"}
                height={size ? size : "20"}
                viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.375 14.25H6C3 14.25 1.5 13.5 1.5 9.75V6C1.5 3 3 1.5 6 1.5H12C15 1.5 16.5 3 16.5 6V9.75C16.5 12.75 15 14.25 12 14.25H11.625C11.3925 14.25 11.1675 14.3625 11.025 14.55L9.9 16.05C9.405 16.71 8.595 16.71 8.1 16.05L6.975 14.55C6.855 14.385 6.5775 14.25 6.375 14.25Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M5.25 6H12.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M5.25 9.75H9.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

        ),
        People: (
            <svg
                {...props}
                width={size ? size : "20"}
                height={size ? size : "20"}
                viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M42 16.707C41.86 16.6837 41.6967 16.6837 41.5567 16.707C38.3367 16.5903 35.77 13.9537 35.77 10.687C35.77 7.35033 38.4533 4.66699 41.79 4.66699C45.1267 4.66699 47.81 7.37366 47.81 10.687C47.7867 13.9537 45.22 16.5903 42 16.707Z" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M39.5966 33.694C42.7933 34.2307 46.3166 33.6707 48.79 32.014C52.08 29.8207 52.08 26.2274 48.79 24.034C46.2933 22.3774 42.7233 21.8174 39.5266 22.3774" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M13.9299 16.707C14.0699 16.6837 14.2332 16.6837 14.3732 16.707C17.5932 16.5903 20.1599 13.9537 20.1599 10.687C20.1599 7.35033 17.4765 4.66699 14.1399 4.66699C10.8032 4.66699 8.11987 7.37366 8.11987 10.687C8.14321 13.9537 10.7099 16.5903 13.9299 16.707Z" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M16.3332 33.694C13.1365 34.2307 9.6132 33.6707 7.13986 32.014C3.84986 29.8207 3.84986 26.2274 7.13986 24.034C9.63653 22.3774 13.2065 21.8174 16.4032 22.3774" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M28 34.1367C27.86 34.1134 27.6967 34.1134 27.5567 34.1367C24.3367 34.02 21.77 31.3834 21.77 28.1167C21.77 24.78 24.4533 22.0967 27.79 22.0967C31.1267 22.0967 33.81 24.8034 33.81 28.1167C33.7867 31.3834 31.22 34.0434 28 34.1367Z" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M21.2099 41.4868C17.9199 43.6802 17.9199 47.2735 21.2099 49.4668C24.9433 51.9635 31.0566 51.9635 34.7899 49.4668C38.0799 47.2735 38.0799 43.6802 34.7899 41.4868C31.0799 39.0135 24.9433 39.0135 21.2099 41.4868Z" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        ),
        ProfileDelete: (
            <svg
                {...props}
                width={size ? size : "20"}
                height={size ? size : "20"}
                viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M42.9567 42.21L36.3767 48.79" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M42.9567 48.79L36.3767 42.21" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M28.3737 25.3637C28.1404 25.3403 27.8604 25.3403 27.6037 25.3637C22.0504 25.177 17.6404 20.627 17.6404 15.027C17.6404 9.31033 22.2604 4.66699 28.0004 4.66699C33.717 4.66699 38.3604 9.31033 38.3604 15.027C38.3371 20.627 33.927 25.177 28.3737 25.3637Z" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M28 50.8896C23.7533 50.8896 19.53 49.8163 16.31 47.6696C10.6633 43.8896 10.6633 37.7296 16.31 33.9729C22.7266 29.6796 33.25 29.6796 39.6666 33.9729" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        ),
        Setting1: (
            <svg
                {...props}
                width={size ? size : "18"}
                height={size ? size : "18"}
                viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.6 17H11.4C15.4 17 17 15.4 17 11.4V6.6C17 2.6 15.4 1 11.4 1H6.6C2.6 1 1 2.6 1 6.6V11.4C1 15.4 2.6 17 6.6 17Z" stroke="currentColor" stroke-width="1.42857" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M11.856 14.1997V11.0797" stroke="currentColor" stroke-width="1.42857" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M11.856 5.35999V3.79999" stroke="currentColor" stroke-width="1.42857" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M11.856 9.52017C13.0048 9.52017 13.936 8.58892 13.936 7.44017C13.936 6.29142 13.0048 5.36017 11.856 5.36017C10.7072 5.36017 9.776 6.29142 9.776 7.44017C9.776 8.58892 10.7072 9.52017 11.856 9.52017Z" stroke="currentColor" stroke-width="1.42857" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M6.14398 14.1998V12.6398" stroke="currentColor" stroke-width="1.42857" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M6.14398 6.91999V3.79999" stroke="currentColor" stroke-width="1.42857" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M6.14403 12.6397C7.29278 12.6397 8.22403 11.7084 8.22403 10.5597C8.22403 9.41092 7.29278 8.47968 6.14403 8.47968C4.99527 8.47968 4.06403 9.41092 4.06403 10.5597C4.06403 11.7084 4.99527 12.6397 6.14403 12.6397Z" stroke="currentColor" stroke-width="1.42857" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

        ),
        Setting2: (
            <svg
                {...props}
                width={size ? size : "24"}
                height={size ? size : "24"}
                viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 9.10998V14.88C3 17 3 17 5 18.35L10.5 21.53C11.33 22.01 12.68 22.01 13.5 21.53L19 18.35C21 17 21 17 21 14.89V9.10998C21 6.99998 21 6.99999 19 5.64999L13.5 2.46999C12.68 1.98999 11.33 1.98999 10.5 2.46999L5 5.64999C3 6.99999 3 6.99998 3 9.10998Z" stroke="currentColor" stroke-width="1.59296" />
                <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" stroke-width="1.59296" />
            </svg>
        ),
        SmsNotification: (
            <svg
                {...props}
                width={size ? size : "18"}
                height={size ? size : "16"}
                viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 5C16.1046 5 17 4.10457 17 3C17 1.89543 16.1046 1 15 1C13.8954 1 13 1.89543 13 3C13 4.10457 13.8954 5 15 5Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M5 6L7.33003 7.60514C8.09678 8.13162 9.35484 8.13162 10.1216 7.60514L11 7.0016" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M17 6.76471V10.8824C17 13.7647 15.4 15 13 15H5C2.6 15 1 13.7647 1 10.8824V5.11765C1 2.23529 2.6 1 5 1H10.6" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        ),
        Search: (
            <svg
                {...props}
                width={size ? size : "20"}
                height={size ? size : "20"}
                viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7847 15.1991C10.6462 17.6416 6.10654 17.4205 3.22181 14.5358C0.0976136 11.4116 0.0976136 6.34625 3.22181 3.22205C6.346 0.0978578 11.4113 0.0978578 14.5355 3.22205C17.4202 6.10677 17.6414 10.6464 15.1989 13.7849L19.4853 18.0713C19.8758 18.4618 19.8758 19.095 19.4853 19.4855C19.0948 19.876 18.4616 19.876 18.0711 19.4855L13.7847 15.1991ZM4.63602 13.1215C6.97917 15.4647 10.7782 15.4647 13.1213 13.1215C15.4644 10.7784 15.4644 6.97941 13.1213 4.63627C10.7782 2.29312 6.97917 2.29312 4.63602 4.63627C2.29288 6.97941 2.29288 10.7784 4.63602 13.1215Z" fill="currentColor" />
            </svg>
        ),
        Sort1: (
            <svg
                {...props}
                width={size ? size : "20"}
                height={size ? size : "20"}
                viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.56206 16.7289L3.58789 12.7627" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M7.56201 3.27051V16.7288" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12.2964 3.27051L16.2706 7.23676" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12.2964 16.7288V3.27051" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        ),
        User: (
            <svg
                {...props}
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M10.0999 10.6497C10.0416 10.6414 9.9666 10.6414 9.89993 10.6497C8.43327 10.5997 7.2666 9.39974 7.2666 7.92474C7.2666 6.41641 8.48327 5.19141 9.99993 5.19141C11.5083 5.19141 12.7333 6.41641 12.7333 7.92474C12.7249 9.39974 11.5666 10.5997 10.0999 10.6497Z" stroke="currentColor" stroke-width="1.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M15.6166 16.1498C14.1333 17.5081 12.1666 18.3331 9.99997 18.3331C7.8333 18.3331 5.86663 17.5081 4.3833 16.1498C4.46663 15.3665 4.96663 14.5998 5.8583 13.9998C8.14163 12.4831 11.875 12.4831 14.1416 13.9998C15.0333 14.5998 15.5333 15.3665 15.6166 16.1498Z" stroke="currentColor" stroke-width="1.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M9.99984 18.3337C14.6022 18.3337 18.3332 14.6027 18.3332 10.0003C18.3332 5.39795 14.6022 1.66699 9.99984 1.66699C5.39746 1.66699 1.6665 5.39795 1.6665 10.0003C1.6665 14.6027 5.39746 18.3337 9.99984 18.3337Z" stroke="currentColor" stroke-width="1.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        ),
        Users: (
            <svg
                {...props}
                // width="20"
                // height="20"
                width={size ? size : "20"}
                height={size ? size : "20"}
                viewBox="0 0 18 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M6.58231 9.0289C6.49768 9.02043 6.39613 9.02043 6.30304 9.0289C4.28891 8.96119 2.68945 7.31096 2.68945 5.27991C2.68945 3.20654 4.36507 1.52246 6.4469 1.52246C8.52027 1.52246 10.2043 3.20654 10.2043 5.27991C10.1959 7.31096 8.59643 8.96119 6.58231 9.0289Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12.7179 3.21484C14.3597 3.21484 15.6799 4.54349 15.6799 6.1768C15.6799 7.77625 14.4105 9.07951 12.8279 9.13875C12.7602 9.13029 12.6841 9.13029 12.6079 9.13875" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M2.35093 12.1517C0.302947 13.5227 0.302947 15.7569 2.35093 17.1194C4.67817 18.6765 8.49486 18.6765 10.8221 17.1194C12.8701 15.7484 12.8701 13.5142 10.8221 12.1517C8.50333 10.6031 4.68664 10.6031 2.35093 12.1517Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M14.3511 16.7554C14.9604 16.6284 15.5359 16.383 16.0098 16.0191C17.33 15.029 17.33 13.3957 16.0098 12.4055C15.5443 12.0501 14.9773 11.8131 14.3765 11.6777" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        ),
        View: (
            <svg
                {...props}
                width={size ? size : "20"}
                height={size ? size : "20"}
                viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.99996 0.166992C14.1083 0.166992 16.5256 3.59196 17.3765 5.19314C17.6475 5.70299 17.6475 6.29766 17.3765 6.80751C16.5256 8.40869 14.1083 11.8337 8.99996 11.8337C3.89164 11.8337 1.47436 8.40869 0.623389 6.80751C0.352425 6.29766 0.352425 5.70299 0.62339 5.19314C1.47436 3.59196 3.89164 0.166992 8.99996 0.166992ZM4.69692 3.06507C3.31336 3.98178 2.50548 5.20318 2.09512 5.97531C2.09054 5.98393 2.08865 5.98991 2.08783 5.9932C2.08699 5.99654 2.08683 6.00033 2.08683 6.00033C2.08683 6.00033 2.08699 6.00411 2.08783 6.00745C2.08865 6.01074 2.09054 6.01672 2.09512 6.02534C2.50548 6.79747 3.31336 8.01887 4.69692 8.93558C4.1257 8.09979 3.79163 7.08907 3.79163 6.00033C3.79163 4.91158 4.1257 3.90086 4.69692 3.06507ZM13.303 8.93557C14.6866 8.01887 15.4944 6.79747 15.9048 6.02534C15.9094 6.01672 15.9113 6.01074 15.9121 6.00745C15.9126 6.00529 15.913 6.00223 15.913 6.00223L15.9131 6.00033L15.9128 5.99666L15.9121 5.9932C15.9113 5.98991 15.9094 5.98393 15.9048 5.97531C15.4944 5.20318 14.6866 3.98179 13.303 3.06508C13.8742 3.90086 14.2083 4.91158 14.2083 6.00033C14.2083 7.08907 13.8742 8.09979 13.303 8.93557ZM5.4583 6.00033C5.4583 4.04432 7.04396 2.45866 8.99997 2.45866C10.956 2.45866 12.5416 4.04432 12.5416 6.00033C12.5416 7.95633 10.956 9.54199 8.99997 9.54199C7.04396 9.54199 5.4583 7.95633 5.4583 6.00033Z" fill="currentColor" />
            </svg>
        ),
        Wallet: (
            <svg
                {...props}
                width={size ? size : "20"}
                height={size ? size : "20"}
                viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.8335 9.29199H5.8335" stroke="currentColor" stroke-width="1.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M1.6665 9.29121V5.44121C1.6665 3.74121 3.04151 2.36621 4.74151 2.36621H9.42484C11.1248 2.36621 12.4998 3.42454 12.4998 5.12454" stroke="currentColor" stroke-width="1.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M14.5665 10.1667C14.1498 10.5667 13.9498 11.1833 14.1165 11.8166C14.3248 12.5916 15.0915 13.0833 15.8915 13.0833H16.6665V14.2917C16.6665 16.1333 15.1748 17.625 13.3332 17.625H4.99984C3.15817 17.625 1.6665 16.1333 1.6665 14.2917V8.45833C1.6665 6.61667 3.15817 5.125 4.99984 5.125H13.3332C15.1665 5.125 16.6665 6.625 16.6665 8.45833V9.66663H15.7665C15.2998 9.66663 14.8748 9.84999 14.5665 10.1667Z" stroke="currentColor" stroke-width="1.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M18.3333 10.517V12.2337C18.3333 12.7003 17.95 13.0837 17.475 13.0837H15.8667C14.9667 13.0837 14.1417 12.4254 14.0667 11.5254C14.0167 11.0004 14.2167 10.5087 14.5667 10.167C14.875 9.85036 15.3 9.66699 15.7667 9.66699H17.475C17.95 9.66699 18.3333 10.0503 18.3333 10.517Z" stroke="currentColor" stroke-width="1.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        ),

    };

    return iconMap[name];
}

export default Icon;
