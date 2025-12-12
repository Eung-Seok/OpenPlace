import Card from "./components/Card";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CommunityMain.css'

function Hello() {
    const data = [
        {
            title: "불당동 놀이터 개선 너무 잘됐어요!",
            content: "참여했는데 결과물이 넘 만족스러워요!",
            author: "김가나",
            categoty: "프로젝트 후기",
            views: 153,
            likes: 80
        },
        {
            title: "횡단보도에 신호등 설치가 필요합니다",
            content: "아이 등굣길에 위험한 구간이 있어요.",
            author: "박다라",
            categoty: "지역 제보",
            views: 98,
            likes: 0
        }
    ];
    console.log(data[3])
    return (
        <div className="body">
            <div class="tabs">
                <button class="tab active">전체 글</button>
                <button class="tab">자유게시판</button>
                <button class="tab">지역 제보</button>
                <button class="tab">프로젝트 후기</button>
            </div>

            <div>
                <Button style={{ float: 'right', clear: 'both', marginBottom: '16px' }} variant="success">글쓰기</Button>
            </div>
            <div style={{ clear: 'both' }}>
                {data.map((item, index) => (
                    <Card title={item.title} content={item.content} author={item.author} category={item.categoty}views={item.views} likes={item.likes} />
                ))}
            </div>
        </div >
    );
}

export default Hello;