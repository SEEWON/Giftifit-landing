import Head from "next/head";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Home = () => {
  const FadeInSection = (props) => {
    const [isVisible, setVisible] = useState(false);
    const domRef = useRef();
    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => setVisible(entry.isIntersecting));
      });
      observer.observe(domRef.current);
      return () => observer.unobserve(domRef.current);
    }, []);

    return (
      <FadeContainer ref={domRef} isVisible={isVisible ? true : false}>
        {props.children}
      </FadeContainer>
    );
  };

  const onBtnClick = () => {
    alert("서비스 준비 중입니다.");
  };

  const serviceNotiURL = "https://forms.gle/bBq4nsUNn1VjULNq5";

  return (
    <>
      <Head>
        <title>우리 회사 직원을 위한 선물 복지 솔루션, 기프티핏</title>
        <link
            rel="stylesheet"
            as="style"
            crossOrigin="true"
            href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/static/pretendard-dynamic-subset.css"
          />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Wrapper>
        <Container>
          <NavBar>
            <LogoContainer>
              <Image className="logo-img" src="/logo.svg" alt="logo" width={83.66} height={20} priority />
            </LogoContainer>
            <MenuContainer>
              <Menu onClick={onBtnClick}>기본 설정</Menu>
              <Menu onClick={onBtnClick}>선물보내기</Menu>
              <Menu onClick={onBtnClick}>기프팅 히스토리</Menu>
              <Menu onClick={onBtnClick}>결제내역</Menu>
              <Menu onClick={onBtnClick}>선물통계</Menu>
            </MenuContainer>
          </NavBar>

          <Section1>
            <FadeInSection>
              <Section1Group>
                <Section1ContentL1>
                  <PinkText size="20px" weight="500">
                    나에게 꼭 맞는 선물
                  </PinkText>
                </Section1ContentL1>
                <Section1ContentL2_1>
                  <BlackText size="40px">
                    <BlackText size="40px" weight="700">
                      내가 원하는 그 선물
                    </BlackText>
                    을 위한 <br /> 사내 선물복지 솔루션,{" "}
                    <BlackText size="40px" weight="700">
                      기프티핏
                    </BlackText>
                  </BlackText>
                  <Section1ContentL2_2>
                    <PinkText size="42px" weight="700">
                      Gifts that fit!
                    </PinkText>
                  </Section1ContentL2_2>
                </Section1ContentL2_1>
                <Section1ContentL3>
                  <GrayText size="24px">
                    매번 같은 선물은 이제 그만!
                    <br />
                    <GrayText size="24px" weight="700">
                      복지 담당자와 직원{" "}
                    </GrayText>
                    모두의 만족도를 위한 기업용 선물복지 서비스
                  </GrayText>
                </Section1ContentL3>
                <a target="_blank" href={serviceNotiURL} rel="noopener noreferrer">
                  <LaunchNotiBtn1>서비스 알림 신청받기</LaunchNotiBtn1>
                </a>
                <Section1Img>
                  <Image className="heart-img" src="/heart.svg" alt="Heart image" width={340} height={340} priority />
                </Section1Img>
              </Section1Group>
            </FadeInSection>
          </Section1>

          <Section2>
            <FadeInSection>
              <Section2Content1>
                <BlackText size="20px" weight="500">
                  우리 회사 직원들의 취향을 분석해 <br />
                  한눈에 모아서 보고 관리하세요.
                </BlackText>
              </Section2Content1>
              <Section2Content2>
                <BlackText size="20px" weight="500">
                  직원들이{" "}
                  <PinkText size="20px" weight="700">
                    마음에 <DotText>쏙</DotText> 들어할 선물
                  </PinkText>
                  을 추천해 드려요!
                </BlackText>
              </Section2Content2>
            </FadeInSection>
          </Section2>

          <Section3>
            <FadeInSection>
              <Section3Group>
                <Section3Content1>
                  <PinkText size="18px" weight="800">
                    기프티핏에서는
                  </PinkText>
                </Section3Content1>
                <Section3Content2>
                  <Card>
                    <Image
                      className="shopbag-img"
                      src="/cart.svg"
                      alt="Shopping bag image"
                      width={200}
                      height={200}
                      priority
                    />
                    <CardTextBox1>
                      <BlackText size="20px" weight="700">
                        손쉬운 클릭 몇 번으로
                        <br />
                        <PinkText size="20px" weight="700">
                          직원 만족도
                        </PinkText>
                        를 한번에 UP
                      </BlackText>
                    </CardTextBox1>
                    <CardTextBox2>
                      <BlackText size="16px" weight="400" height="150%">
                        간편한 사전 설정 몇 번에 <br />
                        폭넓은 선물 선택으로 최고의 효율을 올려요
                      </BlackText>
                    </CardTextBox2>
                  </Card>
                  <Card>
                    <Image
                      className="shopbag-img"
                      src="/cart.svg"
                      alt="Shopping bag image"
                      width={200}
                      height={200}
                      priority
                    />
                    <CardTextBox1>
                      <BlackText size="20px" weight="700">
                        <PinkText size="20px" weight="700">
                          직원들의 취향
                        </PinkText>
                        을 반영한 <br />
                        선물리스트를 구성할 수 있어요
                      </BlackText>
                    </CardTextBox1>
                    <CardTextBox2>
                      <BlackText size="16px" weight="400" height="150%">
                        인기있는 선물부터 직원 맞춤 선물까지 <br />
                        모두 추천해드려요!
                      </BlackText>
                    </CardTextBox2>
                  </Card>
                  <Card>
                    <Image
                      className="shopbag-img"
                      src="/cart.svg"
                      alt="Shopping bag image"
                      width={200}
                      height={200}
                      priority
                    />
                    <CardTextBox1>
                      <BlackText size="20px" weight="700">
                        <PinkText size="20px" weight="700">
                          어떤 선물이든{" "}
                        </PinkText>
                        리스트에 <br />
                        추가할 수 있어요!
                      </BlackText>
                    </CardTextBox1>
                    <CardTextBox2>
                      <BlackText size="16px" weight="400" height="150%">
                        인터넷에서 구할 수 있는 선물이라면
                        <br />
                        모두 제한없이 가능해요!
                      </BlackText>
                    </CardTextBox2>
                  </Card>
                </Section3Content2>
              </Section3Group>
            </FadeInSection>
          </Section3>

          <Section4>
            <FadeInSection>
              <Section4Group>
                <Section4Content1>
                  <PinkText size="18px" weight="800">
                    오직 기프티핏에서만
                  </PinkText>
                </Section4Content1>
                <Section4Content2>
                  <BlackText size="36px" weight="500">
                    우리 회사 직원들의{" "}
                    <BlackText size="36px" weight="700">
                      선물 취향
                    </BlackText>
                    을 <br />
                    <BlackText size="36px" weight="700">
                      한번에 관리
                    </BlackText>
                    하기!
                  </BlackText>
                </Section4Content2>
                <Section4Content3>
                  <GrayText size="20px" weight="500" height="150%">
                    직원별 선물 취향을 데이터로 관리하니까! <br />
                    통계 기반의 데이터로{" "}
                    <PinkText size="20px" weight="700" height="150%">
                      직원들의 관심사와 취향
                    </PinkText>
                    을 <br />
                    쉽게 관리 할 수 있어요
                  </GrayText>
                </Section4Content3>
                <Section4Img>
                  <Image className="stats-img" src="/stats.png" alt="Statistics image" width={440} height={440} />
                </Section4Img>
              </Section4Group>
            </FadeInSection>
          </Section4>

          <Section5>
            <Section5Group>
              <FadeInSection>
                <Section5Content1>
                  <PinkText size="18px" weight="800" height="140%">
                    지금 기프티핏을 시작해야 하는 이유!
                  </PinkText>
                </Section5Content1>
                <Section5Content2>
                  <BlackText size="36px" weight="500">
                    <BlackText size="36px" weight="700">
                      기프티핏
                    </BlackText>
                    을 사용하면
                    <br />
                    어떤 점이 좋나요?
                  </BlackText>
                </Section5Content2>
              </FadeInSection>
              <Section5Img>
                <Image className="mockup-img" src="/mockup.svg" alt="Mockup image" width={580} height={580} />
              </Section5Img>
            </Section5Group>
          </Section5>

          <Section6>
            <Section6_1>
              <FadeInSection>
                <Section6_1Group>
                  <Section6Content1>
                    <PinkText size="32px" weight="900">
                      01
                    </PinkText>
                  </Section6Content1>
                  <Section6Content2>
                    <GrayText2 size="20px" weight="500" lineHeight="150%">
                      받는 사람이 만족해야 진짜 선물이니까!
                    </GrayText2>
                  </Section6Content2>
                  <Section6Content3>
                    <BlackText size="24px" weight="700" lineHeight="140%">
                      기프티핏에서는 <br />
                      <PinkText size="24px" weight="700" lineHeight="140%">
                        받고 싶은 선물
                      </PinkText>
                      을 선택할 수 있어요
                    </BlackText>
                  </Section6Content3>
                  <Section6_1Img>
                    <Image className="mockup-img1" src="/mockup_1.svg" alt="mockup image" width={590} height={221} />
                  </Section6_1Img>
                </Section6_1Group>
              </FadeInSection>
            </Section6_1>

            <Section6_2>
              <FadeInSection>
                <Section6_2Group>
                  <Section6Content1>
                    <PinkText size="32px" weight="900">
                      02
                    </PinkText>
                  </Section6Content1>
                  <Section6Content2>
                    <GrayText2 size="20px" weight="500" lineHeight="150%">
                      취향이 다양한 직원들을 위해
                    </GrayText2>
                  </Section6Content2>
                  <Section6Content3>
                    <BlackText size="24px" weight="700" lineHeight="140%">
                      <PinkText size="24px" weight="700" lineHeight="140%">
                        우리 회사 직원
                      </PinkText>
                      들만을 위한 <br />
                      특별한 선물 리스트를 제공해요
                    </BlackText>
                  </Section6Content3>
                  <Section6_2Img>
                    <Image className="mockup-img2" src="/mockup_2.svg" alt="mockup image" width={460} height={322} />
                  </Section6_2Img>
                </Section6_2Group>
              </FadeInSection>
            </Section6_2>

            <Section6_3>
              <FadeInSection>
                <Section6_3Group>
                  <Section6Content1>
                    <PinkText size="32px" weight="900">
                      03
                    </PinkText>
                  </Section6Content1>
                  <Section6Content2>
                    <GrayText2 size="20px" weight="500" lineHeight="150%">
                      원하는 선물이 리스트에 없다구요?
                    </GrayText2>
                  </Section6Content2>
                  <Section6Content3>
                    <BlackText size="24px" weight="700" lineHeight="140%">
                      직원은{" "}
                      <PinkText size="24px" weight="700" lineHeight="140%">
                        직접 선물을 등록
                      </PinkText>
                      해 <br />
                      원하는 선물을 받을 수 있어요
                    </BlackText>
                  </Section6Content3>
                  <Section6_3Img>
                    <Image className="mockup-img3" src="/mockup_3.svg" alt="mockup image" width={434} height={363} />
                  </Section6_3Img>
                </Section6_3Group>
              </FadeInSection>
            </Section6_3>
          </Section6>

          <Section7>
            <FadeInSection>
              <Section7Group>
                <Section7Content1>
                  <BlackText size="32px" weight="400">
                    지금 이 순간,
                    <br />
                    회사에서{" "}
                    <BlackText size="32px" weight="700">
                      많이 찾는 선물
                    </BlackText>
                    은?
                  </BlackText>
                </Section7Content1>
                <Section7Content2>
                  <a href="https://giftbiz.kakao.com/product/detail/2483438" target="_blank" rel="noopener noreferrer">
                    <ProductCard>
                      <Image
                        className="ex_product1"
                        src="/ex_product1.png"
                        alt="example product 1"
                        width={244}
                        height={244}
                      />
                      <ProductText>
                        <ProductBrand>
                          <LightGrayText size="14px" weight="500" lineHeight="17px">
                            오설록
                          </LightGrayText>
                        </ProductBrand>
                        <ProductName>
                          <BlackText size="17.7px" weight="500" lineHeight="21.13px">
                            오설록 시크릿티스토리 9종 ···
                          </BlackText>
                        </ProductName>
                      </ProductText>
                    </ProductCard>
                  </a>
                  <a href="https://giftbiz.kakao.com/product/detail/3735103" target="_blank" rel="noopener noreferrer">
                    <ProductCard center>
                      <Image
                        className="ex_product2"
                        src="/ex_product2.png"
                        alt="example product 2"
                        width={244}
                        height={244}
                      />
                      <ProductText>
                        <ProductBrand>
                          <LightGrayText size="14px" weight="500" lineHeight="17px">
                            아로마티카
                          </LightGrayText>
                        </ProductBrand>
                        <ProductName>
                          <BlackText size="17.7px" weight="500" lineHeight="21.13px">
                            라벤더 바디워시 & 바디로션 ···
                          </BlackText>
                        </ProductName>
                      </ProductText>
                    </ProductCard>
                  </a>
                  <a href="https://giftbiz.kakao.com/product/detail/6236447" target="_blank" rel="noopener noreferrer">
                    <ProductCard>
                      <Image
                        className="ex_product3"
                        src="/ex_product3.png"
                        alt="example product 3"
                        width={244}
                        height={244}
                      />
                      <ProductText>
                        <ProductBrand>
                          <LightGrayText size="14px" weight="500" lineHeight="17px">
                            수플린
                          </LightGrayText>
                        </ProductBrand>
                        <ProductName>
                          <BlackText size="17.7px" weight="500" lineHeight="21.13px">
                            제주오감 &quot;레드향 & 한라봉&quot; ···
                          </BlackText>
                        </ProductName>
                      </ProductText>
                    </ProductCard>
                  </a>
                </Section7Content2>
              </Section7Group>
            </FadeInSection>
          </Section7>

          <Section8>
            <FadeInSection>
              <Section8Group>
                <Section8Content1>
                  <BlackText size="36px" weight="700">
                    우리 회사{" "}
                    <PinkText size="36px" weight="700">
                      선물복지의 만족도
                    </PinkText>
                    를<br />
                    올리고 싶다면?
                  </BlackText>
                </Section8Content1>
                <a target="_blank" href={serviceNotiURL} rel="noopener noreferrer">
                  <LaunchNotiBtn2>서비스 알림 신청받기</LaunchNotiBtn2>
                </a>
              </Section8Group>
            </FadeInSection>
          </Section8>
        </Container>
      </Wrapper>
    </>
  );
};

