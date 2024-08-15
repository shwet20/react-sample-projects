import CourseTable from "./components/CourseTable";
import GraphCard from "./components/GraphCard";
import Header from "./components/Header";
import LeatherBoard from "./components/LeatherBoard";
import ScoreCard from "./components/ScoreCard";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="App">
      <div class="wrapper">
        <SideBar />
        <div className="container">
          <Header />
          <div className="cards">
            <ScoreCard
              title={"COMPLETION RATE"}
              percent={"92%"}
              arrow={"up"}
              arrowPercent={"2.13%"}
              subinfo1={"STARTED"}
              num1={"791"}
              subinfo2={"COMPLETED"}
              num2={"648"}
            />
            <ScoreCard
              title={"ACTIVATION RATE"}
              percent={"64%"}
              arrow={"down"}
              arrowPercent={"1.85%"}
              subinfo1={"INVITED"}
              num1={"1262"}
              subinfo2={"ACTIVATED"}
              num2={"1061"}
            />
            <ScoreCard
              title={"ENROLLMENT RATE"}
              percent={"83%"}
              arrow={"up"}
              arrowPercent={"0.72%"}
              subinfo1={"ASSIGNED"}
              num1={"1341"}
              subinfo2={"ENROLLED"}
              num2={"1262"}
            />
          </div>
          <div className="graphRow">
            <GraphCard />
            <LeatherBoard />
          </div>
          <CourseTable />
        </div>
      </div>
    </div>
  );
}

export default App;
