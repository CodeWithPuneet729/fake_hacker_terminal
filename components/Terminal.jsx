import React, { useState, useEffect, useRef } from 'react';

const SigmaTyper = () => {
    const [lines, setLines] = useState([]);

    const scrollRef = useRef(null);
    const codeIndex = useRef(0);

    const rawCode = [
        "import socket, sys, os",
        "from Crypto.Cipher import AES",
        "def initiate_handshake(target_ip, port):",
        "    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)",
        "    s.connect((target_ip, port))",
        "    payload = b'\\x41' * 512 + b'\\xeb\\x08\\x90\\x90'",
        "    s.send(payload)",
        "    return s.recv(1024)",
        "# [STATUS] SCANNING MEMORY OFFSET 0x77F83210",
        "buffer = bytearray(os.urandom(1024))",
        "key = AES.new('SIGMA_SECRET_KEY_256', AES.MODE_CBC)",
        "cipher = key.encrypt(buffer)",
        "for i in range(len(cipher)):",
        "    print(f'INJECTING_FRAGMENT: {hex(cipher[i])}')",
        "if access_level == 'ROOT':",
        "    os.system('rm -rf /var/logs/auth.log')",
        "    print('LOGS_PURGED')",
        "# [SUCCESS] ESTABLISHED REVERSE SHELL AT 10.0.0.5",
        "def bypass_firewall():",
        "    packet = b'\\x01\\x03\\x00\\x00\\x00\\x00\\x00\\x00'",
        "    send(packet, verbose=False)",
        "    return True"
    ];

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [lines]);

    useEffect(() => {
        const handleKeyDown = () => {
            const nextLine = rawCode[codeIndex.current % rawCode.length];
            setLines(prev => [...prev, nextLine].slice(-40));
            codeIndex.current++;
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <div className="min-h-screen bg-black p-4 md:p-8 font-mono text-green-500 flex flex-col md:flex-row gap-6 overflow-hidden">
            <div className="flex-3 border-2 border-green-500 rounded shadow-[0_0_20px_rgba(34,197,94,0.3)] bg-black/90 flex flex-col relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(transparent_50%,#000_50%)] bg-size-[100%_4px]"></div>

                <div className="border-b border-green-500 p-3 flex justify-between items-center text-[10px] bg-green-500/5 uppercase">
                    <span className="animate-pulse">● SIGNAL_STRENGTH: 98%</span>
                    <span className='animate-pulse'>TERMINAL</span>
                </div>

                <div ref={scrollRef} className="p-6 flex-1 overflow-y-auto space-y-1 scrollbar-hide">
                    {lines.length === 0 && (
                        <div className="h-full flex items-center justify-center opacity-30 text-2xl animate-pulse">
                            START TYPING TO BREACH...
                        </div>
                    )}
                    {lines.map((line, i) => (
                        <div key={i} className="text-sm md:text-base whitespace-pre-wrap drop-shadow-[0_0_2px_rgba(34,197,94,1)]">
                            {line}
                        </div>
                    ))}
                    {lines.length > 0 && <span className="inline-block w-2 h-5 bg-green-500 animate-pulse" />}
                </div>
            </div>
        </div>
    );
}

export default SigmaTyper;