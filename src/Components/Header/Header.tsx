import React from 'react';
import 'Styles/Style.css';
import 'Styles/Style_block_popup.css';
import 'Styles/Reset.css';

function Header() {
  return (
      <header>
          <div id="mstopWrap">
              <div id="gnb">
                  <div className="sub_gnb_wrap">
                      <div className="sub_gnb_wrap_inner">
                          <h1 className="logo"><a href="/" title="스타벅스 메인페이지">스타벅스 코리아</a></h1>
                          <nav className="util_nav">
                              <ul>
                                  {/*<li className="util_nav01 sign_out"><a href="javascript:void(0);">Sign out</a></li>*/}
                                  <li className="util_nav01 sign_in"><a href="javascript:void(0);">Sign In</a></li>
                                  <li className="util_nav02"><a href="javascript:void(0);" data-href="/my/index.do">My Starbucks</a></li>
                                  <li className="util_nav03"><a href="/util/index.do">Customer Service &amp; Ideas</a>
                                  </li>
                                  <li className="util_nav04"><a href="/store/store_map.do">Find a Store</a></li>
                              </ul>
                          </nav>
                          <p className="btn_search">
                              <a href="javascript:void(0);"><img alt="통합검색" src="//image.istarbucks.co.kr/common/img/common/icon_magnifier_black.png" /></a>
                              <label htmlFor="totalSearch" className="a11y">통합검색</label>
                              <input id="totalSearch" placeholder="통합검색" type="text" />
                          </p>
                      </div>
                  </div>
              </div>
          </div>
          <div className="tablet_gnb_wrap">
              <h1 className="logo"><a href="/">스타벅스 코리아</a></h1>
              <nav className="tablet_gnb_sep">
                  <ul>
                      <li className="tablet_gnb01"><a href="javascript:void(0);" role="button" title="마이 리워드 레이어 열기"></a></li>
                      <li className="tablet_gnb02"><a href="javascript:void(0);" data-href="/my/index.do"><span className="a11y">마이스타벅스</span></a></li>
                      <li className="tablet_gnb03"><a href="/store/store_map.do"><span className="a11y">매장찾기</span></a></li>
                      <li className="tablet_gnb04"><a href="javascript:void(0);"><span className="a11y" role="button">메뉴열기</span></a></li>
                  </ul>
              </nav>
          </div>
          <div className="mob_gnb_dimm"></div>
          <div className="mob_gnb_wrap">
              <div className="mob_gnb_wrap_inner">
                  <aside className="btn_gnb_close">
                      <a href="javascript:void(0);" title="메뉴닫기" role="button">닫기</a>
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
