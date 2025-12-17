import "./FundingRegister.css"
// import FundingBox from "./component/FundingBox";
import { useState } from "react";

function FundingRegister() {

    const [goalAmount, setGoalAmount] = useState("");

    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    const formattedToday = `${yyyy}-${mm}-${dd}`;

    //오늘 날짜 초기화
    const [timeStart, setTimeStart] = useState(formattedToday);
    const [timeLeft, setTimeLeft] = useState("");

    // 별표 없애기 textarea
    const [title, setTitle] = useState("");
    const [location, setLocation] = useState("");
    const [summary, setSummary] = useState("");
    const [description, setDescription] = useState("");


    return (
        <div className="funding-register-container">
            <div className="funding-project-container">
                <h1>프로젝트 페이지 만들기</h1>
            </div>
            <div className="funding-input-container">
                <p className="funding-your-idea">당신의 아이디어</p>
                {/* <p className="funding-register-explan">앞으로 모금을 진행하게 될 후원자에게 무엇을 할 계획인지, 어떻게 그것을 달성할 것이고, 그리고 그것이 가져올 이점에 대해 적어주세요 !</p> */}
                <p className="funding-register-explan"><p className="funding-register-explan">
                    앞으로 모금을 진행하게 될 후원자에게
                    어떤 공공시설을 개선하고자 하는지,
                    그 변화가 지역 사회에 어떤 의미를 가지는지,
                    그리고 이를 어떻게 실현해 나갈 것인지 자세히 적어주세요.
                    구체적인 계획과 진정성 있는 설명은
                    후원자들의 공감과 참여로 이어집니다.
                </p>
                </p>
                <hr style={{ marginBottom: "40px" }}></hr>

                <p className="funding-my-idea">
                    프로젝트 제목 {!title && <span>*</span>}
                </p>

                <div className="textarea-wrapper">
                    <textarea
                        style={{ height: "40px" }}
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    ></textarea>

                    <span className="funding-tooltip">?
                        <div className="funding-tooltip-text">
                            프로젝트 제목을 입력해주세요. <a style={{ color: "#09947d" }}>(예: 놀이터 리뉴얼 프로젝트) </a>
                            프로젝트 제목은 후원자에게 가장 먼저 전달되는 정보입니다.
                            어떤 프로젝트인지 한눈에 알 수 있도록
                            내용과 잘 어울리는 제목을 작성해 주세요.
                        </div>
                    </span>
                </div>

                <p className="funding-my-idea">
                    해당 장소 위치 {!location && <span>*</span>}
                </p>

                <div className="textarea-wrapper">
                    <textarea
                        style={{ height: "40px" }}
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    ></textarea>

                    <span className="funding-tooltip">?
                        <div className="funding-tooltip-text">
                            해당 프로젝트가 진행될 장소를 입력해주세요. (예: 천안 불당동 숲놀이터)
                        </div>
                    </span>
                </div>

                <p className="funding-my-idea">
                    귀하의 아이디어에 대한 간략한 요약 {!summary && <span>*</span>}
                </p>
                <div className="textarea-wrapper">
                    <textarea
                        value={summary}
                        onChange={(e) => setSummary(e.target.value)}
                    ></textarea>

                    <span className="funding-tooltip">?
                        <div className="funding-tooltip-text">
                            프로젝트의 핵심 아이디어를 간략히 요약해주세요.
                        </div>
                    </span>
                </div>

                <p className="funding-my-idea">
                    프로젝트 설명 {!description && <span>*</span>}
                </p>

                <div className="textarea-wrapper">
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>

                    <span className="funding-tooltip">?
                        <div className="funding-tooltip-text">
                            프로젝트에 대한 상세 설명을 작성해주세요.
                        </div>
                    </span>
                </div>

                <span className="funding-my-idea funding-amount-label">
                    목표 금액과 기간 설정 {(goalAmount === "" || timeLeft === "") && <span>*</span>}

                    <div className="textarea-wrapper funding-help-amount">
                        <span className="funding-tooltip">?
                            <div className="funding-tooltip-text">
                                프로젝트 목표 금액과 종료 날짜를 선택해주세요.
                            </div>
                        </span>
                    </div>

                </span>

                {/* <div className="funding-amount-time">
                    <input
                        style={{ width: "130px", marginTop: "20px", paddingLeft: "10px" }}
                        type="text"
                        value={goalAmount}
                        placeholder="목표 금액"

                        onFocus={() => {
                            const onlyNumber = goalAmount.replace(/ 원/g, "");
                            setGoalAmount(onlyNumber);
                        }}

                        onChange={(e) => {
                            const onlyNumber = e.target.value.replace(/[^0-9]/g, "");

                            const formatted = onlyNumber.replace(
                                /\B(?=(\d{3})+(?!\d))/g,
                                ","
                            );

                            setGoalAmount(formatted);
                        }}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                e.preventDefault();

                                if (goalAmount !== "" && !goalAmount.includes("원")) {
                                    setGoalAmount(`${goalAmount} 원`);
                                }

                                e.target.blur();
                            }
                        }}
                    />
                    <br></br>

                    <div style={{ marginTop: "5px", marginBottom: "-25px" }}>
                        <input type="date" value={timeStart} readOnly />
                        <span style={{ fontSize: "20px" }}> ~ </span>

                        <input type="date" value={timeLeft}
                            onChange={(e) => setTimeLeft(e.target.value)}></input>
                    </div>

                    <br></br>
                    <span style={{ marginLeft: "19px", marginRight: "20px" }}>프로젝트 시작</span>
                    <span style={{ fontSize: "20px" }}> ~ </span>
                    <span style={{ marginLeft: "19px" }}>프로젝트 종료</span>
                </div> */}

                <div className="funding-amount-time">
                    <div className="funding-amount-row">
                        <input
                            className="funding-amount-input"
                            type="text"
                            value={goalAmount}
                            placeholder="목표 금액"
                            onFocus={() => {
                                setGoalAmount(goalAmount.replace(/ 원/g, ""));
                            }}
                            onChange={(e) => {
                                const onlyNumber = e.target.value.replace(/[^0-9]/g, "");
                                const formatted = onlyNumber.replace(
                                    /\B(?=(\d{3})+(?!\d))/g,
                                    ","
                                );
                                setGoalAmount(formatted);
                            }}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    e.preventDefault();
                                    if (goalAmount && !goalAmount.includes("원")) {
                                        setGoalAmount(`${goalAmount} 원`);
                                    }
                                    e.target.blur();
                                }
                            }}
                        />
                        {/* <span className="funding-amount-unit">원</span> */}
                    </div>

                    <div className="funding-date-row">
                        <div className="funding-date-box">
                            <input type="date" value={timeStart} readOnly />
                            <span>프로젝트 시작</span>
                        </div>

                        <span className="funding-date-tilde">~</span>

                        <div className="funding-date-box">
                            <input
                                type="date"
                                value={timeLeft}
                                onChange={(e) => setTimeLeft(e.target.value)}
                            />
                            <span>프로젝트 종료</span>
                        </div>
                    </div>
                </div>


                <div className="funding-footer-setting">
                    <button className="funding-edit-btn">저장</button>
                </div>
                {/* <button className="funding-edit-btn" onClick={() => {
                    navigate(`/community/${post.id}`);
                    window.scrollTo(0, 0);
                }}>등록하기</button> */}

            </div>
        </div >
    );
}

export default FundingRegister;