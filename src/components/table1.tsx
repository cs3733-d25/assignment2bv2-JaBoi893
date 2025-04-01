import { FC, ReactElement } from "react";

export const Table1: FC = (): ReactElement => {
  return (
    <>
      <table>
        <caption>Bloon Types</caption>
        <thead>
        <tr>
          <th>Bloons</th>
          <th>MOAB Class</th>
          <th>Special Properties</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <th>Red</th>
          <th>MOAB</th>
          <th>Camo</th>
        </tr>
        <tr>
          <th>Blue</th>
          <th>BFB</th>
          <th>Regrow</th>
        </tr>
        <tr>
          <th>Green</th>
          <th>ZOMG</th>
          <th>Lead</th>
        </tr>
        <tr>
          <th>Yellow</th>
          <th>DDT</th>
          <th>Fortified</th>
        </tr>
        <tr>
          <th>Pink</th>
          <th>BAD</th>
          <th>Purple</th>
        </tr>
        <tr>
          <th>Black</th>
          <th>Boss</th>
          <th>Black</th>
        </tr>
        <tr>
          <th>White</th>
          <th>&nbsp;</th>
          <th>White</th>
        </tr>
        <tr>
          <th>Zebra</th>
          <th>&nbsp;</th>
          <th>MOAB Class</th>
        </tr>
        <tr>
          <th>Rainbow</th>
          <th>&nbsp;</th>
          <th>Ceramic</th>
        </tr>
        </tbody>
      </table>
    </>
  );
};