export default Home;

const PinkText = styled.span`
  font-size: ${(props) => props.size || "16px"};
  font-weight: ${(props) => props.weight || "400"};
  color: #ff6a61;
  line-height: ${(props) => props.lineHeight || "160%"};
`;
const BlackText = styled.span`
  font-size: ${(props) => props.size || "16px"};
  font-weight: ${(props) => props.weight || "400"};
  color: #000000;
  line-height: ${(props) => props.lineHeight || "160%"};
`;
const GrayText = styled.span`
  font-size: ${(props) => props.size || "16px"};
  font-weight: ${(props) => props.weight || "400"};
  color: #565656;
  line-height: ${(props) => props.lineHeight || "160%"};
`;
const GrayText2 = styled.span`
  font-size: ${(props) => props.size || "16px"};
  font-weight: ${(props) => props.weight || "400"};
  color: #525252cc;
  line-height: ${(props) => props.lineHeight || "160%"};
`;
const LightGrayText = styled.span`
  font-size: ${(props) => props.size || "16px"};
  font-weight: ${(props) => props.weight || "400"};
  color: #929191;
  line-height: ${(props) => props.lineHeight || "160%"};
`;

const DotText = styled.span`
  text-emphasis-style: dot;
  text-emphasis-position: over left;
`;

