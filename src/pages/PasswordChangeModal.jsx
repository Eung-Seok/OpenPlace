import { useState } from "react";
import "./PasswordChangeModal.css";

function PasswordChangeModal({ user, onClose, onUpdate }) {
    const [currentPw, setCurrentPw] = useState("");
    const [newPw, setNewPw] = useState("");
    const [confirmPw, setConfirmPw] = useState("");

    // ✅ 알럿 상태
    const [alertMsg, setAlertMsg] = useState("");

    const handleSave = () => {
        if (currentPw !== user.pw) {
            setAlertMsg("현재 비밀번호가 일치하지 않습니다.");
            return;
        }

        if (newPw.length < 8) {
            setAlertMsg("비밀번호는 8자 이상이어야 합니다.");
            return;
        }

        if (newPw !== confirmPw) {
            setAlertMsg("새 비밀번호가 일치하지 않습니다.");
            return;
        }

        const updatedUser = {
            ...user,
            pw: newPw,
        };

        // 계정정보
        localStorage.setItem("계정정보", JSON.stringify(updatedUser));

        // 계정목록
        const list =
            JSON.parse(localStorage.getItem("계정목록")) || [];

        const index = list.findIndex(item => item.id === user.id);
        if (index !== -1) {
            list[index] = updatedUser;
            localStorage.setItem("계정목록", JSON.stringify(list));
        }

        onUpdate(updatedUser);
        setAlertMsg("비밀번호가 변경되었습니다.");
    };

    // 알럿 확인
    const closeAlert = () => {
        setAlertMsg("");
        onClose(); // 성공 알럿 확인 후 모달 닫기
    };

    return (
        <>
            <div className="password-modal-bg">
                <div className="password-modal">

                    <h3>비밀번호 변경</h3>

                    <label>
                        현재 비밀번호
                        <input
                            type="password"
                            value={currentPw}
                            onChange={(e) => setCurrentPw(e.target.value)}
                        />
                    </label>

                    <label>
                        새 비밀번호
                        <input
                            type="password"
                            value={newPw}
                            onChange={(e) => setNewPw(e.target.value)}
                        />
                    </label>

                    <label>
                        새 비밀번호 확인
                        <input
                            type="password"
                            value={confirmPw}
                            onChange={(e) => setConfirmPw(e.target.value)}
                        />
                    </label>

                    <div className="password-modal-btns">
                        <button className="confirm" onClick={handleSave}>
                            변경
                        </button>
                        <button className="cancel" onClick={onClose}>
                            취소
                        </button>
                    </div>

                </div>
            </div>

            {/* ================= 알럿 모달 (로컬) ================= */}
            {alertMsg && (
                <div className="alert-modal-bg">
                    <div className="alert-modal-box">
                        <p className="alert-modal-message">
                            {alertMsg}
                        </p>
                        <button
                            className="alert-modal-btn"
                            onClick={closeAlert}
                        >
                            확인
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

export default PasswordChangeModal;
