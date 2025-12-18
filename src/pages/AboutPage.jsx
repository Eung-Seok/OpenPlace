import React from 'react';
import "./AboutPage.css";
import { FaBuilding } from "react-icons/fa";

function AboutPage() {
    return (
        <section className="about-page">
            <div className="container">
                <h2 className="about-title">
                    <FaBuilding className="main-icon" size={28} />
                    <span>회사소개</span>
                </h2>

                {/* 1. 서비스 소개 */}
                <div className="about-card">
                    <h4 className="about-card-title">
                        <i className="bi bi-leaf-fill about-icon"></i>
                        서비스 소개
                    </h4>
                    <div className="about-content">
                        <p>
                            <span className="highlight">Open Place</span>는 지역 주민이 직접 참여하여
                            공공시설 개선을 실현하는 <span className="highlight">시민 기반 펀딩 플랫폼</span>입니다.
                        </p>
                        <p>
                            우리 동네의 불편함을 제안하고, 공감과 펀딩을 통해
                            현실적인 변화를 만들어내는 공간을 꿈꿉니다.
                            프로젝트의 시작부터 완성까지 투명하게 공유하며,
                            모두가 함께 만들고 함께 혜택을 누릴 수 있는
                            공공 개선 생태계를 지향합니다.
                        </p>
                    </div>
                </div>

                {/* ▼ 추가된 인포그래픽 섹션: 변화를 만드는 과정 ▼ */}
                <div className="about-card">
                    <h4 className="about-card-title">
                        <i className="bi bi-arrow-repeat about-icon"></i>
                        변화를 만드는 과정 (Service Flow)
                    </h4>
                    <div className="about-content" style={{ textAlign: 'center' }}>
                        {/* 💡 public 폴더 내 이미지 경로로 수정하세요 (예: /images/process.jpg) */}
                        <img 
                            src="/images/mainpage/about1.png" 
                            alt="시민 참여 변화 프로세스" 
                            style={{ 
                                width: '100%', 
                                maxWidth: '900px', 
                                height: 'auto', 
                                borderRadius: '10px',
                                display: 'block',
                                margin: '0 auto'
                            }} 
                        />

                        <p className="highlight-bold" style={{ marginTop: '20px', fontSize: '1.1rem' }}>
                            "시민의 작은 참여가 모여, 우리 동네의 큰 변화를 만듭니다."
                        </p>
                    </div>
                </div>
                {/* ▲ 추가 섹션 끝 ▲ */}

                {/* 2. 미션 */}
                <div className="about-card">
                    <h4 className="about-card-title">
                        <i className="bi bi-bullseye about-icon"></i>
                        우리의 미션 (Mission)
                    </h4>
                    <ul className="about-list">
                        <li>지역사회 문제를 가장 가까운 사람들인 주민이 직접 해결할 수 있도록 돕습니다.</li>
                        <li>공공시설 개선 과정을 투명하게 공개하여 신뢰 기반 커뮤니티를 만듭니다.</li>
                        <li>지속 가능한 도시 환경을 조성하고 지역의 가치와 생활 품질을 높입니다.</li>
                        <li>작은 참여가 모여 더 큰 사회적 가치를 만드는 선순환을 이끕니다.</li>
                    </ul>
                </div>

                {/* 3. 비전 */}
                <div className="about-card no-shadow">
                    <h4 className="about-card-title">
                        <i className="bi bi-rocket-takeoff about-icon"></i>
                        우리의 비전 (Vision)
                    </h4>

                    <p className="about-vision-desc">
                        Open Place는 단순한 펀딩 플랫폼을 넘어,<br />
                        <span className="highlight-bold">시민이 직접 만드는 스마트한 공공 개선 플랫폼</span>을 목표로 합니다.
                    </p>

                    <div className="vision-grid">
                        <div className="vision-box">
                            <div className="icon-wrapper">
                                <i className="bi bi-people-fill vision-icon"></i>
                            </div>
                            <h5>시민 중심 플랫폼</h5>
                            <p>주민이 제안하고 참여하며 변화의 주체가 되는 구조를 구축합니다.</p>
                        </div>

                        <div className="vision-box">
                            <div className="icon-wrapper">
                                <i className="bi bi-clipboard-data-fill vision-icon"></i>
                            </div>
                            <h5>투명한 공공 데이터</h5>
                            <p>Before & After, 예산 사용 내역 등 모든 정보를 투명하게 공개합니다.</p>
                        </div>

                        <div className="vision-box">
                            <div className="icon-wrapper">
                                <i className="bi bi-buildings-fill vision-icon"></i>
                            </div>
                            <h5>지속 가능한 도시</h5>
                            <p>환경·안전·생활 편의 개선을 통해 더 나은 도시 생태계를 만듭니다.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutPage;