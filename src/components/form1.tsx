import { FC, ReactElement } from "react";

export const Form1: FC = (): ReactElement => {
  return (
    <>
      <form>
        <label htmlFor="firstname">Enter your first name:</label>
        <input type="text" id="firstname"/>
        <br/>
        <label htmlFor="lastname">Enter your last name:</label>
        <input type="text" id="lastname"/>
        <br/>
        <input type="checkbox" id="experience"/>
        <label htmlFor="experience">New to Bloons?</label>
        <br/>
        <input type="checkbox" id="chimps"/>
        <label htmlFor="chimps">Beaten CHIMPS?</label>
        <br/>
        <input type="checkbox" id="boss"/>
        <label htmlFor="boss">Beaten any Bosses?</label>
        <br/>
        <label htmlFor="favmonkey">Favorite monkey:</label>
        <select id="favmonkey">
          <option value="">Dart Monkey</option>
          <option value="">Boomerang Monkey</option>
          <option value="">Bomb Shooter</option>
          <option value="">Tack Shooter</option>
          <option value="">Ice Monkey</option>
          <option value="">Glue Gunner</option>
          <option value="">Sniper Monkey</option>
          <option value="">Monkey Sub</option>
          <option value="">Monkey Buccaneer</option>
          <option value="">Monkey Ace</option>
          <option value="">Heli Pilot</option>
          <option value="">Mortar Monkey</option>
          <option value="">Dartling Gunner</option>
          <option value="">Wizard Monkey</option>
          <option value="">Super Monkey</option>
          <option value="">Ninja Monkey</option>
          <option value="">Alchemist</option>
          <option value="">Druid</option>
          <option value="">Mermonkey</option>
          <option value="">Banana Farm</option>
          <option value="">Spike Factory</option>
          <option value="">Monkey Village</option>
          <option value="">Engineer Monkey</option>
          <option value="">Beast Handler</option>
        </select>
        <br/>
        <label htmlFor="comments">Any other comments?</label>
        <input type="text" id="comments"/>
        <br/>
        <br/>
        <input type="submit" value="Submit"/>
      </form>
      <hr/>

      <p>Monkey Money Reward Calculator</p>
      <form>
        <p>Difficulty</p>
        <input type="radio" id="Easy" name="Difficulty" value="Easy"/>
        <label htmlFor="Easy">Easy</label>
        <input type="radio" id="Medium" name="Difficulty" value="Medium"/>
        <label htmlFor="Medium">Medium</label>
        <input type="radio" id="Hard" name="Difficulty" value="Hard"/>
        <label htmlFor="Hard">Hard</label>
        <input type="radio" id="Impoppable" name="Difficulty" value="Impoppable"/>
        <label htmlFor="Impoppable">Impoppable</label>
        <br/>
        <p>Map Difficulty</p>
        <input type="radio" id="Beginner" name="MapDifficulty" value="Beginner"/>
        <label htmlFor="Beginner">Beginner</label>
        <input type="radio" id="Intermediate" name="MapDifficulty" value="Intermediate"/>
        <label htmlFor="Intermediate">Intermediate</label>
        <input type="radio" id="Advanced" name="MapDifficulty" value="Advanced"/>
        <label htmlFor="Advanced">Advanced</label>
        <input type="radio" id="Expert" name="MapDifficulty" value="Expert"/>
        <label htmlFor="Expert">Expert</label>
        <br/>
        <br/>
        <input type="button" id="calculator" value="Submit"/>
      </form>

    </>
  );
};
