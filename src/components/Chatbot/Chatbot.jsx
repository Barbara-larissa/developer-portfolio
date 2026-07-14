import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import styles from './Chatbot.module.css';
import lolaIcon from './img/lola.png';

const respostas = [
    { gatilhos: ['oi', 'olá', 'ola'], resposta: 'Oi! Eu sou a Lola 😊 Como posso te ajudar?' },
    { gatilhos: ['horário', 'horario', 'funcionamento'], resposta: 'Funcionamos de segunda a sexta, das 9h às 18h.' },
    { gatilhos: ['preço', 'preco', 'valor'], resposta: 'Os valores variam de acordo com o serviço.' },
    {
        gatilhos: ['contato', 'telefone', 'email'],
        resposta: 'Você pode falar com a gente pelo e-mail <a href="mailto:larivdev@gmail.com" target="_blank">larivdev@gmail.com</a> ou pelo <a href="https://wa.me/5543996818242" target="_blank" rel="noopener noreferrer">WhatsApp (43) 99681-8242</a>.'
    }
];

function gerarResposta(pergunta) {
    const texto = pergunta.toLowerCase();
    const encontrada = respostas.find(item => item.gatilhos.some(g => texto.includes(g)));
    return encontrada ? encontrada.resposta : 'Ainda não sei responder isso. Tente perguntar sobre horário, preço ou contato.';
}

function useIsTablet() {
    const [isTablet, setIsTablet] = useState(false);
    useEffect(() => {
        const check = () => { const w = window.innerWidth; setIsTablet(w >= 769 && w <= 1200); };
        check();
        window.addEventListener('resize', check);
        return () => window.removeEventListener('resize', check);
    }, []);
    return isTablet;
}

function useTabletAnchor(isTablet) {
    const [anchor, setAnchor] = useState(null);
    useEffect(() => {
        if (!isTablet) { setAnchor(null); return; }
        let anchorEl = document.getElementById('chatbot-tablet-anchor');
        if (!anchorEl) {
            const footerEl = document.querySelector('.footer.mobile-trigger');
            if (footerEl && footerEl.parentNode) {
                anchorEl = document.createElement('div');
                anchorEl.id = 'chatbot-tablet-anchor';
                footerEl.parentNode.insertBefore(anchorEl, footerEl);
            }
        }
        setAnchor(anchorEl);
    }, [isTablet]);
    return anchor;
}

function ChatbotContent({ isOpen, alternarChat, showBubble, mensagens, input, setInput, enviarMensagem, handleKeyDown, mensagensEndRef, sugestaoRapida }) {
    return (
        <aside className={styles.chatContainer}>
            {showBubble && !isOpen && <div className={styles.speechBubble}>Oi! Posso te ajudar?</div>}
            {isOpen && (
                <div className={styles.chatWindow}>
                    <button className={styles.closeButton} onClick={alternarChat}>&times;</button>
                    <div className={styles.mensagens}>
                        {mensagens.map((msg, i) => (
                            <div key={i} className={msg.autor === 'bot' ? styles.msgBot : styles.msgUsuario}
                                dangerouslySetInnerHTML={msg.autor === 'bot' ? { __html: msg.texto } : null}>
                                {msg.autor !== 'bot' ? msg.texto : null}
                            </div>
                        ))}
                        <div ref={mensagensEndRef} />
                    </div>
                    <div className={styles.sugestoesArea}>
                        {['Horário', 'Preço', 'Contato'].map((item) => (
                            <button key={item} onClick={() => sugestaoRapida(item)}>{item}</button>
                        ))}
                    </div>
                    <div className={styles.inputArea}>
                        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={handleKeyDown} placeholder="Digite sua pergunta..." />
                        <button onClick={enviarMensagem}>Enviar</button>
                    </div>
                </div>
            )}
            <button className={styles.chatButton} onClick={alternarChat}><img src={lolaIcon} alt="Lola" /></button>
        </aside>
    );
}

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [showBubble, setShowBubble] = useState(true);
    const [mensagens, setMensagens] = useState([{ autor: 'bot', texto: 'Oi! Eu sou a Lola. Pergunte algo pra mim!' }]);
    const [input, setInput] = useState('');
    
    useEffect(() => {
        const interval = setInterval(() => {
            setShowBubble(prev => !prev);
        }, 6000);
        return () => clearInterval(interval);
    }, []);


    const isTablet = useIsTablet();
    const tabletAnchor = useTabletAnchor(isTablet);
    const mensagensEndRef = useRef(null);

    useEffect(() => { if (isOpen) mensagensEndRef.current?.scrollIntoView({ behavior: "smooth" }); }, [mensagens, isOpen]);

    const alternarChat = () => {
        if (isOpen) setMensagens([{ autor: 'bot', texto: 'Oi! Eu sou a Lola. Pergunte algo pra mim!' }]);
        setIsOpen(!isOpen);
    };

    const sugestaoRapida = (texto) => {
        setMensagens(prev => [...prev, { autor: 'usuario', texto: texto }, { autor: 'bot', texto: gerarResposta(texto) }]);
    };

    function enviarMensagem() {
        if (!input.trim()) return;
        setMensagens(prev => [...prev, { autor: 'usuario', texto: input }, { autor: 'bot', texto: gerarResposta(input) }]);
        setInput('');
    }

    const content = <ChatbotContent isOpen={isOpen} alternarChat={alternarChat} showBubble={showBubble} mensagens={mensagens} input={input} setInput={setInput} enviarMensagem={enviarMensagem} handleKeyDown={(e) => e.key === 'Enter' && enviarMensagem()} mensagensEndRef={mensagensEndRef} sugestaoRapida={sugestaoRapida} />;
    return (isTablet && tabletAnchor) ? ReactDOM.createPortal(content, tabletAnchor) : content;
}