const FadeContainer = styled.div`
  opacity: 0;
  transform: translateY(20vh);
  visibility: hidden;
  transition: opacity 1200ms ease-out, transform 600ms ease-out, visibility 1200ms ease-out;
  will-change: opacity, transform, visibility;
  ${(props) =>
    props.isVisible &&
    `
      opacity: 1;
      transform: none;
      visibility: visible;
    `}
`;

const Wrapper = styled.div`
  font-family: "Pretendard Variable";
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const NavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80px;
  box-shadow: 0px 4px 12px 0px #00000014;
  position: relative;
`;
const LogoContainer = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-403px, 0);
`;
const MenuContainer = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-240px, 0);
`;
const Menu = styled.button`
  border: 0;
  outline: 0;
  padding: 10px;
  margin-right: 17px;
  background: none;
  cursor: pointer;
  color: #3a3a47;
  font-family: "Pretendard Variable";
  font-size: 16px;
  font-weight: 700;
  line-height: 19px;
`;

const Section1 = styled.div`
  display: flex;
  width: 100%;
  height: 650px;
  background: #ff6a611f;
  justify-content: center;
  overflow-x: hidden;
`;
const Section1Group = styled.div`
  margin-top: 169px;
  padding-right: 45px;
  position: relative;
`;
const Section1ContentL1 = styled.div`
  margin-bottom: 16px;
`;
const Section1ContentL2_1 = styled.div`
  margin-bottom: 16px;
`;
const Section1ContentL2_2 = styled.span`
  margin-left: 22px;
`;
const Section1ContentL3 = styled.div`
  margin-bottom: 75px;
`;
const LaunchNotiBtn1 = styled.button`
  padding: 12px 30px;
  background: #1a1a32;
  border-radius: 12px;
  color: white;
  cursor: pointer;
  font-family: "Pretendard Variable";
  font-weight: 600;
  font-size: 16px;
  line-height: 160%;
`;
const Section1Img = styled.div`
  position: absolute;
  right: -100px;
  bottom: 230px;
`;

