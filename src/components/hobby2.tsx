import { FC, ReactElement } from "react";
import snowboardImg from "../assets/snowboard.jpg";
import {List2} from "./list2.tsx";
import {Table2} from "./table2.tsx";
import {Form2} from "./form2.tsx";

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
      <List2/>
      <p>
        I would rank the past 3 trips I took like this:
      </p>
      <Table2/>
      <Form2/>
    </>
  );
};
