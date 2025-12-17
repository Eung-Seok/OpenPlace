import { useParams } from "react-router";

function FundingSupport() {

    const { id } = useParams();

    let fundingData = JSON.parse(localStorage.getItem('펀딩데이터'))
    let data = fundingData.find((item) => {
        return item.id == id;
    })

    return(
        <div>
            {data.title}
        </div>
    )
}

export default FundingSupport;