const Section2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 304px;
  background: #f9f9f9;
`;
const Section2Content1 = styled.div`
  text-align: center;
`;
const Section2Content2 = styled.div`
  text-align: center;
`;

const Section3 = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 760px;
`;
const Section3Group = styled.div`
  margin-top: 123px;
`;
const Section3Content1 = styled.div`
  margin-bottom: 38px;
  text-align: center;
  position: relative;
  right: 350px;
`;
const Section3Content2 = styled.div`
  display: flex;
`;
const Card = styled.div`
  align-items: center;
  margin: 0 50px;
  display: flex;
  flex-direction: column;
  text-align: center;
`;
const CardTextBox1 = styled.div`
  margin-bottom: 24px;
`;
const CardTextBox2 = styled.div``;

const Section4 = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 712px;
`;
const Section4Group = styled.div`
  margin-top: 153px;
  padding-right: 370px;
  position: relative;
`;
const Section4Content1 = styled.div`
  margin-bottom: 12px;
`;
const Section4Content2 = styled.div`
  margin-bottom: 72px;
`;
const Section4Content3 = styled.div``;
const Section4Img = styled.div`
  position: absolute;
  top: -20px;
  right: -100px;
`;

const Section5 = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 795px;
  background: linear-gradient(180deg, rgba(255, 106, 97, 0.12) 44.53%, rgba(255, 106, 97, 0) 100%);
`;
const Section5Group = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 67px;
  position: relative;
