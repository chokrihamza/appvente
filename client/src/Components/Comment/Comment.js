import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import { useDispatch, useSelector } from "react-redux";
import { addComment, deleteComment } from "../../js/actions/actionAnnouce";
import { getAnnounceById } from "../../js/actions/actionAnnouce";
import "./Comment.css";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import IconButton from '@material-ui/core/IconButton';
import Alert from '@material-ui/lab/Alert';
import FlashMessage from "react-flash-message";
const useStyles = makeStyles((theme) => ({
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
}));

 
export default function Comment({ location }) {
  const { idComment } = location.state;
  
  useEffect(() => {
    dispatch(getAnnounceById(idComment));
  }, [idComment]);
  const userid = useSelector((state) => state.userReducer.user._id);
  
  const announceid = useSelector((state) => state.announceReducer.announceid);
  const { comments } = announceid;
    
  const [text, setText] = useState("");

  const dispatch = useDispatch();
  const classes = useStyles();
 
  
  return (
    <div className="comment-design">
      <Link to="/Dashboard">
        <Button variant="contained" color="secondary">
          Go To Dashboard
        </Button>{" "}
      </Link>
     
      {comments &&
        comments.map((el) => (
          <div className="chat">
            
            <div className="yours messages">
          
              <div className="message last">
            
                <span>
                  <Avatar
                    small
                    alt="image"
                    src={el.image}
                    className={classes.small}
                  />
                  {el.text}
                  <sub style={{position:"relative"}}>  {
              userid&&userid === el.user ? (
                      <IconButton style={{color:'black', position: 'absolute', top: '0%', left: '-3%' }} onClick={() => {
                        dispatch(deleteComment(idComment, el._id));
                        
                      }
                       } aria-label="delete" size="small">
             <i class="far fa-trash-alt"></i>
               </IconButton>):null
            }</sub>
                </span>
               
              </div>
              <div style={{ color: "black" }}>
                {el.name}|{el.date}
              </div>
              
            </div>
            
            
          </div>
        ))}

      <form class="ui reply form">
        <div class="field">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
        </div>
        <div
          class="ui primary submit labeled icon button"
          onClick={(e) => {
            e.preventDefault();
            dispatch(addComment(idComment, { text }));
            setText("");
          }}
        >
          <i class="icon edit"></i> Add Comment{" "}
        </div>
      </form>
    </div>
  );
}
