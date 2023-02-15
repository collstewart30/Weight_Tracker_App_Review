const DisplayEntries = ({parentEntries}) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Entry Number</th>
          <th>Weight</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {parentEntries.map((entry, index) => {
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{entry.weight}</td>
              <td>{entry.date}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default DisplayEntries;
