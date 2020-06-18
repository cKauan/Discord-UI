import React, { useRef, useEffect } from 'react';
import { Container, Messages, InputWrapper , Input , InputIcon } from './styles'
import ChannelMessage, { Mention } from '../ChannelMessage';
const ChannelData: React.FC = () => {
    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;
    useEffect(() => {
        const div = messagesRef.current;
        if ( div ) {
            div.scrollTop = div.scrollHeight;
        }
    }, [messagesRef])
    return ( 
    <Container>
        <Messages ref={messagesRef}>
            <ChannelMessage
                author = "Carlos Kauãn"
                date = "18/06/2020"
                content = "Hoje é um belo dia para estudar!"
            />
            <ChannelMessage
            author = "Carlos Kauãn"
            date = "18/06/2020"
            content = "Hoje é um belo dia para estudar!"
            />
            <ChannelMessage
                author = "Carlos Kauãn"
                date = "18/06/2020"
                content = "Hoje é um belo dia para estudar!"
            />
            <ChannelMessage
                author = "Carlos Kauãn"
                date = "18/06/2020"
                content = "Hoje é um belo dia para estudar!"
            />
            <ChannelMessage
                author = "Carlos Kauãn"
                date = "18/06/2020"
                content = "Hoje é um belo dia para estudar!"
            />
            <ChannelMessage
                author = "Carlos Kauãn"
                date = "18/06/2020"
                content = "Hoje é um belo dia para estudar!"
            />
            <ChannelMessage
                author = "Carlos Kauãn"
                date = "18/06/2020"
                content = "Hoje é um belo dia para estudar!"
            />
            <ChannelMessage
                author = "Carlos Kauãn"
                date = "18/06/2020"
                content = "Hoje é um belo dia para estudar!"
            />
            <ChannelMessage
                author = "Carlos Kauãn"
                date = "18/06/2020"
                content = "Hoje é um belo dia para estudar!"
            />
            <ChannelMessage
                author = "Carlos Kauãn"
                date = "18/06/2020"
                content = "Hoje é um belo dia para estudar!"
            />
            
            
            <ChannelMessage
                author = "Zezão"
                date = "18/06/2020"
                content = {
                    <>
                        <Mention>@Carlos Kauãn</Mention>, lançou a braba kkk
                    </>
                }
                hasMention
                isBot
            />

        </Messages>
        <InputWrapper>
            <Input type="text" placeholder="Conversar em #chat-livre"/>
            <InputIcon/>
        </InputWrapper>
    </Container>
    );
};
export default ChannelData;