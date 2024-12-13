import React, {useState} from 'react';
import {CSSTransition} from 'react-transition-group';
import 'Styles/Style.css';
import 'Styles/Style_Block_Popup.css';
import 'Styles/Reset.css';

function Header() {
    const displayNone = {display: "none"};
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };

    // $('.sub_gnb_nav_inner > ul > li > h2 > a').bind('mouseover focus', function (e) {
    //     $('.sub_gnb_nav_inner > ul > li > h2 > a').removeClass('on');
    //     $('.gnb_sub_wrap').hide();
    //
    //     $(this).addClass('on');
    //     $(this).parent().next().stop(true, true).slideDown();
    //
    //     e.preventDefault();
    // });
    //
    // $('.sub_gnb_nav_inner').bind('mouseleave', function () {
    //     $('.sub_gnb_nav_inner > ul > li > h2 > a').removeClass('on');
    //     $('.gnb_sub_wrap').slideUp();
    // });

  return (
      <header>
          <div id="mstopWrap">
              <div id="gnb">
                  <div className="sub_gnb_wrap">
                      <div className="sub_gnb_wrap_inner">
                          <h1 className="logo"><a href="#" title="스타벅스 메인페이지">스타벅스 코리아</a></h1>
                          <nav className="util_nav">
                              <ul>
                                  {/*<li className="util_nav01 sign_out"><a href="#">Sign out</a></li>*/}
                                  <li className="util_nav01 sign_in"><a href="#">Sign In</a></li>
                                  <li className="util_nav02"><a href="#" data-href="#">My Starbucks</a></li>
                              </ul>
                          </nav>
                          <p className="btn_search">
                              <a href="#"><img alt="통합검색"
                                                                 src="//image.istarbucks.co.kr/common/img/common/icon_magnifier_black.png"/></a>
                              <label htmlFor="totalSearch" className="a11y">통합검색</label>
                              <input id="totalSearch" placeholder="통합검색" type="text"/>
                          </p>
                      </div>
                      <nav className="sub_gnb_nav">
                          <div className="sub_gnb_nav_inner">
                              <ul>
                                  <li className="gnb_nav01">
                                      <h2><a href="#" className="" onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOut}>COFFEE</a></h2>
                                      <div className="gnb_sub_wrap" style={{ display: isHovering ? 'block' : 'none' }}>
                                          <div className="gnb_sub">
                                              <div className="gnb_sub_inner">
                                                  <ul>
                                                      <li className="gnb_sub_ttl"><a href="#">커피</a></li>
                                                      <li><a href="#">스타벅스 원두</a></li>
                                                      <li><a href="#">스타벅스 비아</a></li>
                                                      <li><a href="#">스타벅스 오리가미</a></li>
                                                      <li><a href="#">스타벅스앳홈 by 캡슐</a></li>
                                                      <li><a href="#">나와 어울리는 커피</a></li>
                                                  </ul>
                                                  <ul>
                                                      <li className="gnb_sub_ttl"><a href="#">커피 이야기</a></li>
                                                      <li><a href="#">농장에서 우리의 손으로</a></li>
                                                      <li><a href="#">최상의 아라비카 원두</a></li>
                                                      <li><a href="#">스타벅스 로스트 스펙트럼</a></li>
                                                      <li><a href="#">스타벅스 디카페인</a></li>
                                                  </ul>
                                                  <ul>
                                                      <li className="gnb_sub_ttl"><a href="#">스타벅스 리저브</a></li>
                                                      <li><a href="#">RESERVE MAGAZINE</a></li>
                                                  </ul>
                                                  <ul>
                                                      <li className="gnb_sub_ttl"><a href="#">에스프레소 음료</a></li>
                                                      <li><a href="#">도피오</a></li>
                                                      <li><a href="#">에스프레소 마키아또</a></li>
                                                      <li><a href="#">아메리카노</a></li>
                                                      <li><a href="#">마키아또</a></li>
                                                      <li><a href="#">카푸치노</a></li>
                                                      <li><a href="#">라떼</a></li>
                                                      <li><a href="#">모카</a></li>
                                                  </ul>
                                                  <ul>
                                                      <li className="gnb_sub_ttl"><a href="#">최상의 커피를 즐기는 법</a></li>
                                                      <li><a href="#">커피 프레스</a></li>
                                                      <li><a href="#">푸어 오버</a></li>
                                                      <li><a href="#">아이스 푸어 오버</a></li>
                                                      <li><a href="#">커피 메이커</a></li>
                                                  </ul>
                                              </div>
                                          </div>
                                      </div>
                                  </li>
                                  <li className="gnb_nav02"><h2><a href="#" className="">MENU</a></h2>
                                      <div className="gnb_sub_wrap" style={displayNone}>
                                          <div className="gnb_sub">
                                              <div className="gnb_sub_inner">
                                                  <ul>
                                                      <li className="gnb_sub_ttl"><a href="#">음료</a></li>
                                                      <li><a href="#">콜드 브루</a></li>
                                                      <li><a href="#">브루드 커피</a></li>
                                                      <li><a href="#">에스프레소</a></li>
                                                      <li><a href="#">프라푸치노</a></li>
                                                      <li><a href="#">블렌디드</a></li>
                                                      <li><a href="#">스타벅스 리프레셔</a></li>
                                                      <li><a href="#">스타벅스 피지오</a></li>
                                                      <li><a href="#">티(티바나)</a></li>
                                                      <li><a href="#">기타 제조 음료</a></li>
                                                      <li><a href="#">스타벅스 주스(병음료)</a></li>
                                                  </ul>
                                                  <ul>
                                                      <li className="gnb_sub_ttl"><a href="#">푸드</a></li>
                                                      <li><a href="#">브레드</a></li>
                                                      <li><a href="#">케이크</a></li>
                                                      <li><a href="#">샌드위치 &amp; 샐러드</a></li>
                                                      <li><a href="#">따뜻한 푸드</a></li>
                                                      <li><a href="#">과일 &amp; 요거트</a></li>
                                                      <li><a href="#">스낵 &amp; 미니 디저트</a></li>
                                                      <li><a href="#">아이스크림</a></li>
                                                  </ul>
                                                  <ul>
                                                      <li className="gnb_sub_ttl"><a href="#">상품</a></li>
                                                      <li><a href="#">머그</a></li>
                                                      <li><a href="#">글라스</a></li>
                                                      <li><a href="#">플라스틱 텀블러</a></li>
                                                      <li><a href="#">스테인리스 텀블러</a></li>
                                                      <li><a href="#">보온병</a></li>
                                                      <li><a href="#">액세서리</a></li>
                                                      <li><a href="#">선물세트</a></li>
                                                      <li><a href="#">커피 용품</a></li>
                                                      <li><a href="#">패키지티(티바나)</a></li>
                                                      <li><a href="#">시럽</a></li>
                                                  </ul>
                                                  <ul>
                                                      <li className="gnb_sub_ttl"><a href="#">카드</a></li>
                                                      <li><a href="#">실물카드</a></li>
                                                      <li><a href="#">스타벅스 모바일 카드</a></li>
                                                  </ul>
                                                  <ul>
                                                      <li className="gnb_sub_ttl"><a>메뉴 이야기</a></li>
                                                      <li><a href="#">스타벅스 티바나</a></li>
                                                      <li><a href="#">스타벅스 콜드 브루</a></li>
                                                  </ul>
                                              </div>
                                          </div>
                                      </div>
                                  </li>
                                  <li className="gnb_nav03"><h2><a href="#" className="">STORE</a></h2>
                                      <div className="gnb_sub_wrap" style={displayNone}>
                                          <div className="gnb_sub">
                                              <div className="gnb_sub_inner">
                                                  <ul>
                                                      <li className="gnb_sub_ttl"><a href="#">매장 찾기</a></li>
                                                      <li><a href="#">퀵 검색</a></li>
                                                      <li><a href="#">지역 검색</a></li>
                                                  </ul>
                                                  <ul>
                                                      <li className="gnb_sub_ttl"><a href="#">드라이브 스루 매장</a></li>
                                                  </ul>
                                                  <ul>
                                                      <li className="gnb_sub_ttl"><a href="#">스타벅스 리저브 매장</a></li>
                                                  </ul>
                                                  <ul>
                                                      <li className="gnb_sub_ttl"><a href="#">커뮤니티 스토어 매장</a></li>
                                                  </ul>
                                              </div>
                                          </div>
                                      </div>
                                  </li>
                                  <li className="gnb_nav04"><h2><a href="#">STARBUCKS REWARDS</a></h2>
                                      <div className="gnb_sub_wrap" style={displayNone}>
                                          <div className="gnb_sub">
                                              <div className="gnb_sub_inner">
                                                  <ul>
                                                      <li className="gnb_sub_ttl"><a href="#">스타벅스
                                                          리워드</a></li>
                                                      <li><a href="#">스타벅스 리워드 소개</a></li>
                                                      <li><a href="#">등급 및 혜택</a></li>
                                                      <li><a href="#">스타벅스 별</a></li>
                                                      <li><a href="#">자주 하는
                                                          질문</a></li>
                                                  </ul>
                                                  <ul>
                                                      <li className="gnb_sub_ttl"><a href="#">스타벅스
                                                          카드</a></li>
                                                      <li><a href="#">스타벅스 카드 소개</a></li>
                                                      <li><a href="#">스타벅스 카드 갤러리</a></li>
                                                      <li><a href="#">자주 하는
                                                          질문</a></li>
                                                  </ul>
                                                  <ul>
                                                      <li className="gnb_sub_ttl"><a
                                                          href="#">스타벅스 모바일 카드</a></li>
                                                      <li><a href="#">스타벅스 모바일 카드 소개</a>
                                                      </li>
                                                      <li><a href="#">이용안내</a></li>
                                                      <li><a href="#">선물하기</a></li>
                                                      <li><a href="#">자주 하는
                                                          질문</a></li>
                                                  </ul>
                                              </div>
                                          </div>
                                      </div>
                                  </li>
                              </ul>
                          </div>
                      </nav>
                  </div>
              </div>
          </div>
          <div className="tablet_gnb_wrap">
              <h1 className="logo"><a href="#">스타벅스 코리아</a></h1>
              <nav className="tablet_gnb_sep">
                  <ul>
                      <li className="tablet_gnb01"><a href="#" role="button" title="마이 리워드 레이어 열기"></a></li>
                      <li className="tablet_gnb02"><a href="#" data-href="#"><span className="a11y">마이스타벅스</span></a></li>
                      <li className="tablet_gnb03"><a href="#"><span className="a11y">매장찾기</span></a></li>
                      <li className="tablet_gnb04"><a href="#"><span className="a11y" role="button">메뉴열기</span></a></li>
                  </ul>
              </nav>
          </div>
          <div className="mob_gnb_dimm"></div>
          <div className="mob_gnb_wrap">
              <div className="mob_gnb_wrap_inner">
                  <aside className="btn_gnb_close">
                      <a href="#" title="메뉴닫기" role="button">닫기</a>
                  </aside>
                  <div className="mob_gnb_search">
                      <div className="mob_gnb_search_inner">
                          <label htmlFor="search_text" className="a11y">검색어</label>
                      </div>
                  </div>
              </div>
          </div>
      </header>
  );
}

export default Header;