`;
const Section5Content1 = styled.div`
  margin-bottom: 12px;
  text-align: center;
`;
const Section5Content2 = styled.div`
  text-align: center;
`;
const Section5Img = styled.div`
  position: absolute;
  left: 50%;
  bottom: -47px;
  transform: translate(-50%, 0);
`;

const Section6 = styled.div`
  height: 1566px;
  width: 100%;
`;
const Section6_1 = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 446px;
`;
const Section6_1Group = styled.div`
  margin-top: 100px;
  padding-right: 500px;
  position: relative;
`;
const Section6_2Group = styled.div`
  margin-top: 80px;
  padding-right: 533px;
  position: relative;
`;
const Section6_3Group = styled.div`
  margin-top: 80px;
  padding-right: 550px;
  position: relative;
`;
const Section6Content1 = styled.div`
  margin-bottom: 16px;
`;
const Section6Content2 = styled.div`
  margin-bottom: 8px;
`;
const Section6Content3 = styled.div``;
const Section6_1Img = styled.div`
  position: absolute;
  top: 40px;
  right: -200px;
`;
const Section6_2Img = styled.div`
  position: absolute;
  top: -20px;
  right: -80px;
`;
const Section6_3Img = styled.div`
  position: absolute;
  top: 60px;
  right: -80px;
`;

const Section6_2 = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 429px;
`;
const Section6_3 = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 691px;
`;

const Section7 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 620px;
  width: 100%;
`;
const Section7Group = styled.div``;
const Section7Content1 = styled.div`
  margin-bottom: 48px;
`;
const Section7Content2 = styled.div`
  display: flex;
  align-items: flex-end;
  a {
    color: inherit;
    text-decoration: inherit;
  }
`;
const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  filter: drop-shadow(0px 4px 30px rgba(0, 0, 0, 0.1));
  width: 244px;
  height: 328px;
  border-radius: 20px;
  overflow: hidden;
  background-color: #ffffff;
  ${(props) =>
    props.center &&
    `
      margin: 0 27px;
    `}
`;
const ProductText = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  align-self: center;
`;
const ProductBrand = styled.div`
  margin-bottom: 4px;
`;
const ProductName = styled.div``;

const Section8 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 727px;
  width: 100%;
`;
const Section8Group = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Section8Content1 = styled.div`
  text-align: center;
  margin-bottom: 50px;
`;
const LaunchNotiBtn2 = styled.button`
  padding: 16px 32px;
  border: 0;
  outline: 0;
  background: linear-gradient(93.53deg, #ff5248 -56.55%, #f9b0ab 107.2%, #f9b0ab 107.2%);
  border-radius: 50px;
  width: 213px;
  color: white;
  cursor: pointer;
  font-family: "Pretendard Variable";
  font-weight: 700;
  font-size: 18px;
  line-height: 160%;
`;
