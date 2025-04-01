import { FC, ReactElement } from "react";
import snowboardImg from "../assets/snowboard.jpg";

export const Hobby2: FC = (): ReactElement => {
  return (
    <>
      <h3>Snowboarding</h3>
      <p style={{
        border: "blue"
      }}>
        I like snowboarding during the winter. I first started snowboarding 10 years ago. My favorite mountain is <a href={"https://en.wikipedia.org/wiki/Jay_Peak_Resort"}>Jay Peak</a> in Vermont. I spend most of my time on the mountain in glades rather than on the trails&mdash;my favorite snow is powder.
      </p>
      <img src={snowboardImg} alt={"Someone snowboarding"} width={"500px"}/>
      <p>
        Some mountains I've been to include:
      </p>
      <ul>
        <li>Jay Peak</li>
        <li>Sunday River</li>
        <li>Cannon</li>
        <li>Okemo</li>
        <li>Waterville Valley</li>
      </ul>
      <p>
        I would rank the past 3 trips I took like this:
      </p>
      <table>
        <thead>
          <tr>
            <th>Mountain</th>
            <th>Rating</th>
            <th>Out of 10</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Jay Peak</td>
            <td>Great</td>
            <td>8</td>
          </tr>
          <tr>
            <td>Wachusett</td>
            <td>Good</td>
            <td>5</td>
          </tr>
          <tr>
            <td>Wachusett</td>
            <td>Ok</td>
            <td>4</td>
          </tr>
        </tbody>
      </table>
      <form className={"padded"}>

        <div>
          <label htmlFor={"text_1"}>Text 1</label>
          <input type={"text"} id={"text_1"}/>
        </div>

        <div>
          <label htmlFor={"text_2"}>Text 2</label>
          <input type={"text"} id={"text_2"}/>
        </div>

        <div>
          <label htmlFor={"check_1"}>Checkbox 1</label>
          <input type={"checkbox"} id={"check_1"}/>
        </div>

        <div>
          <label htmlFor={"check_2"}>Checkbox 2</label>
          <input type={"checkbox"} id={"check_2"}/>
        </div>

        <div>
          <label htmlFor={"check_3"}>Checkbox 3</label>
          <input type={"checkbox"} id={"check_3"}/>
        </div>

        <div>
          <label htmlFor={"radio_1"}>Radio Button 1</label>
          <input type={"radio"} id={"radio_1"} name={"radio"}/>
        </div>

        <div>
          <label htmlFor={"radio_2"}>Radio Button 2</label>
          <input type={"radio"} id={"radio_2"} name={"radio"}/>
        </div>

        <div>
          <label htmlFor={"radio_3"}>Radio Button 3</label>
          <input type={"radio"} id={"radio_3"} name={"radio"}/>
        </div>

        <div style={{
          paddingBottom: 0,
        }}>
          <label htmlFor={"textarea_1"}>Comments:</label>
        </div>

        <div>
          <textarea/>
        </div>

        <div>
          <button type={"submit"}>
            Submit
          </button>
        </div>

      </form>
    </>
  );
};
