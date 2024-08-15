import React from "react";

const CourseTable = () => {
  return (
    <div className="courseTable">
      <div className="title">
        <div className="heading">POPULAR COURSES</div>
        <span>All Courses</span>
      </div>
      <div>
        <table>
          <thead>
            <th>COURSE NAME</th>
            <th>CREATED</th>
            <th>LAST UPDATE</th>
            <th>ENROLLED</th>
            <th>STARTED</th>
            <th>COMPLETED</th>
            <th>AVERAGE PROGRESS</th>
          </thead>
          <tbody>
            <tr>
              <td>Figma Basics</td>
              <td>21-03-2020</td>
              <td>20-04-2022</td>
              <td>263</td>
              <td>110</td>
              <td>99</td>
              <td>
                <div>65%</div>
                <div>progress-bar</div>
              </td>
            </tr>
            <tr>
              <td>Figma Basics</td>
              <td>21-03-2020</td>
              <td>20-04-2022</td>
              <td>263</td>
              <td>110</td>
              <td>99</td>
              <td>
                <div>65%</div>
                <div>progress-bar</div>
              </td>
            </tr>
            <tr>
              <td>Figma Basics</td>
              <td>21-03-2020</td>
              <td>20-04-2022</td>
              <td>263</td>
              <td>110</td>
              <td>99</td>
              <td>
                <div>65%</div>
                <div>progress-bar</div>
              </td>
            </tr>
            <tr>
              <td>Figma Basics</td>
              <td>21-03-2020</td>
              <td>20-04-2022</td>
              <td>263</td>
              <td>110</td>
              <td>99</td>
              <td>
                <div>65%</div>
                <div>progress-bar</div>
              </td>
            </tr>
            <tr>
              <td>Figma Basics</td>
              <td>21-03-2020</td>
              <td>20-04-2022</td>
              <td>263</td>
              <td>110</td>
              <td>99</td>
              <td>
                <div>65%</div>
                <div>progress-bar</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CourseTable;
