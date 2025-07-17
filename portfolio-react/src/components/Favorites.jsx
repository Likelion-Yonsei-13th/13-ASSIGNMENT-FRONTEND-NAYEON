import React from 'react';
import '../App.css';
import travelImg from './여행.jpg';
import iuImg from './아이유.jpg';

const Favorites = () => {
    return (
        <div className="favorites-page">
            <div className="favorite-item">
                <img src={travelImg} alt="여행" width="500" />
                <br />
                여행 다니는 걸 좋아해요! <br />
                사진은 일본 히메지성입니다 ㅎㅎ
                <br /><br />
            </div>

            <div className="favorite-item">
                <img src={iuImg} alt="아이유" width="500" />
                <br />
                가장 좋아하는 가수는 아이유입니다! <br />
                콘서트 가는 날이 저에게는 1년 중 제일 설레는 날이에요
            </div>

            <br /><br /><br /><br /><br />
        </div>
    );
};

export default Favorites;
