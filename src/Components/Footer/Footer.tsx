import React from 'react';
import 'Styles/Style.css';
import 'Styles/Style_block_popup.css';
import 'Styles/Reset.css';

function Footer() {
  return (
      <footer id="footer">
          <div className="footer_wrap ">
              <div className="footer_menus">
                  <ul className="footer_first_menu">
                      <li className="footer_menu_ttl"><a className="en" href="javascript:void(0);">CUSTOMER
                          SERVICE &amp; IDEAS<span className="footer_arrow_down"></span></a></li>
                      <li><a href="/util/faq.do">자주 하는 질문</a></li>
                      <li><a href="/customer/suggestionWrite.do">고객의 소리</a></li>
                      <li className="footer_2depth_ttl"><a href="javascript:void(0)">스타벅스 이용 팁<span
                          className="footer_arrow_down"></span></a>
                          <ul>
                              <li><a href="/util/web_tip.do">홈페이지 이용 팁</a></li>
                              <li><a href="/util/app_tip.do">애플리케이션 이용 팁</a></li>
                              <li><a href="/util/partnership_card.do">제휴카드 안내</a></li>
                          </ul>
                      </li>
                      <li><a href="/util/online_survey.do">고객 경험 설문조사</a></li>
                  </ul>
                  <ul>
                      <li className="footer_menu_ttl"><a className="en" href="javascript:void(0);">COMPANY<span
                          className="footer_arrow_down"></span></a></li>
                      <li><a href="/footer/company/index.do">한눈에 보기</a></li>
                      <li><a href="/footer/company/mission.do">스타벅스 사명</a></li>
                      <li className="footer_2depth_ttl"><a href="javascript:void(0)">스타벅스 소개<span
                          className="footer_arrow_down"></span></a>
                          <ul>
                              <li><a href="/footer/company/starbucks_information.do">스타벅스 코리아</a></li>
                              <li><a href="/footer/company/starbucks_history.do">주요 연혁</a></li>
                              <li><a href="/footer/company/starbucks_story.do">스타벅스 이야기</a></li>
                          </ul>
                      </li>
                      <li className="footer_2depth_ttl2"><a href="javascript:void(0)">컴플라이언스<span
                          className="footer_arrow_down"></span></a>
                          <ul>
                              <li><a href="/footer/company/compliance_ceo.do">CEO 컴플라이언스 메시지</a></li>
                              <li><a href="/footer/company/compliance_policy.do">글로벌 컴플라이언스 방침</a></li>
                          </ul>
                      </li>
                      <li><a href="/footer/company/news_list.do">국내 뉴스룸</a></li>
                      <li><a href="/footer/company/global_starbucks.do">세계의 스타벅스</a></li>
                      <li><a href="https://news.starbucks.com" target="_blank">글로벌 뉴스룸</a></li>
                  </ul>
                  <ul>
                      <li className="footer_menu_ttl"><a className="en txt_under" id="goPage"
                                                         href="javascript:void(0);">CORPORATE SALES<span
                          className="footer_arrow_down"></span></a></li>
                      <li><a href="/footer/co_sales/index.do">단체 및
                          기업 구매 안내</a></li>
                      <li><a href="/footer/group_order/index.do">단체 주문 배달 안내</a></li>
                  </ul>
                  <ul>
                      <li className="footer_menu_ttl"><a className="en" href="javascript:void(0);">PARTNERSHIP<span
                          className="footer_arrow_down"></span></a></li>
                      <li><a href="/footer/partnership/new_partner.do">신규 입점 제의</a></li>
                      <li><a href="/srm/login.do">협력 고객사 등록신청</a></li>
                      <li><a href="/srm/agency.do">중개업체 확인</a></li>
                  </ul>
                  <ul>
                      <li className="footer_menu_ttl"><a className="en" href="javascript:void(0);">ONLINE COMMUNITY<span
                          className="footer_arrow_down"></span></a></li>
                      <li><a href="https://www.facebook.com/starbuckskorea" target="_blank">페이스북</a></li>
                      <li><a href="https://twitter.com/StarbucksKorea" target="_blank">트위터</a></li>
                      <li><a href="https://www.youtube.com/user/starbuckskorea" target="_blank">유튜브</a></li>
                      <li><a href="https://instagram.com/starbuckskorea/" target="_blank">인스타그램</a></li>
                  </ul>
                  <ul>
                      <li className="footer_menu_ttl"><a className="en" href="javascript:void(0);">RECRUIT<span
                          className="footer_arrow_down"></span></a></li>
                      <li><a href="https://job.shinsegae.com/job_intro/starbucks/starbucks01.jsp">채용 소개</a></li>
                      <li><a
                          href="https://job.shinsegae.com/recruit_info/notice/notice02_list.jsp?isSearch=Y&amp;tabKey0=&amp;notino=&amp;searchWord0=&amp;orderKey0=1&amp;strCareerVals=&amp;strRtlVals=&amp;strFodhtlVals=&amp;strFshnlvngVals=&amp;strFbbsnsVals=&amp;strRtlsprtVals=&amp;rtlTogYn=Y&amp;fodhtlTogYn=Y&amp;FshnlvngTogYn=Y&amp;fbbsnsTogYn=Y&amp;rtlsprtTogYn=Y&amp;searchWord1=&amp;careerAllVal=&amp;affFbbsnsVal=EE0"
                          target="_blank">채용 지원하기</a></li>
                  </ul>
              </div>
          </div>
      </footer>
  );
}

export default Footer;
