import { FC, ReactElement } from "react";

export const Form2: FC = (): ReactElement => {
  return (
    <>
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
