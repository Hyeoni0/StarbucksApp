import { useRef } from 'react';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import 'Styles/Style.css';
import 'Styles/Style_Main.css';
import 'Styles/Style_Main_NewProm.css';
import 'Styles/Style_Block_Popup.css';
import 'Styles/Style_Top_Wrap.css';
import 'Styles/Reset.css';

function Main() {
    const opacity = {opacity: 1};
    const displayNone = {display: "none"};
    const displaySpace = {display: ""};

    gsap.registerPlugin(useGSAP);
    useGSAP(
        () => {
            const tl = gsap.timeline();
            tl.fromTo(".main-visual_slogan", { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.5 });
            tl.fromTo(".set_01", { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.5 });
            tl.fromTo(".set_02", { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.5 });
            tl.fromTo(".set_03", { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.5 });
            tl.fromTo(".set_04", { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.5 });
            tl.fromTo(".set_05", { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.5 });
            tl.fromTo(".btn_slogan", { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.5 });
        }
    );

  return (
      <div id="container">
          <div id="topWrap">
              <div className="layer_floating">
                  <div className="badge_cont1">
                      <a href="https://www.starbucks.co.kr/whats_new/campaign_view.do?pro_seq=2629">
                          <img src="https://image.istarbucks.co.kr/upload/banner/floatingbnr/Qyama9_20241028085033705.png" alt="2024 WINTER e-Frequency" className="pc-badge" />
                          <img src="https://image.istarbucks.co.kr/upload/banner/floatingbnr/Qyama9_20241028085038173.png" alt="2024 WINTER e-Frequency" className="mobile-badge" />
                      </a>
                  </div>
              </div>
              <div className="main-visual_wrap">
                  <div className="main-visual_inner">
                      <div className="main-visual_slogan" style={opacity}>
                          <img
                              src="https://image.istarbucks.co.kr/upload/common/img/main/2024/2024_november_top_txt01.png"
                              alt="Merrier Together" className="pc-slogan"/>
                          <img
                              src="https://image.istarbucks.co.kr/upload/common/img/main/2024/2024_november_top_txt01_mo.png"
                              alt="Merrier Together" className="m-slogan"/>
                      </div>
                      <div className="main-visual_set">
                          <div className="set_common set_01" style={opacity}>
                              <img
                                  src="https://image.istarbucks.co.kr/upload/common/img/main/2024/2024_november_top_drink01.png"
                                  alt="토피 넛 라떼" className="pc-drink"/>
                              <img
                                  src="https://image.istarbucks.co.kr/upload/common/img/main/2024/2024_november_top_drink01_mo.png"
                                  alt="토피 넛 라떼" className="m-drink"/>
                          </div>
                          <div className="set_common set_02" style={opacity}>
                              <img
                                  src="https://image.istarbucks.co.kr/upload/common/img/main/2024/2024_november_top_drink02.png"
                                  alt="더블 에스프레소 크림 라떼" className="pc-drink"/>
                              <img
                                  src="https://image.istarbucks.co.kr/upload/common/img/main/2024/2024_november_top_drink02_mo.png"
                                  alt="더블 에스프레소 크림 라떼" className="m-drink"/>
                          </div>
                          <div className="set_common set_03" style={opacity}>
                              <img
                                  src="https://image.istarbucks.co.kr/upload/common/img/main/2024/2024_november_top_drink03.png"
                                  alt="논알코올 홀리데이 패션 티 뱅쇼" className="pc-drink"/>
                              <img
                                  src="https://image.istarbucks.co.kr/upload/common/img/main/2024/2024_november_top_drink03_mo.png"
                                  alt="논알코올 홀리데이 패션 티 뱅쇼" className="m-drink"/>
                          </div>
                          <div className="set_common set_04" style={opacity}>
                              <img
                                  src="https://image.istarbucks.co.kr/upload/common/img/main/2024/2024_november_top_drink04.png"
                                  alt="골든 캐모마일 릴렉서" className="pc-drink"/>
                              <img
                                  src="https://image.istarbucks.co.kr/upload/common/img/main/2024/2024_november_top_drink04_mo.png"
                                  alt="골든 캐모마일 릴렉서" className="m-drink"/>
                          </div>
                          <div className="set_common set_05" style={opacity}>
                              <img
                                  src="https://image.istarbucks.co.kr/upload/common/img/main/2024/2024_november_top_drink05.png"
                                  alt="스타벅스 딸기 라떼" className="pc-drink"/>
                              <img
                                  src="https://image.istarbucks.co.kr/upload/common/img/main/2024/2024_november_top_drink05_mo.png"
                                  alt="스타벅스 딸기 라떼" className="m-drink"/>
                          </div>
                      </div>
                      <div className="btn_slogan" style={opacity}>
                          <a href="https://www.starbucks.co.kr/whats_new/campaign_view.do?pro_seq=2661">자세히 보기</a>
                      </div>
                  </div>
              </div>
          </div>
          <section className="line_notice">
              <div className="line_notice_left"></div>
              <div className="line_notice_right"></div>
              <div className="line_notice_bg">
                  <div className="line_notice_bgl">
                      <div className="line_notice_inner">
                          <dl className="line_notice_inner_l">
                              <dt className="notice_ttl">
                                  <img src="https://image.istarbucks.co.kr/common/img/common/notice_ttl.png" alt="공지사항"/>
                              </dt>
                              <dd>
                                  <ul className="news_result">
                                      <li style={displaySpace}><a href="/whats_new/noticeView.do?seq=5694">스타벅스 카드 이용약관 및 홈페이지 이용약관
                                          개정 안내</a></li>
                                      <li style={displayNone}><a href="/whats_new/noticeView.do?seq=5685">시스템 개선 및
                                          서비스 점검 안내</a></li>
                                      <li style={displayNone}><a href="/whats_new/noticeView.do?seq=5711">아이스 음료 11 종
                                          가격 인상 안내</a></li>
                                      <li style={displayNone}><a href="/whats_new/noticeView.do?seq=5705">사이렌 오더/딜리버스
                                          음료 기본 설정 변경 안내 (ICED → HOT)</a></li>
                                      <li style={displayNone}><a href="/whats_new/noticeView.do?seq=5707"> 시스템 개선 및
                                          서비스 점검 안내</a></li>
                                  </ul>
                              </dd>
                          </dl>
                          <p className="line_notice_inner_r">
                              <span><a href="/whats_new/notice_list.do" title="공지사항 더보기">더보기</a></span>
                          </p>
                      </div>
                  </div>
                  <div className="line_notice_bgr">
                      <a href="javascript:void(0);">
                          <p className="prom_ttl">스타벅스 프로모션</p>
                          <span className="btn_prom"><img src="//image.istarbucks.co.kr/common/img/common/btn_prom_down.png" alt="스타벅스 프로모션 펼쳐보기" role="button"/></span>
                      </a>
                  </div>
              </div>
          </section>
      </div>
  );
}

export default Main;
