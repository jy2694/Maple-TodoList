import { useState } from "react";
import { CardGroup } from "react-bootstrap";
import { Container, Card, Form } from "react-bootstrap";

function CheckList(props) {

    const dailyCnt = 14;
    const weeklyCnt = 20;

    const [bossname, setBossName] = useState({
        '우르스' : 100,
        '자쿰' : 90,
        '힐라' : 120,
        '혼테일' : 135,
        '매그너스' : 155,
        '카웅' : 180,
        '파풀라투스' : 155,
        '반반' : 125,
        '블러디퀸' : 125,
        '피에르' : 125,
        '벨룸' : 125,
        '아카이럼' : 140,
        '반레온' : 125,
        '핑크빈' : 160,
        '하드_매그너스' : 175,
        '하드_힐라' : 170,
        '카오스_파풀라투스' : 190,
        '카오스_반반' : 180,
        '카오스_블러디퀸' : 180,
        '카오스_피에르' : 180,
        '카오스_벨룸' : 180,
        '카오스_핑크빈' : 170,
        '시그너스' : 140,
        '스우' : 190,
        '데미안' : 190,
        '가디언_엔젤_슬라임' : 210,
        '루시드' : 220,
        '윌' : 235,
        '더스크' : 245,
        '진힐라' : 250,
        '듄켈' : 255,
        '선택받은 세렌' : 265,
        '감시자 칼로스' : 270,
        '카링' : 275
});

    const quest_daily = 18;
    const quest_weekly = 13;

    const [quest, setQuest] = useState({
        '여로 일퀘' : 200,
        '츄츄 일퀘' : 210,
        '레헬른 일퀘' : 220,
        '아르카나 일퀘' : 225,
        '모라스 일퀘' : 230,
        '에스페라 일퀘' : 235,
        '테네브리스 일퀘' : 245,
        '세르니움(전) 일퀘' : 260,
        '세르니움(후) 일퀘' : 265,
        '호텔 아르크스 일퀘' : 270,
        '오디움 일퀘' : 275,
        '몬스터파크 2회' : 105,
        '익스트림 몬스터파크' : 260,
        '유니온 일퀘' : 200,
        '300마리 사냥' : 101,
        '명장 유지' : 35,
        '(이벤트) 코인 모으기' : 101,
        '(이벤트) 출석 도장' : 101,
        '에르다 스펙트럼' : 200,
        '배고픈 무토' : 210,
        '미드나잇 체이서' : 220,
        '스피릿 세이비어' : 225,
        '엔하임 디팬스' : 230,
        '프로텍스 에스페라' : 235,
        '크리티아스 주간 퀘스트' : 180,
        '헤이븐 주간 퀘스트' : 190,
        '버려진 야영지 주간 퀘스트' : 190,
        '(길드) 수로' : 101,
        '(길드) 플래그' : 101,
        '무릉도장 보상 받기' : 140,
        '더 시드 보상 받기' : 200
});

    const printBoss = () => {
        const result = [];
        const key = Object.keys(bossname);
        let start = 0;
        let end = dailyCnt;
        if(props.daily === false){
            start = dailyCnt;
            end = dailyCnt+weeklyCnt;
        }
        for(let i = start; i < end; i ++){
            let disable = false;
            if(props.level < bossname[key[i]]) disable = true;
            result.push(<Form.Check 
                style={{textAlign: "left"}}
                type='checkbox'
                disabled={disable}
                label={key[i].replaceAll('_',' ')}
              />);
        }
        return result;
    }

    const printQuest = () => {
        const result = [];
        const key = Object.keys(quest);
        let start = 0;
        let end = quest_daily;
        if(props.daily === false){
            start = quest_daily;
            end = quest_daily + quest_weekly;
        }
        for(let i = start; i < end; i ++){
            let disable = false;
            if(props.level < quest[key[i]]) disable = true;
            result.push(<Form.Check
                style={{textAlign: "left"}}
                type='checkbox'
                disabled={disable}
                label={key[i].replaceAll('_',' ')}
            />)
        }
        return result;
    }

    return (
      <Container>
        <CardGroup>
            <Card bg="dark">
                <Card.Header>
                    보스
                </Card.Header>
                <Card.Body style={{fontSize: '1vw'}}>
                    {printBoss()}
                </Card.Body>
            </Card>
            <Card bg="dark">
                <Card.Header>
                    컨텐츠
                </Card.Header>
                <Card.Body style={{fontSize: '1vw'}}>
                    {printQuest()}
                </Card.Body>
            </Card>
        </CardGroup>
      </Container>
    );
  }
  
  export default CheckList;