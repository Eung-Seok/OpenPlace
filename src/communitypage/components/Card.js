import React from "react";
import './Card.css'

function Card({ title, content, author, views, likes, category }) {
    return (
        <div className="post-card">
            <h3 className="post-title">{title}</h3>
            <p className="post-content">{content}</p>
            <div className="post-bottom">
                <div>
                <span className="post-author">작성자: {author}</span>
                <span className="post-author">{category}</span>
                </div>
                <div>
                    <span className="post-views">조회수 {views}</span>
                    <span className="post-views"><span style={{ color: 'red' }}>❤</span> {likes}</span>
                </div>
            </div>
        </div>
    );
}



export default Card;