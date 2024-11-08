import React from 'react';
import 'Styles/Style.css';
import 'Styles/Style_Block_Popup.css';
import 'Styles/Reset.css';

function Footer() {
  return (
      <footer id="footer">
          <div className="footer_wrap ">
              <div className="footer_menus">
                  <ul className="footer_first_menu">
                      <li className="footer_menu_ttl">
                          <a className="en" href="javascript:void(0);">CUSTOMER SERVICE &amp; IDEAS<span className="footer_arrow_down"></span></a>
                      </li>
                      <li><a href="/">자주 하는 질문</a></li>
                      <li><a href="/">고객의 소리</a></li>
                      <li className="footer_2depth_ttl">
                          <a href="javascript:void(0)">스타벅스 이용 팁<span className="footer_arrow_down"></span></a>
                          <ul>
                              <li><a href="/">홈페이지 이용 팁</a></li>
                              <li><a href="/">애플리케이션 이용 팁</a></li>
                              <li><a href="/">제휴카드 안내</a></li>
                          </ul>
                      </li>
                      <li><a href="/">고객 경험 설문조사</a></li>
                  </ul>
                  <ul>
                      <li className="footer_menu_ttl"><a className="en" href="javascript:void(0);">COMPANY<span className="footer_arrow_down"></span></a></li>
                      <li><a href="/">한눈에 보기</a></li>
                      <li><a href="/">스타벅스 사명</a></li>
                      <li className="footer_2depth_ttl">
                          <a href="javascript:void(0)">스타벅스 소개<span className="footer_arrow_down"></span></a>
                          <ul>
                              <li><a href="/">스타벅스 코리아</a></li>
                              <li><a href="/">주요 연혁</a></li>
                              <li><a href="/">스타벅스 이야기</a></li>
                          </ul>
                      </li>
                      <li className="footer_2depth_ttl2"><a href="javascript:void(0)">컴플라이언스<span className="footer_arrow_down"></span></a>
                          <ul>
                              <li><a href="/">CEO 컴플라이언스 메시지</a></li>
                              <li><a href="/">글로벌 컴플라이언스 방침</a></li>
                          </ul>
                      </li>
                      <li><a href="/">국내 뉴스룸</a></li>
                      <li><a href="/">세계의 스타벅스</a></li>
                      <li><a href="https://news.starbucks.com" target="_blank">글로벌 뉴스룸</a></li>
                  </ul>
                  <ul>
                      <li className="footer_menu_ttl"><a className="en txt_under" id="goPage" href="javascript:void(0);">
                          CORPORATE SALES<span className="footer_arrow_down"></span></a>
                      </li>
                      <li><a href="/">단체 및 기업 구매 안내</a></li>
                      <li><a href="/">단체 주문 배달 안내</a></li>
                  </ul>
                  <ul>
                      <li className="footer_menu_ttl"><a className="en" href="javascript:void(0);">
                          PARTNERSHIP<span className="footer_arrow_down"></span></a></li>
                      <li><a href="/">신규 입점 제의</a></li>
                      <li><a href="/">협력 고객사 등록신청</a></li>
                      <li><a href="/">중개업체 확인</a></li>
                  </ul>
                  <ul>
                      <li className="footer_menu_ttl"><a className="en" href="javascript:void(0);">
                          ONLINE COMMUNITY<span className="footer_arrow_down"></span></a></li>
                      <li><a href="https://www.facebook.com/starbuckskorea" target="_blank">페이스북</a></li>
                      <li><a href="https://twitter.com/StarbucksKorea" target="_blank">트위터</a></li>
                      <li><a href="https://www.youtube.com/user/starbuckskorea" target="_blank">유튜브</a></li>
                      <li><a href="https://instagram.com/starbuckskorea/" target="_blank">인스타그램</a></li>
                  </ul>
                  <ul>
                      <li className="footer_menu_ttl"><a className="en" href="javascript:void(0);">RECRUIT<span className="footer_arrow_down"></span></a></li>
                      <li><a href="https://job.shinsegae.com/job_intro/starbucks/starbucks01.jsp">채용 소개</a></li>
                      <li><a href="https://job.shinsegae.com/recruit_info/notice/notice02_list.jsp?isSearch=Y&amp;tabKey0=&amp;notino=&amp;searchWord0=&amp;orderKey0=1&amp;strCareerVals=&amp;strRtlVals=&amp;strFodhtlVals=&amp;strFshnlvngVals=&amp;strFbbsnsVals=&amp;strRtlsprtVals=&amp;rtlTogYn=Y&amp;fodhtlTogYn=Y&amp;FshnlvngTogYn=Y&amp;fbbsnsTogYn=Y&amp;rtlsprtTogYn=Y&amp;searchWord1=&amp;careerAllVal=&amp;affFbbsnsVal=EE0"
                          target="_blank">채용 지원하기</a></li>
                  </ul>
              </div>
          </div>
      </footer>
  );
}

export default Footer;
