function TableRow({
  year,
  savingsEndOfYear,
  yearlyInterest,
  accumulatedInterest,
  yearlyContribution,
}) {
  return (
    <tr>
      <td>{year}</td>
      <td>${savingsEndOfYear}</td>
      <td>${yearlyInterest}</td>
      <td>${accumulatedInterest}</td>
      <td>${yearlyContribution}</td>
    </tr>
  );
}

export default TableRow;
