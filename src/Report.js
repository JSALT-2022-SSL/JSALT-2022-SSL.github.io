import React from 'react'
import './index.css';

class ReportPage extends React.Component {
    render() {
        return (
            <div id="main">
                <section className="post">
                    <header>
                        <h3>Report</h3>
                    </header>
                    <div className="table-wrapper">
                        <table>
                            <thead>
                            <tr>
                                <th>Week</th>
                                <th>Link</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Week 1</td>
                                <td><a
                                    href="https://github.com/JSALT-2022-SSL/JSALT-2022-SSL.github.io/raw/gh-pages/report/%20JSALT%20Progress%20Report%20Week%201%20(Read%20only).pdf">PDF</a>
                                </td>
                            </tr>
                            <tr>
                                <td>Week 2</td>
                                <td><a
                                    href="https://raw.githubusercontent.com/JSALT-2022-SSL/JSALT-2022-SSL.github.io/main/public/report/JSALT-Progress-Report-Week-2.pdf">PDF</a>
                                </td>
                            </tr>
                            </tbody>
                            <tfoot>
                            </tfoot>
                        </table>
                    </div>

                </section>
            </div>
        )
    }
}

export {ReportPage}
