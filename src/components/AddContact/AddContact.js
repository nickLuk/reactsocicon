import React from "react";
import "./AddContact.css";

class AddContact extends React.Component{
    render(){
        return (
             <div>
                 <div className="container-fluid center">
                                <div className="container">
                                    <div className="contactform">
                                    
                                        <h3 className="col-6 d-flex justify-content-center">Add Contact</h3>
                                        <div className="line"></div>
                                        <form action="" className="col">
                                            <div className="form-row justify-content-around">
                                            <div className="ggg form-group col-8">
                                                <label for="formGroupExampleInput2">First and Last Name</label>
                                                <input type="text" className="form-control" name="firstname" id="formGroupExampleInput2" placeholder=""></input>
                                                <label for="formGroupExampleInput2">Description</label>
                                                <input type="text" className="form-control" name="companyname" id="formGroupExampleInput2" placeholder=""></input>
                                                <label for="formGroupExampleInput2">Avatar</label>
                                                <input type="file" className="form-control-file" name="avatar" id="formGroupExampleInput2" placeholder=""></input>
                                                <label for="formGroupExampleInput2">facebook</label>
                                                <input type="text" className="form-control" name="companyname" id="formGroupExampleInput2" placeholder=""></input>
                                                <label for="formGroupExampleInput2">twitter</label>
                                                <input type="text" className="form-control" name="companyname" id="formGroupExampleInput2" placeholder=""></input>
                                                <label for="formGroupExampleInput2">linkedin</label>
                                                <input type="text" className="form-control" name="companyname" id="formGroupExampleInput2" placeholder=""></input>
                                                <label for="formGroupExampleInput2">skype</label>
                                                <input type="text" className="form-control" name="companyname" id="formGroupExampleInput2" placeholder=""></input>
                                                <label for="formGroupExampleInput2">email</label>
                                                <input type="text" className="form-control" name="companyname" id="formGroupExampleInput2" placeholder=""></input>
                                                
                                            </div>   
                                            </div>
                                        <div className="col-4 offset-6 text-right">
                                               <button type="submit" className="btn btn-primary mb-2">Add</button>
                                        </div>
                                        </form>
                                                    
                                    </div>
                                </div>
                </div>





             </div>
             




        
                 );
       
    }
}
export default AddContact;