import React from 'react';
import ReactDOM from 'react-dom';
import Search  from "./components/SearchComponent/search";
import ContactList from "./components/ConstacList/ContactList";

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
                    favorite: false
                },
                {
                    id:2,
                    name: "Arnold Schwarzenegger",
                    description: "Actor",
                    avatar: 35,
                    gender: "men",
                    iconfacebook:"https://uk-ua.facebook.com/arnold",
                    icontwitter: "https://ru-ru.facebook.com/JohnChristopherOfficial/",
                    iconlinkedin: "https://www.linkedin.com/",
                    iconskype: "https://www.skype.com/uk/",
                    iconemail:"https://www.google.com/intl/uk/gmail/about/",
                    favorite: true
                },
                {
                    id:3,
                    name: "Sylvester Stallone",
                    description: "Actor",
                    avatar: 10,
                    gender: "men",
                    iconfacebook:"https://www.facebook.com/SylvesterStallone/",
                    icontwitter: "https://ru-ru.facebook.com/JohnChristopherOfficial/",
                    iconlinkedin: "https://www.linkedin.com/",
                    iconskype: "https://www.skype.com/uk/",
                    iconemail:"https://www.google.com/intl/uk/gmail/about/",
                    favorite: false
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
                    favorite: true
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

    render (){
        return(
        <div className="container bootstrap snippet">
            <Search></Search>
            <ContactList ContactList={this.state.List} onDelete={this.onDelete}></ContactList>
            
        </div>
    );
}
}
    


ReactDOM.render(<App />, document.getElementById('root'));

