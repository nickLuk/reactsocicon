import React from "react";
import "./contactitem.css";

const ContactItem = ({avatar, description, name, gender, iconfacebook, icontwitter, iconlinkedin, iconskype, iconemail}) =>{
    let url=`https://randomuser.me/api/portraits/${gender}/${avatar}.jpg`;
    
    return(
        <div className="row d-flex justify-content-center">
        <div className="col-7 ">
            <div className="panel">
                <div className="panel-body p-t-10">
                    <div className="media-main">
                        <a className="pull-left" href="#" >
                            <img className="thumb-lg img-circle bx-s" src={url} alt="" />
                        </a>
                        <div className="pull-right btn-group-sm butt">
                            <a href="#" className="btn btn-success tooltips" data-placement="top" data-toggle="tooltip" data-original-title="Edit">
                                <i className="fa fa-pencil"></i>
                            </a>
                            <a href="#" className="btn btn-danger tooltips" data-placement="top" data-toggle="tooltip" data-original-title="Delete">
                                <i className="fa fa-close"></i>
                            </a>
                        </div>
                        <div className="info">
                            <h4>{name}</h4>
                            <p className="text-muted">{description}</p>
                        </div>
                    </div>
                    <div className="clearfix">
                    <hr/>
                    <ul className="social-links list-inline p-b-10 col-5">
                        <li>
                            <a title="" data-placement="top" data-toggle="tooltip" class="tooltips" href={iconfacebook} target="_blank" data-original-title="Facebook"><i class="fa fa-facebook"></i></a>
                        </li>
                        <li>
                            <a title="" data-placement="top" data-toggle="tooltip" class="tooltips" href={icontwitter} target="_blank" data-original-title="Twitter"><i class="fa fa-twitter"></i></a>
                        </li>
                        <li>
                            <a title="" data-placement="top" data-toggle="tooltip" class="tooltips" href={iconlinkedin} target="_blank" data-original-title="LinkedIn"><i class="fa fa-linkedin"></i></a>
                        </li>
                        <li>
                            <a title="" data-placement="top" data-toggle="tooltip" class="tooltips" href={iconskype} target="_blank" data-original-title="Skype"><i class="fa fa-skype"></i></a>
                        </li>
                        <li>
                            <a title="" data-placement="top" data-toggle="tooltip" class="tooltips" href={iconemail} target="_blank" data-original-title="Message"><i class="fa fa-envelope-o"></i></a>
                        </li>
                    
                    </ul>
                    <button className="btn btn-outline-primary true col-2 offset-4">Edit</button>
                </div>
            </div>
        </div>
    </div>
</div>
    )
}

export default ContactItem;