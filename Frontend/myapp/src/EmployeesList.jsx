import React from 'react';


class EmployeesList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            'employees': [],
        }
    }

    componentDidMount(){
        fetch('http://0.0.0.0:3000/employees')
        .then(res => res.json())
        .then(data => {
            this.setState({'employees': data})
        }
        )
    }

    render(){
        const {employees} = this.state;
        
        return(
            <div className="main">
                <ul>{employees.map(eachEmployee => <li>{eachEmployee.first_name}</li>)}</ul>
            </div>
        )
    }
}

export default EmployeesList;