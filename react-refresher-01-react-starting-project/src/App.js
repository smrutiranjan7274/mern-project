import React, { useState } from "react";

import GoalList from "./components/GoalList/GoalList";
import NewGoal from "./components/NewGoal/NewGoal";

import "./App.css";

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    { id: "cg1", text: "Finish the course" },
    { id: "cg2", text: "Learn all about the course Main Topics" },
    { id: "cg3", text: "Help other students in the Q&A" },
  ]);

  const addNewGoalHandler = (newGoal) => {
    setCourseGoals((prevCourseGoals) => prevCourseGoals.concat(newGoal));
  };

  // return React.createElement("h1", { title: "This is a title." },"Hi, this is React!");
  return (
    <div className="course-goals">
      <h2>Course Goals</h2>
      <NewGoal onAddGoal={addNewGoalHandler} />
      <GoalList goals={courseGoals} />
    </div>
  );
};

// class App extends React.Component {
//   render() {
//     return (
//       <h1 title="This is a title.">
//         <span>Hello</span> Hi, this is ReactJS!
//       </h1>
//     );
//   }
// }

export default App;
