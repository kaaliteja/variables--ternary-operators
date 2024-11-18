import React from 'react'

export default function MarkSheet(props) {
        let engMarks = Number(props.engMarks);
        let telMarks = Number(props.telMarks);
        let hindiMarks =Number(props.hindiMarks);
        let mathsMarks = Number(props.mathsMarks);
        let sciMarks = Number(props.sciMarks);
        let socMarks = Number(props.socMarks);


        let totalMarks = engMarks+telMarks+hindiMarks+mathsMarks+sciMarks+socMarks;

  return (
    <div>
      <table>
      <caption>{props.name} Marks</caption>
        <thead>
            <tr>
                <th>Subject Name</th>
                <th>Max.Marks</th>
                <th>Marks Gained</th>
                <th>Result</th>
                <th>Remarks</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>English</td>
                <td>100</td>
                <td>{engMarks}</td>
                <td>{engMarks >=35?"Pass":"Fail"}</td>
                <td>Very Good</td>
            </tr>
            <tr>
                <td>Telugu</td>
                <td>100</td>
                <td>{telMarks}</td>
                <td>{telMarks >=35?"Pass":"Fail"}</td>
                <td>Very Good</td>
            </tr>
            <tr>
                <td>Hindi</td>
                <td>100</td>
                <td>{hindiMarks}</td>
                <td>{hindiMarks >=35?"Pass":"Fail"}</td>
                <td>Very Good</td>
            </tr>
            <tr>    
                <td>Mathematics</td>
                <td>100</td>
                <td>{mathsMarks}</td>
                <td>{mathsMarks>=35?"Pass":"Fail"}</td>
                <td>Very Good</td>
            </tr>
            <tr>
                <td>Science</td>
                <td>100</td>
                <td>{sciMarks}</td>
                <td>{sciMarks>=35?"Pass":"Fail"}</td>
                <td>Very Good</td>
            </tr>
            <tr>
                <td>Social</td>
                <td>100</td>
                <td>{socMarks}</td>
                <td>{socMarks>=35?"Pass":"Fail"}</td>
                <td>Very Good</td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td>Total Marks</td>
                <td>600</td>
                <td>{totalMarks}</td>
                <td>pass</td>
                <td>Good</td>
            </tr>
        </tfoot>
      </table>
    </div>
  )
}
