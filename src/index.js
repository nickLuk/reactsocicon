import React from 'react';
import ReactDOM from 'react-dom';
import Search  from "./components/SearchComponent/search";
import ContactList from "./components/ConstacList/ContactList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About/About";
import AddContact from "./components/AddContact/AddContact";
import NotFound from "./components/NotFound/NotFound";
import Edit from "./components/Edit/Edit";
import MainMenu from "./components/MainMenu/MainMenu";
import './index.css';



    class App extends React.Component{
        state ={
            List : [
                {
                    id: 1,
                    name: "Johnny Depp",
                    description: "Actor",
                    avatar: 20,
                    gender: "men",
                    iconfacebook: "https://ru-ru.facebook.com/JohnChristopherOfficial/",
                    icontwitter: "https://ru-ru.facebook.com/JohnChristopherOfficial/",
                    iconlinkedin: "https://www.linkedin.com/",
                    iconskype: "https://www.skype.com/uk/",
                    iconemail:"https://www.google.com/intl/uk/gmail/about/",
                    favorite:  false
                },
                {
                    id:2,
                    name: "Arnold Schwarzenegger",
                    description: "Actor",
                    avatar: 35,
                    gender: "men",
                    iconfacebook:"https://uk-ua.facebook.com/arnold",
                    icontwitter: "https://twitter.com/schwarzenegger?lang=ru",
                    iconlinkedin: "https://www.linkedin.com/",
                    iconskype: "https://www.skype.com/uk/",
                    iconemail:"https://www.google.com/intl/uk/gmail/about/",
                    favorite:  false
                },
                {
                    id:3,
                    name: "Sylvester Stallone",
                    description: "Actor",
                    avatar: 10,
                    gender: "men",
                    iconfacebook:"https://www.facebook.com/SylvesterStallone/",
                    icontwitter: "https://twitter.com/theslystallone",
                    iconlinkedin: "https://www.linkedin.com/",
                    iconskype: "https://www.skype.com/uk/",
                    iconemail:"https://www.google.com/intl/uk/gmail/about/",
                    favorite:  false
                },
                {
                    id:4,
                    name: "Milla Jovovich",
                    description: "Actor",
                    avatar: 30,
                    gender: "women",
                    iconfacebook:"https://www.facebook.com/MillaJovovich/",
                    icontwitter: "https://twitter.com/millajovovich",
                    iconlinkedin: "https://www.linkedin.com/",
                    iconskype: "https://www.skype.com/uk/",
                    iconemail:"https://www.google.com/intl/uk/gmail/about/",
                    favorite:  false
                },
                {
                    id:5,
                    name: "Jon Bon Jovi;",
                    description: "Singer",
                    avatar: 50,
                    gender:"men",
                    iconfacebook:"https://www.facebook.com/BonJovi",
                    icontwitter: "https://twitter.com/jonbonjovi",
                    iconlinkedin: "https://www.linkedin.com/",
                    iconskype: "https://www.skype.com/uk/",
                    iconemail:"https://www.google.com/intl/uk/gmail/about/eexit",
                    favorite: false
                }
                ]
        }
       
    onDelete = id =>{
        const index = this.state.List.findIndex(elem => elem.id === id);
        
        let newList=[];
        let counter = 0;
        
        
           for (let i=0; i<this.state.List.length; i++){
               if (i !==index){
                  newList[counter]=this.state.List[i];
                  counter++;
               }
        
        } 
this.setState(() =>{
    return{
            List:newList
        };
        });
        
       
    };
      
     
    addFavorite=(id) =>{
        this.setState(() =>{
       const index = this.state.List.findIndex(elem => elem.id === id);
         
      
       const newListfav=this.state.List.slice();
               
        newListfav[index].favorite=!newListfav[index].favorite;      
                   
        return{
               
           newListfav
                };
                });

    };

    render (){
        return(
            <Router>
<div className="container bootstrap snippet">

<MainMenu></MainMenu>
<Switch>
<Route
path="/"
exact
component={() => (
<ContactList
ContactList={this.state.List}
onDelete={this.onDelete}
addFavorite={this.addFavorite}
/>
)}
></Route>
<Route path="/about" exact component={About}>
    
</Route>
<Route path="/add" exact component={AddContact}></Route>
<Route path="/edit" exact component={Edit}></Route>
<Route path="*" exact component={NotFound}></Route>
</Switch>
</div>
</Router>
    );
}
}
    
/*<ContactList ContactList={this.state.List} onDelete={this.onDelete} addFavorite={this.addFavorite}></ContactList>*/

ReactDOM.render(<App />, document.getElementById('root'));