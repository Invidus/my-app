import React from 'react';
import Style from './Dialogs.module.css';
import { NavLink } from "react-router-dom";
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialog-reducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => { //Хранятся данные о диалогах 

    let state = props.store.getState().dialogsPage;
    // let newMessageElement = React.createRef();

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }
    let onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }

    return (
        <Dialogs updateNewMessageBody = {onNewMessageChange} sendMessage = {onSendMessageClick}
        dialogsPage = {state}/>

    )
}

export default DialogsContainer;