export default function Test({ $app, initialState }) {
  this.$target = document.createElement("footer");
  this.$target.classList.add("footer");
  $app.appendChild(this.$target);
  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  const render = () => {
    this.$target.innerHTML = `
        <!-- mobile버전에서 nav 추가 -->
        <nav></nav>
        <div class="footer-wrap">
          <div class="footer-inner">
            <nav class="section-info__sns">
              <a
                href="https://ko-kr.facebook.com/kukka.kr/"
                target="_blank"
                class="sns facebook link"
                ><span>Facebook</span></a
              >
              <a
                href="https://www.instagram.com/kukkakorea/"
                target="_blank"
                class="sns instagram link"
                ><span>Instagram</span></a
              >
              <a
                href="https://www.youtube.com/channel/UC_zQakXCUPvjcfsU067zyCQ?view_as=subscriber"
                target="_blank"
                class="sns youtube link"
                ><span>Youtube</span></a
              >
            </nav>
            <dl class="section-info__contact">
              <dt>꾸까 고객센터</dt>
              <dd class="contact-tel">
                <span class="blind">유선전화번호 : </span>
                1661-1031
              </dd>
              <dd class="contact-time">
                <span class="blind">운영시간 안내 : </span>(평일 10:00 - 13:00,
                14:00 - 18:00 / 주말 & 공휴일 제외)
              </dd>
              <dd class="contact-partner__tel">
                기업제휴 문의 : 070-4238-8251
              </dd>
            </dl>
            <nav class="section-info__faq">
              <a
                href="https://kukka.kr/faq/"
                class="link faq__center"
                target="_blank"
                >꾸까 고객센터 ></a
              >
            </nav>
            <hr  class='useless'/>
            <dl class="section-info__about">
              <dt class="logo"><span class="blind">꾸까</span></dt>
              <dd>상호명 : 꾸까(kukka)</dd>
              <dd>사업자 등록번호 : 264-81-32594</dd>
              <dd class="end">대표자 : 박춘화</dd>
              <br class="only_pc" />
              <dd>
                <address>
                  소재지: 서울시 서초구 남부순환로333길 10 kukka
                </address>
              </dd>
              <dd>
                <a
                  href="https://kukka.kr/disclosure/?next=/"
                  class="link"
                  target="_blank"
                  >기업공시</a
                >
              </dd>
              <dd class="end">통신판매신고번호 2018-서울서초-1692</dd>
              <br class="only_pc" />
              <dd><copy>© 2014-2021 kukka, Inc. All rights reserved.</copy></dd>
            </dl>
            <nav class="section-info__etc">
              <a
                href="https://kukka.kr/agreement/?next=/"
                class="link"
                target="_blank"
                >이용약관</a
              >
              <a
                href="https://kukka.kr/privacy/?next=/"
                class="link"
                target="_blank"
                >개인정보 처리방침</a
              >
              <a href="https://partners.kukka.kr/" class="link" target="_blank"
                >제휴안내</a
              >
            </nav>
          </div>
        </div>
             `;
  };
  render();
}
