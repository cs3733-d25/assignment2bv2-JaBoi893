import { FC, ReactElement } from "react";

export const Table2: FC = (): ReactElement => {
  return (
    <>
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
    </>
  );
};
