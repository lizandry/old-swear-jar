import * as React from 'react';
import TeamTable from './Components/TeamTable';

interface IProps {
//   user: object;
//   teams: any[];
//   userTeams: number[];
}

// REFACTOR move these things into "Interfaces" folder
interface IState {
  user: number;
  loggedIn: boolean;
}


// TODO auth0 integration
// TODO write some functions that set user state and then pass "User" class
class App extends React.Component {
    constructor(props: object) {
        super(props);
        this.state = {
            // user: 0,
            user: 1,
            loggedIn: false
        };
    }

// IN PROGRESS let's hardcode user 1 for now, and get the table to map their teams

    componentDidMount() {

    }


    // TODO if this.state.user === 0, auth0 modal
    // TODO if this.state.user !== 0, UserDashboard component

    
    render() {

        return (
            <div className='App'>
                hi
                <TeamTable
                    // data=
                />
                {/* <SampleElem
                    userID={this.state.user}
                >
                
                </SampleElem>*/}
            </div>
        )
    }
}
export default App;