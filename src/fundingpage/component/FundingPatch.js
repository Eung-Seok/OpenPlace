function FundingPatch(){
    
    let List = JSON.parse(localStorage.getItem('펀딩데이터'))
    for(let i = 1; i <= List.length; i++){
        List[i-1].id = i;
    }
    localStorage.setItem('펀딩데이터', JSON.stringify(List))
}

export default FundingPatch;