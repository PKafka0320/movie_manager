
//mail
import React, { Component } from "react";
import '../css/style.css';
//나중에 백엔드에서 끌고올 것

const synopsis1 = "정체가 탄로난 스파이더맨 '피터 파커'(톰 홀랜드)가 문제를 해결하기 위해 \n'닥터 스트레인지'(베네딕트 컴버배치)의 도움을 받던 중 뜻하지 않게 멀티버스가 열리게 되고, \n이를 통해 '닥터 옥토퍼스'(알프리드 몰리나) 등 각기 다른 차원의 숙적들이 나타나며 \n사상 최악의 위기를 맞게 되는 이야기를 그린 마블 액션 블록버스터.";
const synopsis2 = "천문학과 대학원생 케이트 디비아스키(제니퍼 로렌스)와 담당 교수 랜들 민디 박사(레오나르도 디카프리오)는\n태양계 내의 궤도를 돌고 있는 혜성이 지구와 직접 충돌하는 궤도에 들어섰다는 엄청난 사실을 발견한다.\n하지만 지구를 파괴할 에베레스트 크기의 혜성이 다가온다는 불편한 소식에 아무도 신경 쓰지 않는다.\n지구를 멸망으로 이끌지도 모르는 소식을 사람들에게 알리기 위해 언론 투어에 나선 두 사람,\n혜성 충돌에 무관심한 대통령 올리언(메릴 스트립)과 그녀의 아들이자 비서실장 제이슨(조나 힐)의 집무실을 시작으로\n브리(케이트 블란쳇)와 잭(타일러 페리)이 진행하는 인기 프로그램 ‘더 데일리 립’ 출연까지 이어가지만 성과가 없다.\n혜성 충돌까지 남은 시간은 단 6개월, 24시간 내내 뉴스와 정보는 쏟아지고 사람들은 소셜미디어에 푹 빠져있는 시대이지만\n정작 이 중요한 뉴스는 대중의 주의를 끌지 못한다. 도대체 어떻게 해야 세상 사람들이 하늘을 좀 올려다볼 수 있을까?!";
const synopsis3 = "자신의 작품 세계를 고집하며 글을 써오고 있는 소설가 구보(박종환)는\n선배 기영(김경익)이 편집장으로 있는 작은 출판사에 자신의 소설 출간 여부를 결정지으러\n부푼 마음을 안고 아침 일찍 집을 나선다.\n\n기대치 못한 소식을 들은 구보는 허탈한 마음으로 거리를 배회하면서\n다양한 지인들과 우연 혹은 필연적으로 만나게 되는데…";
const synopsis4 = "전설이 된 외팔 파이터의 감동 실화! \n \n선천적으로 왼손 없이 태어나 또래들의 놀림에 익숙해진 닉에게 처음으로 친구가 되어준 애비. \n두 소년은 좋아하는 레슬링을 함께 배우며 깊은 우정을 쌓아간다. \n \n타고난 체력과 감각으로 점점 실력이 늘어가는 애비와 달리 \n장애로 인해 매번 경기에서 패배하던 닉은 급기야 경기장에서 도망치고 만다. \n \n시간이 흘러 재회한 두 사람은 애비의 권유로 종합격투기를 접하게 되고, \n대회에 나가 이기면 상금을 받을 수 있다는 것에 혹해 시작했지만 \n닉 또한 점점 격투기의 매력에 빠져든다. \n \n하지만 대회를 앞둔 애비가 갑작스런 사고로 사망하게 되고, \n슬픔에 빠진 닉은 친구를 대신해 대회에 출전해 대망의 챔피언 결정전까지 오르게 되는데…";
const synopsis5 = "가난한 이민자 출신으로 런던 교외에서 3남매를 키우며 살아가는 벨라.\n어느 날 청각장애를 가진 딸의 몸에 난 멍자국이 정부 당국의 오해를 부르고\n벨라의 아이들은 강제입양 당할 상황에 처한다.\n자신의 가난과 남편의 실직, 그리고 딸의 장애에도 침묵하던 사회 시스템은\n한 순간에 나타나 그녀와 가족의 삶을 아프게 흔들어 놓는다.";
const synopsis6 = "“누가 진짜 나인지 모르겠어요” \n교통사고 현장에서 눈을 뜬 한 남자. \n거울에 비친 낯선 얼굴과 이름, 자신이 누구인지 기억이 나지 않는다. \n\n“또 바뀌었어. 낮에도 바뀌더니 밤에도 또” \n잠시 후, 또 다른 사람의 몸에서 깨어난 남자. \n그는 12시간마다 몸이 바뀐다는 사실을 깨닫게 되고, \n자신을 둘러싼 사람들 사이의 연결고리를 찾기 시작한다. \n그가 12시간마다 몸이 바뀌었던 사람들, 가는 곳마다 나타나는 의문의 여자까지, \n그리고, 이들이 쫓고 있는 한 남자, ‘강이안’. \n\n“이제 알게 됐어. 내가 뭘 해야 되는지” \n모두가 혈안이 되어 쫓고 있는 ‘강이안’이 바로 자신임을 직감한 남자, \n자신을 찾기 위한 사투를 시작하는데… \n\n진짜 나를 찾기 위한 본능적 액션이 시작된다!";
const synopsis7 = "일도 연애도 마음대로 되지 않는 스물아홉 ‘자영’(전종서). \n전 남친과의 격한 이별 후 호기롭게 연애 은퇴를 선언했지만 \n참을 수 없는 외로움에 못 이겨 최후의 보루인 데이팅 어플로 상대를 검색한다. \n \n일도 연애도 호구 잡히기 일쑤인 서른셋 ‘우리’(손석구). \n뒤통수 제대로 맞은 연애의 아픔도 잠시 \n편집장으로부터 19금 칼럼을 떠맡게 되고 데이팅 어플에 반강제로 가입하게 된다. \n \n그렇게 설 명절 아침! \n이름, 이유, 마음 다 감추고 만난 ‘자영’과 ‘우리’. \n1도 기대하지 않았지만, 1일 차부터 둘은 서로에게 급속도로 빠져들게 되고 \n연애인 듯 아닌 듯 미묘한 관계 속에 누구 하나 속마음을 쉽게 터놓지 못하는데... \n \n이게 연애가 아니면 도대체 뭔데? \n발 빼려다 푹 빠졌다!";
const synopsis8 = '“듄을 지배하는 자가 우주를 지배한다!” \n\n10191년, 아트레이데스 가문의 후계자인 폴(티모시 샬라메)은 시공을 초월한 존재이자\n전 우주를 구원할 예지된 자의 운명을 타고났다.\n그리고 어떤 계시처럼 매일 꿈에서 아라키스 행성에 있는 한 여인을 만난다.\n모래언덕을 뜻하는 \'듄\'이라 불리는 아라키스는 물 한 방울 없는 사막이지만\n우주에서 가장 비싼 물질인 신성한 환각제 스파이스의 유일한 생산지로 이를 차지하기 위한 전쟁이 치열하다.\n황제의 명령으로 폴과 아트레이데스 가문은 죽음이 기다리는 아라키스로 향하는데…\n\n위대한 자는 부름에 응답한다, 두려움에 맞서라, 이것은 위대한 시작이다!';

function synop(id){
  if(id==="20210028"){return synopsis1;}
  if(id==="20212015"){return synopsis2;}
  if(id==="20191282"){return synopsis3;}
  if(id==="20212168"){return synopsis4;}
  if(id==="20210611"){return synopsis5;}
  if(id==="20196264"){return synopsis6;}
  if(id==="20205986"){return synopsis7;}
  if(id==="20210087"){return synopsis8;}
  return "wtf";
}

class MovSynopsis extends React.Component{
    constructor(props) {
      super();
  
      this.state = {
        menu: 0,
      };
    }

    

    render(){
      console.log("aaaaaa" + this.props.cont);
        return(
            <div><pre class="synopsis">{synop(this.props.cont)}</pre></div>
        )
    }
  }
  
  
  export default MovSynopsis;