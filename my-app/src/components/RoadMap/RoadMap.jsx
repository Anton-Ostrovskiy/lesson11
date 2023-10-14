import "./style.scss";
const RoadMap = () => {
  return (
    <section className="roadmap">
      <div className="container-roadmap">
        <div className="roadmap__wrap">
          <h2 className="roadmap__title">Our Software Development Cycle</h2>
          <div className="roadmap__content">
            <div className="roadmap__cycle">
              <div className="roadmap__circle border__green">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="28"
                  viewBox="0 0 34 28"
                  fill="none"
                >
                  <path
                    d="M15.2999 9.39978C15.0839 8.05578 14.6999 6.93977 14.1479 6.05177C13.5959 5.13977 12.8879 4.45577 12.0239 3.99977C11.1839 3.54377 10.1999 3.32778 9.07191 3.35178C8.03991 3.35178 7.12791 3.63977 6.33591 4.21577C5.56791 4.79177 5.1839 5.53578 5.1839 6.44778C5.1839 7.19178 5.38791 7.83978 5.79591 8.39178C6.22791 8.94378 6.87591 9.45978 7.73991 9.93978C8.60391 10.4198 9.6959 10.9358 11.0159 11.4878C11.9279 11.8478 12.8639 12.2678 13.8239 12.7478C14.7839 13.2278 15.6719 13.8038 16.4879 14.4758C17.3039 15.1238 17.9639 15.8918 18.4679 16.7798C18.9719 17.6438 19.2239 18.6638 19.2239 19.8398C19.2239 21.2558 18.8399 22.5158 18.0719 23.6198C17.3039 24.7238 16.2239 25.5878 14.8319 26.2118C13.4639 26.8118 11.8559 27.1118 10.0079 27.1118C9.0479 27.1118 8.00391 26.9558 6.87591 26.6438C5.77191 26.3558 4.72791 25.9238 3.74391 25.3478L3.8519 26.8598H1.07991V18.4358H3.45591C3.79191 20.4518 4.5599 21.9758 5.7599 23.0078C6.9839 24.0158 8.43591 24.5198 10.1159 24.5198C10.9799 24.5198 11.7359 24.3638 12.3839 24.0518C13.0319 23.7398 13.5359 23.3318 13.8959 22.8278C14.2559 22.2998 14.4359 21.7358 14.4359 21.1358C14.4359 20.2958 14.1359 19.5998 13.5359 19.0478C12.9599 18.4958 12.2279 18.0278 11.3399 17.6438C10.4759 17.2598 9.5879 16.8878 8.6759 16.5278C7.5239 16.0478 6.4439 15.5438 5.4359 15.0158C4.4519 14.4638 3.5879 13.8398 2.8439 13.1438C2.0999 12.4478 1.52391 11.6558 1.11591 10.7678C0.707913 9.85578 0.503906 8.81176 0.503906 7.63577C0.503906 6.89177 0.647898 6.12377 0.935898 5.33177C1.2239 4.51577 1.6919 3.77178 2.3399 3.09978C2.9879 2.40378 3.8519 1.83978 4.9319 1.40778C6.0119 0.975776 7.3439 0.759766 8.9279 0.759766C9.8879 0.759766 10.9319 0.90378 12.0599 1.19178C13.2119 1.47978 14.1959 1.91178 15.0119 2.48778L14.8679 1.01176H17.6759V9.39978H15.2999ZM23.3519 26.5358V24.1598C23.9039 24.1358 24.3599 24.0638 24.7199 23.9438C25.1039 23.8238 25.3919 23.5478 25.5839 23.1158C25.7999 22.6838 25.9079 21.9878 25.9079 21.0278V6.59177L21.9839 8.93179L20.6879 6.77178L28.9319 0.759766H31.0919V20.6318C31.0919 21.2798 31.0799 21.9038 31.0559 22.5038C31.0559 23.1038 31.0319 23.5598 30.9839 23.8718C31.3679 23.8238 31.8479 23.7998 32.4239 23.7998C33.0239 23.7758 33.4439 23.7638 33.6839 23.7638V26.5358H23.3519Z"
                    fill="#0EB27F"
                  />
                </svg>
              </div>
              <p className="roadmap__text color__research">Research</p>
            </div>
            <div className="roadmap__cycle">
              <div className="roadmap__circle border__mint">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="38"
                  height="28"
                  viewBox="0 0 38 28"
                  fill="none"
                >
                  <path
                    d="M15.0499 9.39978C14.8339 8.05578 14.4499 6.93977 13.8979 6.05177C13.3459 5.13977 12.6379 4.45577 11.7739 3.99977C10.9339 3.54377 9.94991 3.32778 8.82191 3.35178C7.78991 3.35178 6.87791 3.63977 6.08591 4.21577C5.31791 4.79177 4.9339 5.53578 4.9339 6.44778C4.9339 7.19178 5.13788 7.83978 5.54588 8.39178C5.97788 8.94378 6.62591 9.45978 7.48991 9.93978C8.35391 10.4198 9.4459 10.9358 10.7659 11.4878C11.6779 11.8478 12.6139 12.2678 13.5739 12.7478C14.5339 13.2278 15.4219 13.8038 16.2379 14.4758C17.0539 15.1238 17.7139 15.8918 18.2179 16.7798C18.7219 17.6438 18.9739 18.6638 18.9739 19.8398C18.9739 21.2558 18.5899 22.5158 17.8219 23.6198C17.0539 24.7238 15.9739 25.5878 14.5819 26.2118C13.2139 26.8118 11.6059 27.1118 9.7579 27.1118C8.7979 27.1118 7.75389 26.9558 6.62589 26.6438C5.52188 26.3558 4.47791 25.9238 3.49391 25.3478L3.6019 26.8598H0.82991V18.4358H3.20589C3.54189 20.4518 4.3099 21.9758 5.5099 23.0078C6.7339 24.0158 8.18589 24.5198 9.86589 24.5198C10.7299 24.5198 11.4859 24.3638 12.1339 24.0518C12.7819 23.7398 13.2859 23.3318 13.6459 22.8278C14.0059 22.2998 14.1859 21.7358 14.1859 21.1358C14.1859 20.2958 13.8859 19.5998 13.2859 19.0478C12.7099 18.4958 11.9779 18.0278 11.0899 17.6438C10.2259 17.2598 9.3379 16.8878 8.4259 16.5278C7.2739 16.0478 6.1939 15.5438 5.1859 15.0158C4.2019 14.4638 3.3379 13.8398 2.5939 13.1438C1.8499 12.4478 1.27389 11.6558 0.865891 10.7678C0.45789 9.85578 0.253906 8.81176 0.253906 7.63577C0.253906 6.89177 0.397898 6.12377 0.685898 5.33177C0.973898 4.51577 1.4419 3.77178 2.0899 3.09978C2.7379 2.40378 3.6019 1.83978 4.6819 1.40778C5.7619 0.975776 7.0939 0.759766 8.6779 0.759766C9.6379 0.759766 10.6819 0.90378 11.8099 1.19178C12.9619 1.47978 13.9459 1.91178 14.7619 2.48778L14.6179 1.01176H17.4259V9.39978H15.0499ZM21.6259 26.5358C21.6259 25.2878 21.7819 24.1718 22.0939 23.1878C22.4299 22.2038 22.8619 21.3158 23.3899 20.5238C23.9419 19.7318 24.5419 18.9998 25.1899 18.3278C25.8619 17.6558 26.5459 16.9958 27.2419 16.3478C28.9939 14.7158 30.2299 13.2398 30.9499 11.9198C31.6939 10.5998 32.0659 9.29177 32.0659 7.99577C32.0659 7.22777 31.9699 6.48376 31.7779 5.76376C31.5859 5.04376 31.2379 4.45577 30.7339 3.99977C30.2299 3.51977 29.5219 3.29178 28.6099 3.31578C27.9619 3.31578 27.3739 3.47178 26.8459 3.78378C26.3419 4.07178 25.9579 4.41977 25.6939 4.82777C25.9579 5.09177 26.1379 5.40376 26.2339 5.76376C26.3539 6.12376 26.4139 6.43578 26.4139 6.69978C26.4139 6.96378 26.3299 7.28777 26.1619 7.67177C25.9939 8.03177 25.7299 8.34378 25.3699 8.60778C25.0339 8.87178 24.5659 9.00377 23.9659 9.00377C23.2219 8.95577 22.6459 8.67977 22.2379 8.17577C21.8539 7.67177 21.6619 7.07177 21.6619 6.37577C21.6619 5.82377 21.8299 5.23578 22.1659 4.61178C22.5019 3.96378 23.0059 3.35178 23.6779 2.77578C24.3499 2.17578 25.1659 1.69577 26.1259 1.33577C27.1099 0.95177 28.2379 0.759766 29.5099 0.759766C30.4699 0.759766 31.4179 0.879774 32.3539 1.11977C33.3139 1.35977 34.1899 1.74378 34.9819 2.27178C35.7739 2.79978 36.3979 3.49578 36.8539 4.35978C37.3339 5.22378 37.5739 6.29178 37.5739 7.56378C37.5739 8.16378 37.4659 8.79976 37.2499 9.47176C37.0339 10.1198 36.6379 10.8398 36.0619 11.6318C35.4859 12.3998 34.6819 13.2878 33.6499 14.2958C32.6179 15.3038 31.2859 16.4798 29.6539 17.8238C28.3339 18.9038 27.3619 19.8878 26.7379 20.7758C26.1139 21.6638 25.7419 22.3478 25.6219 22.8278L32.6779 23.0078C33.2299 23.0318 33.6979 22.9958 34.0819 22.8998C34.4899 22.7798 34.8019 22.5518 35.0179 22.2158C35.2579 21.8558 35.3779 21.3398 35.3779 20.6678H37.6819L37.3939 26.5358H21.6259Z"
                    fill="#61FFCD"
                  />
                </svg>
              </div>
              <p className="roadmap__text color__prototyping">Prototyping</p>
            </div>
            <div className="roadmap__cycle">
              <div className="roadmap__circle border__darkgreen">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="39"
                  height="28"
                  viewBox="0 0 39 28"
                  fill="none"
                >
                  <path
                    d="M14.7999 9.39978C14.5839 8.05578 14.1999 6.93977 13.6479 6.05177C13.0959 5.13977 12.3879 4.45577 11.5239 3.99977C10.6839 3.54377 9.69991 3.32778 8.57191 3.35178C7.53991 3.35178 6.62791 3.63977 5.83591 4.21577C5.06791 4.79177 4.6839 5.53578 4.6839 6.44778C4.6839 7.19178 4.88788 7.83978 5.29588 8.39178C5.72788 8.94378 6.37591 9.45978 7.23991 9.93978C8.10391 10.4198 9.1959 10.9358 10.5159 11.4878C11.4279 11.8478 12.3639 12.2678 13.3239 12.7478C14.2839 13.2278 15.1719 13.8038 15.9879 14.4758C16.8039 15.1238 17.4639 15.8918 17.9679 16.7798C18.4719 17.6438 18.7239 18.6638 18.7239 19.8398C18.7239 21.2558 18.3399 22.5158 17.5719 23.6198C16.8039 24.7238 15.7239 25.5878 14.3319 26.2118C12.9639 26.8118 11.3559 27.1118 9.5079 27.1118C8.5479 27.1118 7.50388 26.9558 6.37589 26.6438C5.27188 26.3558 4.22791 25.9238 3.24391 25.3478L3.3519 26.8598H0.57991V18.4358H2.95589C3.29189 20.4518 4.0599 21.9758 5.2599 23.0078C6.4839 24.0158 7.93589 24.5198 9.61589 24.5198C10.4799 24.5198 11.2359 24.3638 11.8839 24.0518C12.5319 23.7398 13.0359 23.3318 13.3959 22.8278C13.7559 22.2998 13.9359 21.7358 13.9359 21.1358C13.9359 20.2958 13.6359 19.5998 13.0359 19.0478C12.4599 18.4958 11.7279 18.0278 10.8399 17.6438C9.9759 17.2598 9.0879 16.8878 8.1759 16.5278C7.0239 16.0478 5.9439 15.5438 4.9359 15.0158C3.9519 14.4638 3.0879 13.8398 2.3439 13.1438C1.5999 12.4478 1.02389 11.6558 0.615891 10.7678C0.20789 9.85578 0.00390625 8.81176 0.00390625 7.63577C0.00390625 6.89177 0.147898 6.12377 0.435898 5.33177C0.723898 4.51577 1.1919 3.77178 1.8399 3.09978C2.4879 2.40378 3.3519 1.83978 4.4319 1.40778C5.5119 0.975776 6.8439 0.759766 8.4279 0.759766C9.3879 0.759766 10.4319 0.90378 11.5599 1.19178C12.7119 1.47978 13.6959 1.91178 14.5119 2.48778L14.3679 1.01176H17.1759V9.39978H14.7999ZM29.0432 27.1118C27.2432 27.1118 25.7656 26.8478 24.6181 26.3198C23.4631 25.7678 22.6082 25.0838 22.0599 24.2678C21.5079 23.4518 21.2319 22.6358 21.2319 21.8198C21.2319 21.0998 21.4479 20.4758 21.8799 19.9478C22.3381 19.3958 22.9381 19.1078 23.6806 19.0838C24.2806 19.0598 24.7457 19.1798 25.0832 19.4438C25.4207 19.7078 25.6606 20.0198 25.8031 20.3798C25.9456 20.7398 26.0207 21.0758 26.0207 21.3878C26.0207 21.6278 25.9682 21.9038 25.8782 22.2158C25.7807 22.5038 25.6382 22.7798 25.4432 23.0438C25.7057 23.4998 26.1406 23.8598 26.7406 24.1238C27.3631 24.3638 28.0082 24.4838 28.6832 24.4838C30.1982 24.4838 31.3382 24.0278 32.1032 23.1158C32.8682 22.2038 33.2581 21.0758 33.2581 19.7318C33.2581 18.9158 33.1006 18.0998 32.7856 17.2838C32.4781 16.4678 31.9382 15.7958 31.1657 15.2678C30.4007 14.7158 29.3207 14.4518 27.9257 14.4758C27.7607 14.4758 27.4606 14.4878 27.0257 14.5118C26.5982 14.5358 26.2682 14.5598 26.0582 14.5838V11.9918C26.2457 12.0158 26.4256 12.0278 26.5981 12.0278C26.7631 12.0278 26.9281 12.0278 27.1006 12.0278C28.1581 12.0278 29.0582 11.8358 29.8007 11.4518C30.5432 11.0678 31.1057 10.5398 31.4882 9.86777C31.9007 9.19578 32.1182 8.41578 32.1407 7.52778C32.1632 6.68778 32.0582 5.95577 31.8182 5.33177C31.6007 4.68377 31.2407 4.17978 30.7382 3.81978C30.2582 3.45978 29.6056 3.27978 28.7881 3.27978C28.1431 3.27978 27.5581 3.43577 27.0257 3.74777C26.5007 4.05977 26.1406 4.40777 25.9456 4.79177C26.1631 5.05577 26.3057 5.36778 26.3807 5.72778C26.4782 6.06378 26.5232 6.33976 26.5232 6.55576C26.5232 6.84376 26.4406 7.17978 26.2681 7.56378C26.1256 7.92378 25.8781 8.23577 25.5181 8.49977C25.1581 8.76377 24.6782 8.88378 24.0782 8.85978C23.3282 8.83578 22.7656 8.57178 22.3831 8.06778C21.9999 7.56378 21.8079 6.96378 21.8079 6.26778C21.8079 5.54778 22.0839 4.75578 22.6382 3.89178C23.1857 3.02778 24.0257 2.29578 25.1582 1.69578C26.2832 1.07178 27.6856 0.759766 29.3656 0.759766C30.8581 0.759766 32.2006 0.963773 33.4007 1.37177C34.6231 1.77977 35.5832 2.45176 36.2807 3.38776C37.0007 4.32376 37.3607 5.57177 37.3607 7.13177C37.3607 7.75577 37.1806 8.46377 36.8206 9.25577C36.4831 10.0238 35.9206 10.7318 35.1256 11.3798C34.3381 12.0278 33.2807 12.5078 31.9607 12.8198C34.2632 13.2278 35.9581 14.0558 37.0381 15.3038C38.1406 16.5518 38.6881 17.9438 38.6881 19.4798C38.6881 21.1118 38.2681 22.5038 37.4281 23.6558C36.6181 24.7838 35.4781 25.6478 34.0081 26.2478C32.5681 26.8238 30.9182 27.1118 29.0432 27.1118Z"
                    fill="#0A7F5A"
                  />
                </svg>
              </div>
              <p className="roadmap__text color__design">Design</p>
            </div>
            <div className="roadmap__cycle">
              <div className="roadmap__circle border__lightgreen">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="39"
                  height="27"
                  viewBox="0 0 39 27"
                  fill="none"
                >
                  <path
                    d="M15.0006 8.73083C14.7831 7.38684 14.4007 6.27082 13.8457 5.38282C13.2982 4.47082 12.5856 3.78683 11.7231 3.33083C10.8831 2.87483 9.90067 2.65884 8.77567 2.68284C7.74067 2.68284 6.82565 2.97082 6.03815 3.54682C5.26565 4.12282 4.88312 4.86683 4.88312 5.77883C4.88312 6.52283 5.08567 7.17084 5.49817 7.72284C5.92567 8.27484 6.57814 8.79084 7.44064 9.27084C8.30314 9.75084 9.39814 10.2668 10.7181 10.8188C11.6256 11.1788 12.5631 11.5988 13.5231 12.0788C14.4831 12.5588 15.3757 13.1348 16.1857 13.8068C17.0032 14.4548 17.6632 15.2228 18.1657 16.1108C18.6757 16.9748 18.9232 17.9948 18.9232 19.1708C18.9232 20.5868 18.5407 21.8468 17.7757 22.9508C17.0032 24.0548 15.9231 24.9188 14.5356 25.5428C13.1631 26.1428 11.5582 26.4428 9.70566 26.4428C8.74566 26.4428 7.70312 26.2868 6.57812 25.9748C5.47563 25.6868 4.42568 25.2548 3.44318 24.6788L3.55569 26.1908H0.78064V17.7668H3.15817C3.49567 19.7828 4.26063 21.3068 5.46063 22.3388C6.68313 23.3468 8.13818 23.8508 9.81818 23.8508C10.6807 23.8508 11.4382 23.6948 12.0832 23.3828C12.7357 23.0708 13.2381 22.6628 13.5981 22.1588C13.9581 21.6308 14.1382 21.0668 14.1382 20.4668C14.1382 19.6268 13.8381 18.9308 13.2381 18.3788C12.6606 17.8268 11.9257 17.3588 11.0407 16.9748C10.1782 16.5908 9.28564 16.2188 8.37814 15.8588C7.22314 15.3788 6.14318 14.8748 5.13818 14.3468C4.15568 13.7948 3.28562 13.1708 2.54312 12.4748C1.80062 11.7788 1.22318 10.9868 0.818176 10.0988C0.405676 9.18684 0.203125 8.14282 0.203125 6.96682C0.203125 6.22282 0.345684 5.45483 0.638184 4.66283C0.923184 3.84683 1.39568 3.10284 2.04068 2.43084C2.68568 1.73484 3.55565 1.17083 4.63565 0.738831C5.71565 0.306831 7.04311 0.0908203 8.62561 0.0908203C9.58561 0.0908203 10.6357 0.234835 11.7607 0.522835C12.9157 0.810835 13.8981 1.24283 14.7156 1.81883L14.5656 0.342819H17.3781V8.73083H15.0006ZM35.3556 19.9628C35.3556 20.6108 35.3482 21.2348 35.3257 21.8348C35.2957 22.4348 35.2657 22.8908 35.2132 23.2028C35.6257 23.1548 36.1131 23.1308 36.6906 23.1308C37.2681 23.1068 37.6731 23.0948 37.9131 23.0948V25.8668H27.6531V23.4908H27.8706C28.4256 23.4908 28.8906 23.4308 29.2731 23.3108C29.6856 23.1908 29.9931 22.9148 30.2106 22.4828C30.4506 22.0268 30.5706 21.3188 30.5706 20.3588V19.3508H20.8131V15.9668L33.1657 0.0908203H35.3556V16.1108H38.8882V19.3508H35.3556V19.9628ZM30.5332 7.65083L24.1657 16.0028L30.5706 16.0388L30.6082 7.65083H30.5332Z"
                    fill="#49BF9A"
                  />
                </svg>
              </div>
              <p className="roadmap__text color__development">Development</p>
            </div>
            <div className="roadmap__cycle">
              <div className="roadmap__circle border__test">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="39"
                  height="29"
                  viewBox="0 0 39 29"
                  fill="none"
                >
                  <path
                    d="M15.3014 10.6999C15.0839 9.35591 14.7015 8.23989 14.1465 7.35189C13.599 6.43989 12.8864 5.7559 12.0239 5.2999C11.1839 4.8439 10.2014 4.62791 9.07645 4.65191C8.04145 4.65191 7.12643 4.93989 6.33893 5.51589C5.56643 6.09189 5.1839 6.8359 5.1839 7.7479C5.1839 8.4919 5.38645 9.13991 5.79895 9.69191C6.22645 10.2439 6.87892 10.7599 7.74142 11.2399C8.60392 11.7199 9.69892 12.2359 11.0189 12.7879C11.9264 13.1479 12.8639 13.5679 13.8239 14.0479C14.7839 14.5279 15.6764 15.1039 16.4865 15.7759C17.3039 16.4239 17.964 17.1919 18.4665 18.0799C18.9765 18.9439 19.224 19.9639 19.224 21.1399C19.224 22.5559 18.8414 23.8159 18.0764 24.9199C17.3039 26.0239 16.2239 26.8879 14.8364 27.5119C13.4639 28.1119 11.8589 28.4119 10.0064 28.4119C9.04644 28.4119 8.00391 28.2559 6.87891 27.9439C5.77641 27.6559 4.72646 27.2239 3.74396 26.6479L3.85648 28.1599H1.08142V19.7359H3.45895C3.79645 21.7519 4.56141 23.2759 5.76141 24.3079C6.98391 25.3159 8.43896 25.8199 10.119 25.8199C10.9815 25.8199 11.739 25.6639 12.384 25.3519C13.0365 25.0399 13.5389 24.6319 13.8989 24.1279C14.2589 23.5999 14.439 23.0359 14.439 22.4359C14.439 21.5959 14.1389 20.8999 13.5389 20.3479C12.9614 19.7959 12.2265 19.3279 11.3415 18.9439C10.479 18.5599 9.58642 18.1879 8.67892 17.8279C7.52392 17.3479 6.44396 16.8439 5.43896 16.3159C4.45646 15.7639 3.5864 15.1399 2.8439 14.4439C2.1014 13.7479 1.52396 12.9559 1.11896 12.0679C0.706458 11.1559 0.503906 10.1119 0.503906 8.93589C0.503906 8.19189 0.646465 7.4239 0.938965 6.6319C1.22396 5.8159 1.69646 5.07191 2.34146 4.39991C2.98646 3.70391 3.85643 3.1399 4.93643 2.7079C6.01643 2.2759 7.34389 2.05989 8.92639 2.05989C9.88639 2.05989 10.9364 2.20391 12.0614 2.49191C13.2164 2.77991 14.1989 3.2119 15.0164 3.7879L14.8664 2.31189H17.6789V10.6999H15.3014ZM29.4689 28.4119C27.9089 28.4119 26.5814 28.1599 25.4789 27.6559C24.3689 27.1519 23.5214 26.5279 22.9214 25.7839C22.3439 25.0159 22.0589 24.2479 22.0589 23.4799C22.0589 22.7839 22.2689 22.1599 22.7039 21.6079C23.1389 21.0559 23.724 20.7679 24.4665 20.7439C25.0665 20.7199 25.539 20.8399 25.869 21.1039C26.2065 21.3439 26.4464 21.6439 26.5889 22.0039C26.7389 22.3639 26.8065 22.7119 26.8065 23.0479C26.8065 23.2399 26.7689 23.4799 26.7014 23.7679C26.6489 24.0319 26.5589 24.2839 26.4089 24.5239C26.5289 24.7879 26.7464 25.0279 27.0614 25.2439C27.3689 25.4359 27.7214 25.5919 28.1039 25.7119C28.5089 25.8079 28.8839 25.8559 29.2214 25.8559C30.1814 25.8559 30.9464 25.6039 31.5239 25.0999C32.1239 24.5959 32.559 23.9479 32.8215 23.1559C33.084 22.3639 33.2189 21.5599 33.2189 20.7439C33.2189 20.1919 33.1815 19.5679 33.1065 18.8719C33.039 18.1759 32.8589 17.4919 32.5664 16.8199C32.3039 16.1479 31.8689 15.5959 31.2689 15.1639C30.6989 14.7319 29.9039 14.5159 28.8989 14.5159C28.5614 14.5159 28.1639 14.5639 27.7064 14.6599C27.2489 14.7319 26.7464 14.8639 26.1989 15.0559C25.6664 15.2479 25.1264 15.5119 24.5789 15.8479L23.0264 14.6599L22.884 2.63589H32.2064C33.0464 2.63589 33.7064 2.50391 34.1864 2.23991C34.6889 1.95191 34.9439 1.3039 34.9439 0.295898H37.209L36.9614 6.1279L25.6589 6.34389V12.7519C26.2064 12.5119 26.8889 12.3079 27.7064 12.1399C28.5239 11.9719 29.289 11.8879 30.009 11.8879C31.5015 11.8879 32.7989 12.1039 33.9014 12.5359C35.0039 12.9679 35.9189 13.5679 36.6389 14.3359C37.3589 15.0799 37.8839 15.9439 38.2214 16.9279C38.5814 17.8879 38.7614 18.9079 38.7614 19.9879C38.7614 21.8359 38.3039 23.3959 37.3889 24.6679C36.5039 25.9159 35.349 26.8519 33.939 27.4759C32.5215 28.0999 31.0289 28.4119 29.4689 28.4119Z"
                    fill="#14FFB5"
                  />
                </svg>
              </div>
              <p className="roadmap__text color__testing">Testing</p>
            </div>
            <svg
              className="line"
              width="1232"
              height="322"
              viewBox="0 0 1232 322"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_0_1)">
                <path
                  className="pulse-1"
                  d="M289.75 159.035C289.75 174.695 286.52 190.202 280.244 204.67C273.969 219.138 264.77 232.284 253.175 243.358C241.579 254.431 227.813 263.215 212.663 269.208C197.512 275.2 181.274 278.285 164.875 278.285C148.476 278.285 132.238 275.2 117.087 269.208C101.936 263.215 88.171 254.431 76.5752 243.358C64.9795 232.284 55.7807 219.138 49.5055 204.67C43.2302 190.202 40 174.695 40 159.035H64.975C64.975 171.563 67.5587 183.969 72.5792 195.543C77.5997 207.118 84.9587 217.634 94.2347 226.493C103.511 235.352 114.525 242.379 126.645 247.173C138.765 251.968 151.756 254.435 164.875 254.435C177.994 254.435 190.985 251.968 203.105 247.173C215.225 242.379 226.239 235.352 235.515 226.493C244.791 217.634 252.15 207.118 257.171 195.543C262.191 183.969 264.775 171.563 264.775 159.035H289.75Z"
                  fill="#0EB27F"
                />
              </g>
              <g filter="url(#filter1_d_0_1)">
                <path
                  className="pulse-2"
                  d="M741.25 153.785C741.25 169.445 738.003 184.952 731.688 199.42C725.372 213.888 716.117 227.034 704.455 238.108C692.792 249.181 678.94 257.965 663.7 263.958C648.46 269.95 632.125 273.035 615.625 273.035C599.128 273.035 582.792 269.95 567.551 263.958C552.309 257.965 538.46 249.181 526.795 238.108C515.129 227.034 505.876 213.888 499.562 199.42C493.25 184.952 490 169.445 490 153.785H515.125C515.125 166.313 517.725 178.719 522.775 190.293C527.826 201.868 535.229 212.384 544.561 221.243C553.893 230.102 564.972 237.129 577.165 241.923C589.358 246.718 602.427 249.185 615.625 249.185C628.825 249.185 641.89 246.718 654.085 241.923C666.28 237.129 677.357 230.102 686.688 221.243C696.025 212.384 703.428 201.868 708.475 190.293C713.523 178.719 716.125 166.313 716.125 153.785H741.25Z"
                  fill="#0A7F5A"
                />
              </g>
              <g filter="url(#filter2_d_0_1)">
                <path
                  className="pulse-3"
                  d="M1191.25 159.035C1191.25 174.695 1188.02 190.202 1181.75 204.67C1175.47 219.138 1166.27 232.284 1154.67 243.358C1143.08 254.431 1129.31 263.215 1114.16 269.208C1099.01 275.2 1082.78 278.285 1066.38 278.285C1049.97 278.285 1033.74 275.2 1018.59 269.208C1003.44 263.215 989.673 254.431 978.078 243.358C966.483 232.284 957.28 219.138 951.003 204.67C944.733 190.202 941.5 174.695 941.5 159.035H966.475C966.475 171.563 969.062 183.969 974.08 195.543C979.097 207.118 986.455 217.634 995.733 226.493C1005.01 235.352 1016.03 242.379 1028.15 247.173C1040.27 251.968 1053.26 254.435 1066.38 254.435C1079.49 254.435 1092.48 251.968 1104.6 247.173C1116.72 242.379 1127.74 235.352 1137.02 226.493C1146.29 217.634 1153.65 207.118 1158.67 195.543C1163.69 183.969 1166.27 171.563 1166.27 159.035H1191.25Z"
                  fill="#14FFB5"
                />
              </g>
              <g filter="url(#filter3_d_0_1)">
                <path
                  className="pulse-4"
                  d="M265.156 159.519C265.135 143.851 268.347 128.331 274.608 113.846C280.87 99.3604 290.057 86.1927 301.647 75.0949C313.237 63.9964 327.002 55.1847 342.156 49.1637C357.31 43.1419 373.557 40.0279 389.968 40.0002C406.38 39.9724 422.635 43.0302 437.804 49.0002C452.974 54.9694 466.763 63.7339 478.382 74.7927C490.001 85.8514 499.224 98.9877 505.524 113.451C511.823 127.915 515.077 143.424 515.098 159.091L490.103 159.134C490.087 146.6 487.484 134.193 482.444 122.622C477.405 111.051 470.026 100.542 460.731 91.6947C451.435 82.8484 440.405 75.8367 428.269 71.0607C416.133 66.2854 403.129 63.8389 390 63.8614C376.871 63.8832 363.874 66.3747 351.75 71.1919C339.627 76.0092 328.615 83.0584 319.343 91.9369C310.071 100.815 302.721 111.35 297.712 122.938C292.703 134.526 290.134 146.942 290.15 159.476L265.156 159.519Z"
                  fill="#61FFCD"
                />
              </g>
              <g filter="url(#filter4_d_0_1)">
                <path
                  className="pulse-5"
                  d="M716.164 159.732C716.149 144.064 719.359 128.544 725.622 114.06C731.877 99.5741 741.064 86.4063 752.659 75.3078C764.247 64.2093 778.009 55.3983 793.167 49.3766C808.324 43.3548 824.569 40.2416 840.979 40.2131C857.389 40.1853 873.642 43.2431 888.814 49.2131C903.987 55.1823 917.772 63.9468 929.389 75.0056C941.014 86.0643 950.232 99.2006 956.532 113.664C962.832 128.128 966.087 143.637 966.109 159.304L941.112 159.347C941.097 146.813 938.494 134.406 933.454 122.835C928.414 111.264 921.034 100.755 911.742 91.9083C902.449 83.0613 891.417 76.0496 879.282 71.2736C867.147 66.4983 854.142 64.0518 841.009 64.0743C827.884 64.0968 814.887 66.5876 802.759 71.4048C790.639 76.2221 779.629 83.2713 770.352 92.1498C761.082 101.028 753.732 111.563 748.722 123.151C743.712 134.739 741.147 147.155 741.162 159.689L716.164 159.732Z"
                  fill="#49BF9A"
                />
              </g>
              <path
                d="M52.375 169.535C59.2095 169.535 64.75 163.995 64.75 157.16C64.75 150.326 59.2095 144.785 52.375 144.785C45.5405 144.785 40 150.326 40 157.16C40 163.995 45.5405 169.535 52.375 169.535Z"
                fill="#0EB27F"
              />
              <path
                d="M1178.88 170.285C1185.71 170.285 1191.25 164.745 1191.25 157.91C1191.25 151.076 1185.71 145.535 1178.88 145.535C1172.04 145.535 1166.5 151.076 1166.5 157.91C1166.5 164.745 1172.04 170.285 1178.88 170.285Z"
                fill="#14FFB5"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadMap;
