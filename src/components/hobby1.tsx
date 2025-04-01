import bloonsLogo from "../assets/BloonsTD6Logo.jpg";
import {List1} from "./list1.tsx";
import {Table1} from "./table1.tsx";
import {Form1} from "./form1.tsx";

function Hobby1 () {
    return (
        <>
            <h2>Bloons TD 6</h2>

            <img src={bloonsLogo} alt="Bloons TD6 Logo" />

            <p>
                Bloons TD6 is the sixth installment in Ninja Kiwi's running Bloons series.
                It features endless waves of balloons (called bloons) which are a threat to monkey civilization.
                The player is tasked with buying and upgrading various specialized monkeys to fend off the bloon
                invasion.
                There are a number of difficulties such as easy, reverse, or medium, but the one true difficulty is
                CHIMPS.
            </p>
            <p>CHIMPS stands for the following:</p>
            <List1/>

            <p>There are also a wide variety of bloon types, each with increasing difficulty</p>
            <Table1/>

            <hr/>

            <Form1/>
        </>
    )
}

export default Hobby1;