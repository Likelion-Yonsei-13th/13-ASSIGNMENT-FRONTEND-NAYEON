import React from 'react';
import '../App.css';

const History = () => {
    return (
        <div className="history-page">
            <h2>수강한 강의</h2>
            <table className="history-table">
                <thead>
                <tr>
                    <th>학기</th>
                    <th>강의명</th>
                    <th>배운내용</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>23-2</td>
                    <td>데이터과학의이해와응용</td>
                    <td>파이썬을 이용한 데이터 분석, 가공, 예측</td>
                </tr>
                <tr>
                    <td>24-1</td>
                    <td>인공지능프로그래밍</td>
                    <td>파이썬을 이용한 문제 해결</td>
                </tr>
                <tr>
                    <td>25-1</td>
                    <td>딥러닝개론및응용</td>
                    <td>딥러닝 인공지능에 대한 전반적인 내용</td>
                </tr>
                <tr>
                    <td>25-1</td>
                    <td>테크포임팩트프로젝트</td>
                    <td>정서적 고위험군을 위한 자동 손편지 판별 및 후속 연결 시스템 개발</td>
                </tr>
                </tbody>
            </table>

            <h2>활동</h2>
            <table className="history-table">
                <thead>
                <tr>
                    <th>학기</th>
                    <th>활동명</th>
                    <th>활동내용</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>24-1</td>
                    <td>의류환경학과 학생회 총무부장</td>
                    <td>학생회비 관리, 연고전 굿즈 판매 등</td>
                </tr>
                <tr>
                    <td>24-2</td>
                    <td>네이버 스포츠팀 계약직 근무</td>
                    <td>OCR AI 서비스 개발 보조</td>
                </tr>
                <tr>
                    <td>25-1</td>
                    <td>멋쟁이사자처럼대학</td>
                    <td>프론트엔드 트랙</td>
                </tr>
                <tr>
                    <td>25-1</td>
                    <td>중앙동아리 YCC</td>
                    <td>프론트엔드 스터디</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default History;
