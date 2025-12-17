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


    return (
        <div className="funding-register-container">
            <div className="funding-project-container">
                <h1>프로젝트 페이지 만들기</h1>
            </div>
            <div className="funding-input-container">
                <p className="funding-your-idea">당신의 아이디어</p>
                <p className="funding-register-explan">앞으로 모금을 진행하게 될 후원자에게 무엇을 할 계획인지, 어떻게 그것을 달성할 것이고, 그리고 그것이 가져올 이점에 대해 적어주세요 !</p>
                <hr style={{ marginBottom: "40px" }}></hr>

                <p className="funding-my-idea">프로젝트 제목 <span>*</span></p>

                <div className="textarea-wrapper">
                    <textarea style={{ height: "40px" }}></textarea>
                    <span>?</span>
                </div>

                <p className="funding-my-idea">해당 장소 위치 <span>*</span></p>

                <div className="textarea-wrapper">
                    <textarea style={{ height: "40px" }}></textarea>
                    <span>?</span>
                </div>

                <p className="funding-my-idea">귀하의 아이디어에 대한 간략한 요약 <span>*</span></p>

                <div className="textarea-wrapper">
                    <textarea></textarea>
                    <span>?</span>
                </div>

                <p className="funding-my-idea">프로젝트 설명 <span>*</span></p>

                <div className="textarea-wrapper">
                    <textarea></textarea>
                    <span>?</span>
                </div>

                <p className="funding-my-idea">목표 금액과 기간 설정 <span>*</span></p>
                <div className="funding-amount-time">
                    <input type="number" value={goalAmount} placeholder="목표 금액"
                        onChange={(e) => setGoalAmount(e.target.value)}></input>
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
                </div>

                <div className="funding-footer-setting">
                    <button className="funding-edit-btn">저장</button>
                </div>
                {/* <button className="funding-edit-btn" onClick={() => {
                    navigate(`/community/${post.id}`);
                    window.scrollTo(0, 0);
                }}>등록하기</button> */}

            </div>
        </div>
    );
}

export default FundingRegister;
