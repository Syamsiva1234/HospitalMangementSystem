// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import { getallUsers } from '../service/api'

// const OurScience = () => {

//     let [state, setState] = useState({
//         About: true,
//         Intimations: false,
//         Abstracts: false,
//         Device: false,
//         Milesstones: false
//     })
//     let { About, Intimations, Abstracts, Device, Milestones } = state
//     let stateHndler = (event) => {
//         console.log(event.target.name)
//         // const value = event.target.value;
//         setState({
//             About: event.target.name === 'About' ? true : false,
//             Intimations: event.target.name === 'Intimations' ? true : false,
//             Abstracts: event.target.name === 'Abstracts' ? true : false,
//             Device: event.target.name === 'Device' ? true : false,
//             Milestones: event.target.name === 'Milestones' ? true : false,
//         });
//     }
//     let { id } = useParams()
//     let [patient, setPatient] = useState("");
//     let src = "https://www.w3schools.com/w3css/img_avatar3.png";

//     const loadUserData = async (id) => {
//         console.log(id)
//         let response;
//         if (id) {
//             response = await getallUsers(id);
//             response = response.data[0];
//         } else {
//             response = await getallUsers();
//             response = (response.data.patients).reverse()[0];
//         }
//         setPatient(response);
//     }

//     useEffect(() => {
//         loadUserData(id);
//     }, [id]);
//     return (
//         <div className='container p-1 p-md-4 m-auto '  >
//             <h1 className='d-none d-md-block p-0 text-white' style={{
//                 fontWeight: "700", fontSize: "32px", marginLeft: "0%"
//             }}> RWD</h1>

//             {About && (<><h3 className='text-white'>About</h3>
//                 <p className='text-white'>( {patient.username} )</p><br />
//                 <p className='text-white'>{patient.about}</p>
//                 <br />
//             </>)}

//             {Abstracts && (
//                 <div>
//                     <h3 className='text-white'>Abstracts</h3><br />
//                     <p className='text-white'> {patient.abstract}</p>
//                 </div>)
//             }
//             {Intimations && (
//                 <div>
//                     <h3 className='text-white'>Intimations</h3><br />
//                     <p className='text-white'>{patient.intimations}</p>
//                 </div>)
//             }
//             {Device && (
//                 <div>
//                     <h3 className='text-white'>Devices</h3><br />
//                     <p className='text-white'>{patient.devices}</p>
//                 </div>)
//             }
//             {Milestones && (
//                 <div className='text-white'>
//                     <h3>Milesstones</h3><br />
//                     <p className='text-white'>{patient.milestone}</p>
//                 </div>)
//             }
//             <div>
//                 <button id='too' name='About' onClick={stateHndler} className='acti btn borderThick border-white m-2 col focus'>About</button>
//                 <button id='too2' name='Intimations' onClick={stateHndler} className='acti btn borderThick border-white m-2 col focus' >Intimations</button>
//                 <button id='too3' name='Abstracts' onClick={stateHndler} className='acti btn borderThick border-white m-2 col focus'>Abstracts</button>
//                 <button id='too4' name='Device' onClick={stateHndler} className='acti btn borderThick border-white m-2 col focus' >Device</button>
//                 <button id='too5' name='Milestones' onClick={stateHndler} className='acti btn borderThick border-white m-2 col focus'>Milestones</button>
//             </div>
//         </div >
//     )
// }

// export default OurScience
import React, { Component } from 'react'
import { getallUsers } from '../service/api';
import { useParams } from "react-router-dom";

function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
}

class OurScience extends Component {
    constructor(props) {
        super(props);
        this.state = {
            About: true,
            Intimations: false,
            Abstracts: false,
            Device: false,
            Milestones: false,
            patient: []
        };
    }

    stateHndler = (event) => {
        console.log(event.target.name)
        this.setState({
            About: event.target.name === 'About' ? true : false,
            Intimations: event.target.name === 'Intimations' ? true : false,
            Abstracts: event.target.name === 'Abstracts' ? true : false,
            Device: event.target.name === 'Device' ? true : false,
            Milestones: event.target.name === 'Milestones' ? true : false,
        });
    }

    loadUserData = async (id) => {
        console.log(id)
        let response;
        if (id) {
            response = await getallUsers(id);
            response = response.data[0];
            console.log(response)
        } else {
            response = await getallUsers();
            response = (response.data).reverse()[0];
        }
        this.setState({ patient: response });
    }

    componentDidMount() {
        let { id } = this.props.params;
        this.loadUserData(id);
    }

    render() {
        return (
            <div className='container p-1 p-md-4 m-auto '  >
                <h1 className='d-none d-md-block p-0 text-white' style={{
                    fontWeight: "700", fontSize: "32px", marginLeft: "0%"
                }}> Hospital Mangement System</h1>
                {this.state.About && (<><h3 className='text-white'>About</h3>
                    <p className='text-white'>( {this.state.patient['username']} )</p><br />
                    <p className='text-white'>{this.state.patient.about}</p>
                    <br />
                </>)}
                {this.state.Abstracts && (
                    <div>
                        <h3 className='text-white'>Abstracts</h3><br />
                        <p className='text-white'> {this.state.patient.abstract}</p>
                    </div>)
                }
                {this.state.Intimations && (
                    <div>
                        <h3 className='text-white'>Intimations</h3><br />
                        <p className='text-white'>{this.state.patient.intimations}</p>
                    </div>)
                }
                {this.state.Device && (
                    <div>
                        <h3 className='text-white'>Devices</h3><br />
                        <p className='text-white'>{this.state.patient.devices}</p>
                    </div>)
                }
                {this.state.Milestones && (
                    <div className='text-white'>
                        <h3>Milesstones</h3><br />
                        <p className='text-white'>{this.state.patient.milestone}</p>
                    </div>)
                }
                <div>
                    <button id='too' name='About' onClick={this.stateHndler} className='acti btn borderThick border-white m-2 col focus'>About</button>
                    <button id='too2' name='Intimations' onClick={this.stateHndler} className='acti btn borderThick border-white m-2 col focus' >Intimations</button>
                    <button id='too3' name='Abstracts' onClick={this.stateHndler} className='acti btn borderThick border-white m-2 col focus'>Abstracts</button>
                    <button id='too4' name='Device' onClick={this.stateHndler} className='acti btn borderThick border-white m-2 col focus' >Device</button>
                    <button id='too5' name='Milestones' onClick={this.stateHndler} className='acti btn borderThick border-white m-2 col focus'>Milestones</button>
                </div>
            </div >
        )
    }
}

export default withParams(OurScience)