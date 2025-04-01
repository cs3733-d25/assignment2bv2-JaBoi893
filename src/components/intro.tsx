import { FC, ReactElement } from "react";

export const Intro: FC<{ names: string[] }> = ({ names }): ReactElement => {

  // make mutable
  names = [...names];

  return (
    <>
      <h2>Group Members:</h2>
      <p>
        My name's {names.shift()}. I'm a sophomore CS major.
      </p>
      <p>
        My name's {names.shift()}. I'm a sophomore CS major.
      </p>
    </>
  );
};
