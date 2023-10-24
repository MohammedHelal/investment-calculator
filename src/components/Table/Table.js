import TableRow from "./TableRow";
import styles from "./Table.module.css";

function Table({ tableData }) {
  return (
    <table className={styles.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((e) => (
          <TableRow
            year={e.year}
            savingsEndOfYear={e.savingsEndOfYear}
            yearlyInterest={e.yearlyInterest}
            accumulatedInterest={e.accumulatedInterest}
            yearlyContribution={e.yearlyContribution}
          />
        ))}
      </tbody>
    </table>
  );
}

export default Table;
