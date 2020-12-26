import React from 'react';
import axios from 'axios';
import './Style/Scrolling.css'
import 'semantic-ui-css/semantic.min.css'
import {  Table } from 'semantic-ui-react'
import Loader from './Loader'
import LoaderComponent from './Loader';

class Scrolling extends React.Component {
    state = {
        userData:[],
        loading:true,
    }

    fetchUserData = async (page) => {
        const response = await axios.get(`https://randomuser.me/api/?page=${page}&results=10&seed=abc`)
        this.setState({
            userData:[...this.state.userData,response.data.results],
            loading:false
        })
        
    }
   componentDidMount(){
      this.fetchUserData(this.state.page)
   }

   loadMore= (e) =>{
       this.fetchUserData();
       let bottom = e.target.scrollHeight - e.target.clientHeight - e.target.scrollTab < 10;
       console.log(bottom)
       if (bottom) {
           let page = page + 1;
           this.fetchUserData(page)
       }
   }
    
    render(){
               return (<>
                {this.state.loading && <LoaderComponent/>}
                    <h1>Infinity Scroll</h1>
                   <div onScroll={this.loadMore} className='container'>
                   {this.state && this.state.userData.map((value)=>{
                      return    value.map((element)=>{
                       return  <div>
                           <Table basic='very' celled collapsing>
                               <Table.Header>
                                   <Table.Row>
                                       <Table.HeaderCell>Employee Name</Table.HeaderCell>
                                       <Table.HeaderCell>Employee Email </Table.HeaderCell>
                                       <Table.HeaderCell>Employee Gender</Table.HeaderCell>
                                       <Table.HeaderCell>Employee Phone</Table.HeaderCell>
                                       <Table.HeaderCell>Employee Picture</Table.HeaderCell>
                                       <Table.HeaderCell>Employee Address</Table.HeaderCell>
                                       <Table.HeaderCell>Employee Dob</Table.HeaderCell>
                                       <Table.HeaderCell>Employee Login uuid</Table.HeaderCell>
                                   </Table.Row>
                               </Table.Header>
                               <Table.Body>
                                   <Table.Row>
                                       <Table.Cell>{element.name.first} </Table.Cell>
                                       <Table.Cell> {element.email}</Table.Cell>
                                       <Table.Cell>{element.gender} </Table.Cell>
                                       <Table.Cell>{element.cell} </Table.Cell>
                                       <Table.Cell><img src={element.picture.thumbnail} /> </Table.Cell>
                                       <Table.Cell>{element.location.city} </Table.Cell>
                                       <Table.Cell> {element.dob.date}</Table.Cell>
                                       <Table.Cell>{element.login.uuid} </Table.Cell>
                                   </Table.Row>
                               </Table.Body>
                           </Table>
                       </div>
                       })
                   })}

        </div>
        </>)
 
        }
    }

export default Scrolling;


