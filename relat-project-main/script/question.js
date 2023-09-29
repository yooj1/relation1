class QPage {
  constructor(){
    this.nowQuestion = 0;
  }
  init(){
    this.drawNode();
    this.sideNav();
  }
  sideNav(){
    const foldBtn = document.querySelector('#foldBtn');
    const leftNav = document.querySelector('#leftNav');
    const questionBtn = document.querySelectorAll('#questionList li a');
    let foldOpen = true;
    const removeClass = ()=>{
      questionBtn.forEach((btn, index)=>{
        btn.classList.remove('on');
      });
    }

    questionBtn.forEach((btn, index)=>{
      btn.addEventListener('click', (e)=>{
        e.preventDefault();
        removeClass();
        btn.classList.add('on');
        this.nowQuestion = index;
        this.removeSvg()
        this.drawNode();
      })
    });

    foldBtn.addEventListener('click',(e)=>{
      foldOpen = !foldOpen;

      if(!foldOpen){
        leftNav.classList.remove('on');
        foldBtn.classList.remove('on');
      }
      else{
        leftNav.classList.add('on');
        foldBtn.classList.add('on');
      }
    });
  }
  removeSvg(){
    const svg = document.querySelector('#main svg');
    const svgEl = svg.querySelectorAll("g");
    svgEl.forEach((svgEl)=>{
      svg.removeChild(svgEl);
    });
  }
  drawNode(){

    let nodes = [];
    let links = [];

    switch(this.nowQuestion){
      case 0:
        nodes = [
          { name: "1",title:"제목이 어쩌구",  path:"/img/svg/gh1.svg"},
          { name: "2",title:"그래서 저쩌구",  path:"/img/svg/gj1.svg"},
          { name: "3", title:"유진이", path:"/img/svg/mj1.svg" },
          { name: "4", title:"바보", path:"/img/svg/oj1.svg" },
          { name: "5", title:"d3", path:"/img/svg/sh1.svg" },
          { name: "6", title:"연습", path:"/img/svg/sy1.svg" },
          { name: "7", title:"연습", path:"/img/svg/yj1.svg" },
        ];
        links = [
          { source: "1", target: "2" },
          { source: "2", target: "3" },
          { source: "3", target: "4" },
          { source: "4", target: "2" },
          { source: "5", target: "2" },
          { source: "5", target: "7" },
          { source: "6", target: "7" },
          { source: "6", target: "1" },
          { source: "6", target: "2" },
          { source: "6", target: "4" },
        ];
        break;
      case 1 :
        nodes = [
          { name: "1", title:"기본", path:"/img/svg/gh2.svg" },
          { name: "2", title:"기능", path:"/img/svg/gj2.svg" },
          { name: "3", title:"구현", path:"/img/svg/mj2.svg" },
          { name: "4", title:"테스트중", path:"/img/svg/oj2.svg" },
          { name: "5", title:"이거", path:"/img/svg/sh2.svg" },
          { name: "6", title:"나름", path:"/img/svg/sy2.svg" },
          { name: "7", title:"재밌을", path:"/img/svg/uj2.svg" },
          { name: "8", title:"지도?", path:"/img/svg/yh2.svg" },
          { name: "9", title:"후후", path:"/img/svg/yj2.svg" },
        ];
        links = [
          { source: "1", target: "2" },
          { source: "2", target: "3" },
          { source: "3", target: "4" },
          { source: "4", target: "5" },
          { source: "4", target: "6" },
          { source: "5", target: "7" },
          { source: "6", target: "8" },
          { source: "7", target: "9" },
          { source: "8", target: "1" },
        ];
        break;
      case 2 :
        nodes = [
          { name: "1", title:"", path:"/img/svg/gh3.svg" },
          { name: "2", title:"", path:"/img/svg/gj3.svg" },
          { name: "3", title:"", path:"/img/svg/mj3.svg" },
          { name: "4", title:"", path:"/img/svg/oj3.svg" },
          { name: "5", title:"", path:"/img/svg/sh3.svg" },
          { name: "6", title:"", path:"/img/svg/sy3.svg" },
          { name: "7", title:"", path:"/img/svg/uj3.svg" },
          { name: "8", title:"", path:"/img/svg/yh3.svg" },
          { name: "9", title:"", path:"/img/svg/yj3.svg" },
        ];
        links = [
          { source: "1", target: "2" },
          { source: "2", target: "3" },
          { source: "4", target: "5" },
          { source: "4", target: "1" },
          { source: "5", target: "7" },
          { source: "5", target: "9" },
          { source: "6", target: "8" },
          { source: "7", target: "9" },
          { source: "8", target: "1" },
        ];
        break;
      case 3 :
        nodes = [
          { name: "1", title:"", path:"/img/svg/gh4.svg" },
          { name: "2", title:"", path:"/img/svg/gj4.svg" },
          { name: "3", title:"", path:"/img/svg/mj4.svg" },
          { name: "4", title:"", path:"/img/svg/oj4.svg" },
          { name: "5", title:"", path:"/img/svg/sh4.svg" },
          { name: "6", title:"", path:"/img/svg/sy4.svg" },
          { name: "7", title:"", path:"/img/svg/uj4.svg" },
          { name: "8", title:"", path:"/img/svg/yh4.svg" },
          { name: "9", title:"", path:"/img/svg/yj4.svg" },
        ];
        links = [
          { source: "1", target: "8" },
          { source: "2", target: "9" },
          { source: "3", target: "7" },
          { source: "4", target: "5" },
          { source: "4", target: "6" },
          { source: "5", target: "7" },
          { source: "6", target: "8" },
          { source: "7", target: "2" },
          { source: "8", target: "1" },
        ];
        break;
      case 4 :
        nodes = [
          { name: "1", title:"", path:"/img/svg/gh5.svg" },
          { name: "2", title:"", path:"/img/svg/gj5.svg" },
          { name: "3", title:"", path:"/img/svg/mj5.svg" },
          { name: "4", title:"", path:"/img/svg/oj5.svg" },
          { name: "5", title:"", path:"/img/svg/sh5.svg" },
          { name: "6", title:"", path:"/img/svg/sy5.svg" },
          { name: "7", title:"", path:"/img/svg/uj5.svg" },
          { name: "8", title:"", path:"/img/svg/yh5.svg" },
          { name: "9", title:"", path:"/img/svg/yj5.svg" },
        ];
        links = [
          { source: "1", target: "2" },
          { source: "2", target: "3" },
          { source: "3", target: "4" },
          { source: "4", target: "5" },
          { source: "4", target: "1" },
          { source: "5", target: "1" },
          { source: "6", target: "1" },
          { source: "7", target: "3" },
          { source: "8", target: "1" },
          { source: "8", target: "9" },
        ];
        break;
      case 5 :
        nodes = [
          { name: "1", title:"", path:"/img/svg/gh6.svg" },
          { name: "2", title:"", path:"/img/svg/gj6.svg" },
          { name: "3", title:"", path:"/img/svg/mj6.svg" },
          { name: "4", title:"", path:"/img/svg/oj6.svg" },
          { name: "5", title:"", path:"/img/svg/sh6.svg" },
          { name: "6", title:"", path:"/img/svg/sy6.svg" },
          { name: "7", title:"", path:"/img/svg/uj6.svg" },
          { name: "8", title:"", path:"/img/svg/yh6.svg" },
          { name: "9", title:"", path:"/img/svg/yj6.svg" },
        ];
        links = [
          { source: "1", target: "2" },
          { source: "2", target: "3" },
          { source: "3", target: "4" },
          { source: "4", target: "5" },
          { source: "4", target: "6" },
          { source: "5", target: "7" },
          { source: "6", target: "8" },
          { source: "7", target: "9" },
          { source: "8", target: "1" },
        ];
        break;
    }
    
    // ... (노드 및 링크 데이터 설정 부분은 이전과 동일하게 유지)
    
    const svg = d3.select("svg")
                  .attr("width", innerWidth)
                  .attr("height", innerHeight)
    ; // SVG 컨테이너 선택

    const node = svg
      .selectAll("g")
      .data(nodes)
      .join("g")
      .each(function (d) {
        d3.select(this).append("image").attr("xlink:href",(d)=> d.path)
          .attr("height", 100).attr("width", 100)
          .attr("x", -50).attr("y", -50);
        d3.select(this).append("text").text((d) => d.title)
          .attr("text-anchor", "right")
          .attr("dy",-60);
      })
      .call(
        d3
          .drag()
          .on("start", function (d) {
            if (!d3.event.active) simulation.alphaTarget(0.3).restart();
            d.fx = d.x;
            d.fy = d.y;
            d3.select(this).raise().attr("stroke", "black");
          })
          .on("drag", function (d) {
            d.fx = d3.event.x;
            d.fy = d3.event.y;
          })
          .on("end", function (d) {
            if (!d3.event.active) simulation.alphaTarget(0);
            d.fx = null;
            d.fy = null;
            d3.select(this).attr("stroke", null);
          })
      );
    
    const link = svg
      .selectAll("line")
      .data(links)
      .join("line")
      .attr("stroke", "rgba(0,0,0,.3)")
      .lower();
    
    function drawNodes() {
      node.attr("transform", (d) => "translate(" + [d.x, d.y] + ")");
    }
    
    function drawLines() {
      link
        .attr("x1", (d) => d.source.x)
        .attr("y1", (d) => d.source.y)
        .attr("x2", (d) => d.target.x)
        .attr("y2", (d) => d.target.y);
    }
    
    const simulation = d3
      .forceSimulation(nodes)
      .force("charge", d3.forceManyBody().strength(-30))
      .force("center", d3.forceCenter(innerWidth/2, innerHeight/2))
      .force("link", d3.forceLink(links).id((d) => d.name))
      .force("collide", d3.forceCollide().radius(70))
      .on("tick", () => {
        drawNodes();
        drawLines();
      });
  }

}

const qPage = new QPage();
qPage.init();



